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

import { DataStream } from "./stream.js";
import { StreamSubscription } from "./stream_subscription.js";

 /**
 * Класс реализует поток данных
 * можно подписаться на данные методом listen() передав callback.
 * Подписчиков может быть несколько
 * Можно добавлять данные в поток методом add()
 */
export class StreamController {
    #debug = false;
    #stream;
    #listeners = [];
    constructor({
    }={}) {
        this.#stream = new DataStream({
            source: this,
        });
    }
    listen(onData, {onError, onDone, cancelOnError}={}) {
        const streamSubscription = new StreamSubscription({
            onData: onData,
            onDone: onDone,
            onError: onError,
            cancelOnError: cancelOnError,
        });
        this.#listeners.push(
            streamSubscription,
        );
        log(this.#debug, `[StreamController.listen] new listner: `, streamSubscription);
    }
    add(event) {
        log(this.#debug, `[StreamController.add] listeners`, this.#listeners);
        this.#listeners.forEach(listener => {
            log(this.#debug, `[StreamController.add] sending event`, event, ' to listenr ', listener);
            if (listener.onData) {
                listener.onData(event);
            }
        });
    }
    addError(event) {
        this.#listeners.forEach(listener => {
            // log(this.#debug, `[StreamController.addError] sending event ${event} to listenr ${listener}`);
            if (listener.onError) {
                listener.onError(event);
            }
        });
    }
    close() {
        this.#listeners.forEach(listener => {
            // log(this.#debug, `[StreamController.close] sending event ${event} to listenr ${listener}`);
            if (listener.onDone) {
                listener.onDone();
            }
        });
    }
    get stream() {
        return this.#stream;
    }
}
