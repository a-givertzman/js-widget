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
 * Строит виджет по навым евентам из стрим-контроллера
 *
 * @param {string} data текст выводимый виджетом в DOM
 */
export class StreamBuilder {
    #debug = true;
    #widget;
    #streamController;
    #builder;
    constructor({
        streamController,
        builder,
    }={}) {
        this.#streamController = streamController;
        this.#builder = builder;
        // this.#widget = new Widget({
        //     // tagName: 'p',
        //     cssClass: ['text-widget']
        // });
    }
    build() {
        this.#widget = this.#builder({snapshot: {}});
        const element = this.#widget.build().htmlElement;
        // element.innerHTML = this.#data;
        this.#streamController.listen((event) => {
            log(this.#debug, '[StreamBuilder.build] event:', event);
            const widget = this.#builder({snapshot: event}).build();
            this.htmlElement.innerHTML = widget.htmlElement.innerHTML;
        });
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }

}
