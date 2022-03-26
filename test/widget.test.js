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

import { Widget } from "../src/lib/widget.js";

const _debug = true;

describe('Widget', () => {
    var result = '';
    it('create', () => {
        expect(() => {
            const widget = new Widget({
                cssClass: ['center-widget'],
            });
            expect(widget).toBeInstanceOf(Widget);
            expect(() => {return widget.htmlElement;}).toThrow();
        }).not.toThrow();

    });
    it('build', () => {
        expect(() => {
            const widget = new Widget({
            }).build();
            log(_debug, '[Widget.build] htmlElement: ', widget.htmlElement);
            expect(widget).toBeInstanceOf(Widget);
            expect(widget.htmlElement).toBeInstanceOf(HTMLElement);
            expect(widget.htmlElement.classList).toBeInstanceOf(DOMTokenList);
            expect(widget.htmlElement.classList.length).toBe(0);
            expect(widget.htmlElement.tagName.toLowerCase()).toBe('div');
        }).not.toThrow();
    });
    it('build with tag="section"', () => {
        const tagName = 'section';
        expect(() => {
            const widget = new Widget({
                tagName: tagName,
            }).build();
            log(_debug, '[Widget.build with tag="section"] htmlElement: ', widget.htmlElement);
            expect(widget).toBeInstanceOf(Widget);
            expect(widget.htmlElement).toBeInstanceOf(HTMLElement);
            expect(widget.htmlElement.classList).toBeInstanceOf(DOMTokenList);
            expect(widget.htmlElement.classList.length).toBe(0);
            expect(widget.htmlElement.tagName.toLowerCase()).toBe(tagName);
        }).not.toThrow();
    });
    it("build with classList = ['test-widget', 'test1-widget']", () => {
        const tagName = 'section';
        const classes = ['test-widget', 'test1-widget'];
        expect(() => {
            const widget = new Widget({
                tagName: tagName,
                cssClass: classes,
            }).build();
            log(_debug, '[Widget.build] htmlElement: ', widget.htmlElement);
            expect(widget).toBeInstanceOf(Widget);
            expect(widget.htmlElement).toBeInstanceOf(HTMLElement);
            expect(widget.htmlElement.classList).toBeInstanceOf(DOMTokenList);
            expect(widget.htmlElement.classList.length).toBe(classes.length);
            classes.forEach((className) => {
                expect(widget.htmlElement.classList.contains(className)).toBeTrue();
            });
        }).not.toThrow();
    });
    it("build with child = Widget", () => {
        const tagName = 'section';
        expect(() => {
            const widget = new Widget({
                child: new Widget({
                    cssClass: ['child-widget'],
                }),
                tagName: tagName,
                cssClass: ['parent-widget'],
            }).build();
            log(_debug, '[Widget.build] htmlElement: ', widget.htmlElement);
            expect(widget).toBeInstanceOf(Widget);
            expect(widget.htmlElement).toBeInstanceOf(HTMLElement);
            expect(widget.htmlElement.childNodes[0]).toBeInstanceOf(HTMLElement);
            expect(widget.htmlElement.classList).toBeInstanceOf(DOMTokenList);
            expect(widget.htmlElement.classList.length).toBe(1);
            expect(widget.htmlElement.classList.contains('parent-widget')).toBeTrue();
            expect(widget.htmlElement.childNodes[0].classList).toBeInstanceOf(DOMTokenList);
            expect(widget.htmlElement.childNodes[0].classList.length).toBe(1);
            expect(widget.htmlElement.childNodes[0].classList.contains('child-widget')).toBeTrue();
        }).not.toThrow();
    });
});
