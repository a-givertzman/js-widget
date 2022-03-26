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
 * Базовый классс 
 * Создает елемент в дерве DOM
 * @param {string} tag имя тега, которое будет создано, по умолчанию 'div'
 */
export class Widget {
    #debug = false;
    #child;
    #tagName;
    #cssClass;
    #htmlElement;
    constructor({
        child = null, 
        tagName = 'div', 
        cssClass = [],
    }={}) {
        this.#child = child;
        this.#tagName = tagName;
        this.#cssClass = cssClass;
    }
    build() {
        this.#htmlElement = document.createElement(this.#tagName);
        if (!this.#htmlElement) {
            throw new Error(`[Widget.build] error creating document element "${this.#tagName}"`);
        }
        // TODO remove margin to the Margin class
        // this.#htmlElement.style.margin = this.margin ? `${this.margin}px` : '';
        // TODO remove border to the Border class
        // this.#htmlElement.style.border = this.border ? this.border.build() : '';
        if (this.#cssClass.length > 0) {
            this.#htmlElement.classList.add(...this.#cssClass);
        }
        // log(this.#debug, '[Widget.build] child', this.#child);
        if (this.#child) {
            // throw new Error(`[Widget.build] error accessing child widget "${this.constructor.name}"`);
            const childWidget = this.#child.build();
            this.#htmlElement.appendChild(
                childWidget.htmlElement
            );
        }
        // log(this.#debug, '[Widget.build] this: ', this);
        // log(this.#debug, '[Widget.build] child: ', this.#child);
        log(this.#debug, '[Widget.build] child: ', this.htmlElement);
        return this;
        // try {
        // } catch (error) {
        //     log(this.#debug, '[Widget.build] error: ', error);
        //     throw new Error(`[Widget.build] error call method child.build()"; `, error);
        // }
    }
    get htmlElement() {
        if (!this.#htmlElement) {
            throw new Error(`[Widget] error access htmlElement befor it was created`);
        }
        return this.#htmlElement;
    }
}
