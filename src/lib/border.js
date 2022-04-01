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
 * Сторона линии границы элемента
 */
 export class BorderSide {
    #color;
    #width;
    constructor({color = 'transparent', width = 0}={}) {
        this.#color = color;
        this.#width = width;
    }
    build() {
        return `${this.#width}px solid ${this.#color};`;
    }
}

export class BorderRadius {
    #topLeft;
    #topRight;
    #bottomLeft;
    #bottomRight;
    constructor({
        topLeft,
        topRight,
        bottomLeft,
        bottomRight,
    }={}) {
        this.#topLeft = topLeft;
        this.#topRight = topRight;
        this.#bottomLeft = bottomLeft;
        this.#bottomRight = bottomRight;
    }
    static all(radius) {
        return new BorderRadius({
            topLeft: radius,
            topRight: radius,
            bottomLeft: radius,
            bottomRight: radius,
        });
    }
    build() {
        return {
            topLeft: `${this.#topLeft}px`,
            topRight: `${this.#topRight}px`,
            bottomRight: `${this.#bottomRight}px`,
            bottomLeft: `${this.#bottomLeft}px`,
        }
    }
}

/**
 * Линия границы элемента
 */
export class Border {
    #top;
    #right;
    #bottom;
    #left;
    #radius;
    constructor({
        top,
        right,
        bottom,
        left,
        radius,
    }={}) {
        this.#top = top;
        this.#right = right;
        this.#bottom = bottom;
        this.#left = left;
        this.#radius = radius;
    }
    static all({
        color = 'transparent', 
        width = 0, 
        radius = BorderRadius.all(0),
    }={}) {
        return new Border({
            top: new BorderSide({color: color, width: width}),
            right: new BorderSide({color: color, width: width}),
            bottom: new BorderSide({color: color, width: width}),
            left: new BorderSide({color: color, width: width}),
            radius: radius,
        });
    }
    build() {
        return {
            top: this.#top ? this.#top.build() : '',
            right: this.#right ? this.#right.build() : '',
            bottom: this.#bottom ? this.#bottom.build() : '',
            left: this.#left ? this.#left.build() : '',
            radius: this.#radius ? this.#radius.build() : '',
        };
    }
}
