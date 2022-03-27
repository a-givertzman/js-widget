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

/**
 * Подписка на поток асинхронных событий
 */

export class StreamSubscription {
    #onData;
    #onDone;
    #onError;
    #cancelOnError;
    #isPaused = false;
    constructor({
        onData,
        onDone,
        onError,
        cancelOnError = false,
    }={}) {
        this.#onData = onData;
        this.#onDone = onDone;
        this.#onError = onError;
        this.#cancelOnError = cancelOnError;
    }
    get isPaused() {
        return this.#isPaused;
    }
    get onData() {
        return this.#onData;
    }
    get onDone() {
        return this.#onDone;
    }
    get onError() {
        return this.#onError;
    }
    get cancelOnError() {
        return this.#cancelOnError;
    }
    pause() {
        throw Error('[StreamSubscription.pause] needs to be implemented');
        this.#isPaused = true;
    }
    resume() {
        throw Error('[StreamSubscription.resume] needs to be implemented');
        this.#isPaused = false;
    }
    cancel() {
        throw Error('[StreamSubscription.cancel] needs to be implemented');
    }
}