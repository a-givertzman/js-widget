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
 * Выравнивание и распределение элементов в списках
 *
 */
export const MainAxisAlignment = {
    start: 'flex-start', //0,
    end: 'flex-end', //1,
    center: 'center', //2,
    spaceBetween: 'space-between', //3,
    spaceAround: 'space-around', //4,
    spaceEvenly: 'space-evenly', //5,
}

export const CrossAxisAlignment = {
    start: 'flex-start', //0,
    end: 'flex-end', //1,
    center: 'center', //2,
    stretch: 'stretch', //3,
}

export const TextAlign = {
    start: 'start',
    end: 'end',
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
    justifyAll: 'justify-all',
    matchParent: 'match-parent',
}

export const TextAlignVertical = {
    top: 'start',
    center: 'center',
    bottom: 'end',
}

export const Alignment = {
    topLeft: {
        mainAxisAlignment: MainAxisAlignment.start, 
        crossAxisAlignment: CrossAxisAlignment.start,
    },
    topCenter: {
        mainAxisAlignment: MainAxisAlignment.start, 
        crossAxisAlignment: CrossAxisAlignment.center,
    },
    topRight: {
        mainAxisAlignment: MainAxisAlignment.start, 
        crossAxisAlignment: CrossAxisAlignment.end,
    },
    centerLeft: {
        mainAxisAlignment: MainAxisAlignment.center, 
        crossAxisAlignment: CrossAxisAlignment.start,
    },
    center: {
        mainAxisAlignment: MainAxisAlignment.center, 
        crossAxisAlignment: CrossAxisAlignment.center,
    },
    centerRight: {
        mainAxisAlignment: MainAxisAlignment.center, 
        crossAxisAlignment: CrossAxisAlignment.end,
    },
    bottomLeft: {
        mainAxisAlignment: MainAxisAlignment.end, 
        crossAxisAlignment: CrossAxisAlignment.start,
    },
    bottomCenter: {
        mainAxisAlignment: MainAxisAlignment.end, 
        crossAxisAlignment: CrossAxisAlignment.center,
    },
    bottomRight: {
        mainAxisAlignment: MainAxisAlignment.end, 
        crossAxisAlignment: CrossAxisAlignment.end,
    },
}