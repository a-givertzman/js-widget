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
import { Center } from "../../../src/js-widgets/center.js";
import { Container } from "../../../src/js-widgets/container.js";
import { Row } from "../../../src/js-widgets/row.js";
import { Column } from "../../../src/js-widgets/column.js";
import { Scaffold } from "../../../src/js-widgets/scaffold.js";
import { TextOverflow, TextWidget } from "../../../src/js-widgets/text.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../../../src/js-widgets/alignment.js";
import { TextButton } from "../../../src/js-widgets/text_button.js";
import { Expanded } from "../../../src/js-widgets/expanded.js";
import { TextFormField } from "../../../src/js-widgets/text_form_field.js";
import { ButtonStyle } from "../../../src/js-widgets/button_style.js";
import { SizedBox } from "../../../src/js-widgets/sizedbox.js";
import { Padding } from "../../../src/js-widgets/padding.js";
import { InputDecoration } from "../../../src/js-widgets/input_decoration.js";
import { Border } from "../../../src/js-widgets/border.js";
import { EdgeInsets } from "../../../src/js-widgets/edge_insets.js";

export class TestInputPage {
    #widget;
    constructor({}={}) {
        this.#widget = new Scaffold({
            title: 'Test Input Page',
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
                                            this.#widget.close({result: 'FirstPageResult'});
                                        },
                                        child: new TextWidget('←', {
                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                        })
                                    }),
                                    new TextWidget('Test Input Page', {
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
                            // color: '#aaaaaa',
                            child: new Center({
                                child: new Container({
                                    width: 200,
                                    child: new Column({
                                        // mainAxisAlignment: MainAxisAlignment.center,
                                        crossAxisAlignment: CrossAxisAlignment.stretch,
                                        children: [
                                            new TextWidget('Номер телефона:', {
                                                style: {
                                                    // ...appThemeData.textTheme.headline6, 
                                                    ...{color: '#000000'}
                                                }
                                            }),
                                            new SizedBox({height: 8}),
                                            new Padding({
                                                padding: EdgeInsets.all(8),
                                                child: new TextFormField({
                                                    decoration: new InputDecoration({
                                                        border: Border.all({color: '#cccccc', width: 1})
                                                    }),
                                                    style: {
                                                        ...{fontSize: 16}, 
                                                        ...{color: '#000000'}
                                                    },
                                                    onChanged: (value) => {
                                                        // this.#onLoginChanged(value);
                                                    },
                                                    onComplete: (value) => {
                                                        // this.#onLoginCompletted(value);
                                                    },
                                                }),
                                            }),
                                            new SizedBox({height: 24}),
                                            new TextWidget('Пароль:', {
                                                style: {
                                                    // ...appThemeData.textTheme.headline6, 
                                                    ...{color: '#000000'}
                                                },
                                            }),
                                            new SizedBox({height: 8}),
                                            new Padding({
                                                padding: EdgeInsets.all(8),
                                                child: new TextFormField({
                                                    decoration: new InputDecoration({
                                                        border: Border.all({color: '#cccccc', width: 1})
                                                    }),
                                                    obscureText: true,
                                                    style: {
                                                        ...{fontSize: 16}, 
                                                        ...{color: '#000000'}
                                                    },
                                                    onChanged: (e) => {
                                                        // this.#onPassChanged(e);
                                                    },
                                                    onComplete: (e) => {
                                                        // this.#onPassCompletted(e);
                                                    },
                                                }),
                                            }),
                                            new SizedBox({height: 24}),
                                            new TextButton({
                                                child: new TextWidget(
                                                    'вход', {
                                                    style: {
                                                        // ...appThemeData.textTheme.headline6, 
                                                        ...{color: '#000000'}
                                                    },
                                                }),
                                                style: new ButtonStyle({
                                                    backgroundColor: '#FF9B40',
                                                    foregroundColor: '#ffffff',
                                                }),
                                                onPressed: (e) => {
                                                    console.log('TextButton signIn cliced');
                                                    // this.#onSignInPressed(e);
                                                },
                                            }),
                                        ],
                                    }),
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
