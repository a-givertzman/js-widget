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

import { menuHeaderTextStyle } from "./app_styles.js";
import { Center } from "../../../src/lib/center.js";
import { Container } from "../../../src/lib/container.js";
import { Row } from "../../../src/lib/row.js";
import { Column } from "../../../src/lib/column.js";
import { Scaffold } from "../../../src/lib/scaffold.js";
import { TextOverflow, TextWidget } from "../../../src/lib/text.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../../../src/lib/alignment.js";
import { TextButton } from "../../../src/lib/text_button.js";
import { Expanded } from "../../../src/lib/expanded.js";
import { SizedBox } from "../../../src/lib/sizedbox.js";
import { MaterialRoute } from "../../../src/lib/material_route.js";
import { FirstPage } from "./first_page.js";

export class ThirdPage {
    #debug = true;
    #widget;
    constructor({}={}) {
        this.#widget = new Scaffold({
            title: 'Third Page',
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
                                            this.#widget.close({result: 'ThirdPageResult'});
                                        },
                                        child: new TextWidget('???', {
                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                        }),
                                    }),
                                    new TextWidget('Third Page', {
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
                            color: '#5050aa',
                            child: new Column({
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: [
                                    new Container({
                                        child: new TextWidget(
                                            'Third Page Content', {
                                            overflow: TextOverflow.clip,
                                        }),
                                        color: '#f2f2f2',
                                        width: 200,
                                        height: 200,
                                    }),
                                    new SizedBox({height: 10}),
                                    new TextButton({
                                        child: new TextWidget('First Page', {
                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                        }),
                                        onPressed: (e) => {
                                            new MaterialRoute({
                                                path: '/firstPage',
                                                widget: new FirstPage({}),
                                            })
                                            .build()
                                            .then((result) => {
                                                log(this.#debug, '[App.HomePage.onNavigate] result: ', result);
                                            });
                                        },
                                    }),
                                ],
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
