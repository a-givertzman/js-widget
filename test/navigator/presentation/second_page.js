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
import { log } from "../../../src/plugins/debug/debug.js";
import { menuHeaderTextStyle } from "./app_styles.js";
import { Center } from "../../../src/js-widgets/center.js";
import { Container } from "../../../src/js-widgets/container.js";
import { Row } from "../../../src/js-widgets/row.js";
import { Column } from "../../../src/js-widgets/column.js";
import { Scaffold } from "../../../src/js-widgets/scaffold.js";
import { TextOverflow, TextWidget } from "../../../src/js-widgets/text.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../../../src/js-widgets/alignment.js";
import { TextButton } from "../../../src/js-widgets/text_button.js";
import { Expanded } from "../../../src/js-widgets/expanded.js";

export class SecondPage {
    #widget;
    constructor({}={}) {
        this.#widget = new Scaffold({
            title: 'Second Page',
            child: new Column({
                children: [
                    new Expanded({
                        child: new Container({
                            color: '#5050ff',
                            height: 60,
                            child: new Row({
                                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                children: [
                                    new TextButton({
                                        onPressed: event => {
                                            this.#widget.close({result: 'SecondPageResult'});
                                        },
                                        child: new TextWidget('←', {
                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                        }),
                                    }),
                                    new TextWidget('Second Page', {
                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                    }),
                                    new TextWidget('icon', {
                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                    }),
                                ]
                            }),
                        }),
                    }),
                    new Expanded({
                        child: new Container({
                            color: '#50aa50',
                            child: new Center({
                                child: new Container({
                                    child: new TextWidget(
                                        'Second Page Content', {
                                        overflow: TextOverflow.clip,
                                    }),
                                    color: '#f2f2f2',
                                    width: 200,
                                    height: 200,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
        });
    }
    build() {
        return this.#widget.build();
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}
