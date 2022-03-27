"use strict";

/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2021 Anton Lobanov

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { StreamSubscription } from "./stream_subscription.js";

 /**
 * Источник асинхронных событий
 * можно подписаться на события методом listen(callback) передав callback.
 * Подписчиков может быть несколько
 */
export class DataStream {
    #debug = false;
    #source;
    #subscribed = false;
    #listeners = [];
    constructor({
        source = source,
    }={}) {
        this.#source = source;
    }
    #onData(event) {
        log(this.#debug, `[DataStream.onData] event: `, event);
        this.#listeners.forEach(listener => {
            if (listener.onData) {
                listener.onData(event);
            }
        });
    }
    #onDone() {
        this.#listeners.forEach(listener => {
            if (listener.onDone) {
                listener.onDone();
            }
        });
    }
    #onError(error) {
        this.#listeners.forEach(listener => {
            if (listener.onError) {
                listener.onError(error);
            }
        });
    }
    listen(onData, {onError, onDone, cancelOnError}={}) {
        const self = this;
        if (!self.#subscribed) {
            log(self.#debug, `[DataStream.listen] source subscription`);
            self.#subscribed = true;
            self.#source.listen(
                event => self.#onData(event), {
                onDone: () => self.#onDone(),
                onError: (error) => self.#onError(error),
            });
        }
        const streamSubscription = new StreamSubscription({
            onData: onData,
            onDone: onDone,
            onError: onError,
            cancelOnError: cancelOnError,
        });
        this.#listeners.push(
            streamSubscription,
        );
        log(this.#debug, `[DataStream.listen] new listner: `, streamSubscription);
    }
}
