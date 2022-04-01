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
import { SizedBox } from "../../../src/lib/sizedbox.js";
import { Center } from "../../../src/lib/center.js";
import { Container } from "../../../src/lib/container.js";
import { Row } from "../../../src/lib/row.js";
import { Column } from "../../../src/lib/column.js";
import { Scaffold } from "../../../src/lib/scaffold.js";
import { TextOverflow, TextWidget } from "../../../src/lib/text.js";
import { Alignment, CrossAxisAlignment, MainAxisAlignment } from "../../../src/lib/alignment.js";
import { TextButton } from "../../../src/lib/text_button.js";
import { MaterialRoute } from "../../../src/lib/material_route.js";
import { FirstPage } from "./first_page.js";
import { SecondPage } from "./second_page.js";
import { ThirdPage } from "./third_page.js";
import { TestInputPage } from "./test_input_page.js";
import { Expanded } from "../../../src/lib/expanded.js";
import { SearcchFieldPage } from "./search_field_page.js";
import { StreamPage } from "../../stream/stream_page.js";
import { EdgeInsets } from "../../../src/lib/edge_insets.js";
import { Border, BorderRadius } from "../../../src/lib/border.js";
import { SingleChildScrollView } from "../../../src/lib/single_child_scroll_view.js";
import { Axis } from "../../../src/lib/orientation.js";

export class HomePage {
    #widget;
    navigateTo;
    constructor({
        onNavigate,
    }={}) {
        this.navigateTo = onNavigate;
        this.#widget = new Scaffold({
            title: 'Home Page',
            child: new Container({
                // margin: new EdgeInsets({top: 10.5, left: 50, bottom: 35, right: 65}),
                padding: EdgeInsets.all(20),
                // border: Border.all({color: '#ff5500', width: 0, radius: BorderRadius.all(7)}),
                color: '#3400df',
                alignment: Alignment.topCenter,
                child: new SingleChildScrollView({
                    direction: Axis.vertical,
                    child: new Column({
                        children: [
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                            new TextWidget('Home Page', {
                                style: {...menuHeaderTextStyle, ...{fontSize: 16, color: '#000000'}},
                            }),
                        ],
                    }),
                }),
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
