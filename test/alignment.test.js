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

import { CrossAxisAlignment, MainAxisAlignment, TextAlign, TextAlignVertical } from "../src/lib/alignment.js";

const _debug = true;

describe('Alignment', () => {
    it('MainAxisAlignment', () => {
        expect(MainAxisAlignment.start).toBe('flex-start');
        expect(MainAxisAlignment.end).toBe('flex-end');
        expect(MainAxisAlignment.center).toBe('center');
        expect(MainAxisAlignment.spaceBetween).toBe('space-between');
        expect(MainAxisAlignment.spaceAround).toBe('space-around');
        expect(MainAxisAlignment.spaceEvenly).toBe('space-evenly');
    });
    it('CrossAxisAlignment', () => {
        expect(CrossAxisAlignment.start).toBe('flex-start');
        expect(CrossAxisAlignment.end).toBe('flex-end');
        expect(CrossAxisAlignment.center).toBe('center');
        expect(CrossAxisAlignment.stretch).toBe('stretch');
    });
    it('TextAlign', () => {
        expect(TextAlign.start).toBe('start');
        expect(TextAlign.end).toBe('end');
        expect(TextAlign.left).toBe('left');
        expect(TextAlign.right).toBe('right');
        expect(TextAlign.center).toBe('center');
        expect(TextAlign.justify).toBe('justify');
        expect(TextAlign.justifyAll).toBe('justify-all');
        expect(TextAlign.matchParent).toBe('match-parent');
    });
    it('TextAlignVertical', () => {
        expect(TextAlignVertical.top).toBe('start');
        expect(TextAlignVertical.center).toBe('center');
        expect(TextAlignVertical.bottom).toBe('end');
    });
});
