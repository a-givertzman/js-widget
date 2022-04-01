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
import { Axis } from "./orientation.js";

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
export class SingleChildScrollView {
    #debug = true;
    #key;
    #child;
    #direction;
    #reverse;
    #padding;
    #primary;
    #physics;
    #widget;
    constructor({
        key, 
        child, 
        direction = Axis.vertical, 
        reverse = false, 
        padding = EdgeInsets.all(0), 
        primary, //bool
        physics, //ScrollPhysics
        // controller, //ScrollController
        // DragStartBehavior dragStartBehavior = DragStartBehavior.start, 
        // Clip clipBehavior = Clip.hardEdge, 
        // String? restorationId,
        // ScrollViewKeyboardDismissBehavior keyboardDismissBehavior = ScrollViewKeyboardDismissBehavior.manual
    }={}) {
        this.#key = key;
        this.#child = child;
        this.#direction = direction;
        this.#reverse = reverse;
        this.#padding = padding;
        this.#primary = primary;
        this.#physics = physics;
        this.#widget = new Widget({
            child: this.#child,
            // new Widget({
            //     child: this.#child,
            //         cssClass: [
            //             this.#direction == Axis.vertical ? 'single-child-scroll-vertial-widget-content' : 'single-child-scroll-horizontal-widget-content',
            //         ]
            //     }),
            cssClass: [
                this.#direction == Axis.vertical ? 'single-child-scroll-vertial-widget' : 'single-child-scroll-horizontal-widget',
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        if (!element) {
            throw new Error(`[Container] error building child "${this.#widget.constructor.name}"`);
        }
        //  element.style.backgroundColor = this.#color ? this.#color : 'transparent';
        const insets = this.#padding.build();
        element.style.padding = insets 
            ? `${insets.top} ${insets.right} ${insets.bottom} ${insets.left}` 
            : '';
        log(this.#debug, '[Container.build] child: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}