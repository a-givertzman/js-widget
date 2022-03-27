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
import { Size } from "./size.js";
import { FontWeight } from "./font_weight.js";

/**
 * Текстовый виджет
 *
 * @param {Size} size размер DOM
 */
export class CustomPaint {
    #debug = true;
    #ctx;
    #size;
    #style;
    #stream;
    #widget;
    #x;
    constructor({
        size = Size(150, 150),
        style = {
            color: '#000000',
            backgroundColor: '#55ffaa'
        },
        stream,
    }={}) {
        this.#size = size;
        this.#style = style;
        this.#stream = stream;
        this.#widget = new Widget({
            tagName: 'canvas',
            cssClass: ['custom-paint-widget']
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        element.innerHTML = ' ';
        element.width = this.#size.width;
        element.height = this.#size.height;
        // element.style.width = this.#size.width;
        // element.style.height = this.#size.height;
        this.#ctx = this.#setupCanvas(element, 600);
        // this.#ctx.canvas.width = this.#size.width;
        // this.#ctx.canvas.height = this.#size.height;
        this.#ctx.imageSmoothingQuality = "high"; //"low" || "medium" || "high";
        this.#ctx.imageSmoothingEnabled = false;
        this.#ctx.fillStyle = this.#style.backgroundColor;
        this.#ctx.fillRect(0, 0, this.#size.width, this.#size.height);

        const xScale = 2.5;
        const yScale = 1.9;
        var xValue = 0;
        this.#stream.listen(event => {
            log(this.#debug, `[CustomPaint.build] event: `, event);
            const x = xValue * xScale;
            const yValue = Number.parseFloat(event.value).toFixed(5);
            const y = this.#size.height / 2 - yValue * yScale;
            log(this.#debug, `[CustomPaint.build] x: ${xValue},  y: ${y}`);
            this.#ctx.fillStyle = this.#style.color;
            this.#ctx.fillRect(x, y, 1, 1);
            // this.#ctx.stroke();
            if (x >= (this.#size.width - 1)) {
                const shift = 1 * xScale;
                const shiftScaled = shift * (this.#ctx.canvas.width / this.#size.width);
                // shift everything to the left:
                const imageData = this.#ctx.getImageData(shiftScaled, 0, this.#ctx.canvas.width - shiftScaled, this.#ctx.canvas.height);
                this.#ctx.fillStyle = this.#style.backgroundColor;
                // this.#ctx.clearRect(0, 0, this.#size.width, this.#size.height);
                this.#ctx.putImageData(imageData, 0, 0);
                this.#ctx.fillRect(this.#size.width - shift, 0, this.#size.width, this.#size.height);
                // now clear the right-most pixels:
                // x = this.#size.width - 1;
                log(this.#debug, `[CustomPaint.build] new x: ${xValue}`);
                xValue = xValue - shift;
            } else {
                xValue++;
            }
        })
        // element.style.color = this.#style?.color;
        // element.style.backgroundColor = this.#style?.backgroundColor;
        // element.style.fontSize = this.#style?.fontSize ? `${this.#style.fontSize}px` : 'inherit';
        // element.style.fontFamily = this.#style?.fontFamily ?? 'inherit';
        // element.style.fontWeight = this.#style?.fontWeight ?? 'inherit';
        // element.style.overflow = this.#overflow ? 'hidden' : '';
        // element.style.textOverflow = this.#overflow;
        // element.style.textAlign = this.#style?.textAlign;
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
    #setupCanvas(canvas, dpi) {
        // Get the device pixel ratio, falling back to 1.
        log(this.#debug, `[CustomPaint.setupCanvas] canvas: `, canvas);
        var dpr = 10;//window.devicePixelRatio || 1;
        log(this.#debug, `[CustomPaint.setupCanvas] window.devicePixelRatio: ${window.devicePixelRatio}`);
        log(this.#debug, `[CustomPaint.setupCanvas] dpi: ${dpi}`);
        // Get the size of the canvas in CSS pixels.
        canvas.style.width = canvas.style.width || canvas.width + 'px';
        canvas.style.height = canvas.style.height || canvas.height + 'px';
    
        // Resize canvas and scale future draws.
        var scaleFactor = dpi / 96;
        canvas.width = Math.ceil(canvas.width * scaleFactor);
        canvas.height = Math.ceil(canvas.height * scaleFactor);
        var ctx = canvas.getContext('2d');
        ctx.scale(scaleFactor, scaleFactor);
        return ctx;
    }
}
