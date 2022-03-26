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

import { Widget } from "./widget.js";

/**
 * Создает пустое пространство заданного размера
 *
 * @param {Widget} child виджет, который будет внутри
 */
export class SizedBox {
    #child;
    #width;
    #height;
    #widget;
    constructor({child, width, height}={}) {
        this.#child = child;
        this.#width = width;
        this.#height = height;
        this.#widget = new Widget({
            child: this.#child,
            cssClass: [
                'sized-box-widget',
            ]
        });
    }
    build() {
        // if (this.child) {
        //     this.child.build();
        //     this.widget.htmlElement.appendChild(this.child.element);
        // }
        const el = this.#widget.build().htmlElement;
        el.style.width = this.#width ? `${this.#width}px` : '';
        el.style.height = this.#height ? `${this.#height}px` : '';
        el.style.maxWidth = this.#width ? `${this.#width}px` : '';
        el.style.maxHeight = this.#height ? `${this.#height}px` : '';
        // el.style.backgroundColor = 'transparent';
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}