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

import { DataStream } from "../src/lib/stream/stream.js";
import { StreamController } from "../src/lib/stream/stream_controller.js";

const _debug = true;

describe('Stream', () => {
    var result = '';
    it('create', () => {
        const streamController = new StreamController();
        const stream = streamController.stream;
        var index = 0;
        expect(streamController).toBeInstanceOf(StreamController);
        expect(stream).toBeInstanceOf(DataStream);
    });
    it('add(Integer)', () => {
        const streamController = new StreamController();
        const stream = streamController.stream;
        var index = 0;
        stream.listen(event => {
            log(_debug, '[Test.Stream.add(Integer)] event: ', event);
            expect(event).toBeInstanceOf(Number);
            expect(event).toEqual(index);
            index++;
        });
        expect(streamController).toBeInstanceOf(StreamController);
        expect(stream).toBeInstanceOf(DataStream);
        for(var i = 0; i < 10; i++) {
            // log(_debug, '[Test.Stream.add(Integer)] int: ', i);
            streamController.add(i);
        }
    });
    it('add(Object)', () => {
        const streamController = new StreamController();
        const stream = streamController.stream;
        var index = 0;
        stream.listen(event => {
            log(_debug, '[Test.Stream.add(Object)] event: ', event);
            expect(event).toBeInstanceOf(Object);
            expect(event).toEqual({param: index});
            index++;
        });
        expect(streamController).toBeInstanceOf(StreamController);
        expect(stream).toBeInstanceOf(DataStream);
        for(var i = 0; i < 10; i++) {
            streamController.add({param: i});
        }
        streamController.close();
    });
    it('onError', () => {
        const streamController = new StreamController();
        const stream = streamController.stream;
        var index = 0;
        stream.listen(
            (event) => {
                log(_debug, '[Test.Stream.onError] event: ', event);
                expect(event).toBeInstanceOf(Object);
                expect(event).toEqual({param: index});
                index++;
            }, {
            onDone: () => {
                log(_debug, '[Test.Stream.onError] done emitted');
            },
            onError: (error) => {
                log(_debug, '[Test.Stream.onError] error: ', error);
            },
        });
        expect(streamController).toBeInstanceOf(StreamController);
        expect(stream).toBeInstanceOf(DataStream);
        for(var i = 0; i < 10; i++) {
            streamController.add({param: i});
            if (i == 4) {
                streamController.addError(
                    new Error('test stream error'),
                );
            }
        }
        streamController.close();
    });
    it('onDone', () => {
        const streamController = new StreamController();
        const stream = streamController.stream;
        var index = 0;
        stream.listen(
            (event) => {
                log(_debug, '[Test.Stream.onDone] event: ', event);
                expect(event).toBeInstanceOf(Object);
                expect(event).toEqual({param: index});
                index++;
            }, {
            onDone: () => {
                log(_debug, '[Test.Stream.onDone] done emitted');
            },
            onError: (error) => {
                log(_debug, '[Test.Stream.onDone] error: ', error);
            },
        });
        expect(streamController).toBeInstanceOf(StreamController);
        expect(stream).toBeInstanceOf(DataStream);
        for(var i = 0; i < 10; i++) {
            streamController.add({param: i});
            if (i == 6) {
                streamController.close();
            }
        }
    });
});
