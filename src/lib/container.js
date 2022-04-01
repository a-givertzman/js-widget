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
import { Border } from "./border.js";
import { EdgeInsets } from "./edge_insets.js";
import { CrossAxisAlignment, MainAxisAlignment } from "./alignment.js";

/**
 * Виджет имеющий размеры, цвет фона отступы внешние и внутренние, контур
 * А также вложенный виджет
 * @param {Widget} child вложенный виджет
 * @param {Number} width ширина виджета
 * @param {Number} height высота виджета
 * @param {Color} color цвет фона виджета, по умолчанию прозрачный
 * @param {Number} margin внешние отступы
 * @param {Number} padding внутренние отступы
 * @param {Border} border контур
 */
export class Container {
    #debug = false;
    #child;
    #widget;
    #width;
    #height;
    #color;
    #margin;
    #padding;
    #border;
    #alignment;
    constructor({
        child, 
        width, 
        height, 
        color, 
        margin, 
        padding = EdgeInsets.all(0.0),
        alignment,
        border = new Border({
            width: 0,
            color: 'transparent',
            radius: 0,
        }),
    }={}) {
        this.#child = child;
        this.#width = width;
        this.#height = height;
        this.#color = color;
        this.#margin = margin;
        this.#padding = padding;
        this.#border = border;
        this.#alignment = alignment;
        this.#widget = new Widget({
            child: this.#child,
            cssClass: [
                'container-widget',
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        if (!element) {
            throw new Error(`[Container] error building child "${this.#widget.constructor.name}"`);
        }
        if (this.#alignment) {
            if (!this.#width) {
                element.style.alignSelf = CrossAxisAlignment.stretch;
            }
            element.style.flexGrow = '1';
            element.style.alignItems = this.#alignment.mainAxisAlignment;
            element.style.justifyContent = this.#alignment.crossAxisAlignment;
        }
        element.style.width = this.#width ? `${this.#width}px` : '';
        element.style.height = this.#height ? `${this.#height}px` : '';
        element.style.maxWidth = this.#width ? `${this.#width}px` : '';
        element.style.maxHeight = this.#height ? `${this.#height}px` : '';
        element.style.backgroundColor = this.#color ? this.#color : 'transparent';
        if (this.#padding) {
            const paddingInsets = this.#padding.build();
            element.style.padding = paddingInsets 
                ? `${paddingInsets.top} ${paddingInsets.right} ${paddingInsets.bottom} ${paddingInsets.left}` 
                : '';
        }
        if (this.#margin) {
            const marginInsets = this.#margin.build();
            element.style.margin = marginInsets 
                ? `${marginInsets.top} ${marginInsets.right} ${marginInsets.bottom} ${marginInsets.left}` 
                : '';
        }
        if (this.#border) {
            const border = this.#border.build();
            element.style.borderTop = border ? `${border.top}` : '';
            element.style.borderRight = border ? `${border.right}` : '';
            element.style.borderBottom = border ? `${border.bottom}` : '';
            element.style.borderLeft = border ? `${border.left}` : '';
            element.style.borderTopLeftRadius = border.radius.topLeft;
            element.style.borderTopRightRadius = border.radius.topRight;
            element.style.borderBottomRightRadius = border.radius.bottomRight;
            element.style.borderBottomLeftRadius = border.radius.bottomLeft;
        }
        // log(this.#debug, '[Container.build] this: ', this);
        // log(this.#debug, '[Container.build] child: ', this.#child);
        log(this.#debug, '[Container.build] child: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}