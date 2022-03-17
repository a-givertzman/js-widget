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
import { SearchField } from "../../../src/js-widgets/search_field.js";
import { SizedBox } from "../../../src/js-widgets/sizedbox.js";

const items = [
    {id: '0', name: 'item 0'},
    {id: '1', name: 'item 1'},
    {id: '2', name: 'item 2'},
    {id: '3', name: 'item 3 s,ejhafv sdfvmhsf v,jsbhv ,'},
    {id: '4', name: 'item 4'},
    {id: '5', name: 'item 5'},
    {id: '6', name: 'item 6'},
    {id: '7', name: 'item 7'},
    {id: '8', name: 'item 8'},
    {id: '9', name: 'item 9'},
    {id: '10', name: 'item 10'},
    {id: '11', name: 'item 11'},
    {id: '12', name: 'item 12'},
    {id: '13', name: 'item 13'},
    {id: '14', name: 'item 14'},
    {id: '15', name: 'item 15'},
    {id: '16', name: 'item 16'},
];

export class SearcchFieldPage {
    #debug = true;
    #widget;
    constructor({}={}) {
        this.#widget = new Scaffold({
            title: 'Search Field Page',
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
                                            this.#widget.close({result: 'SearchFieldPageResult'});
                                        },
                                        child: new TextWidget('←', {
                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                        })
                                    }),
                                    new TextWidget('Search Field Page', {
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
                            color: '#aa5050',
                            child: new Column({
                                mainAxisAlignment: MainAxisAlignment.start,
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                    new TextWidget(
                                        'Try search field:', {
                                        overflow: TextOverflow.clip,
                                    }),
                                    new SizedBox({height: 8}),
                                    new SearchField({
                                        itemCount: items.length,
                                        itemBuilder: (index) => {
                                            log(this.#debug, 'item: ', items[index].id + ' | ' + items[index].name);
                                            return new TextWidget(
                                                items[index].id + ' | ' + items[index].name, {
                                                key: items[index].id,
                                            });
                                        },
                                        placeholder: 'search...',
                                        valueField: 'id',
                                        labelField: 'title',
                                        searchField: ['id', 'title'],
                                    }),
                                    new Center({
                                        child: new Container({
                                            color: '#f2f2f2',
                                            width: 500,
                                            height: 500,
                                            child: new Column({
                                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                                children: [
        
                                                ],
                                            }),
                                        }),
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
