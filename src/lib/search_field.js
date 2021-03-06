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

import { Column } from "./column.js";
import { TextFormField } from "./text_form_field.js";
import { ListView } from "./listview.js";
import { Widget } from "./widget.js";
import { InputDecoration } from "./input_decoration.js";
import { SingleChildScrollView } from "./single_child_scroll_view.js";
import { CrossAxisAlignment, MainAxisAlignment, TextAlign } from "./alignment.js";
 
/**
 * Поисковая строка с выпадающим списком
 * @param {string} tag имя тега, которое будет создано, по умолчанию 'div'
 */
export class SearchField {
    #debug = true;
    #children;
    #widget;
    #itemCount;
    #itemBuilder;
    hintText;
    #valueField;
    #labelField;
    #searchField;
    #maxOptions = 1000;
    #cssClass;
    #inputWidget;
    #listWidget;
    #htmlElement;
    constructor({
        // children = [], 
        itemCount,
        itemBuilder = () => {},
        placeholder = '',
        valueField = 'id',
        labelField = 'title',
        searchField = ['id', 'title'],
        cssClass = [],
    }={}) {
        // this.#children = children;
        this.#itemCount = itemCount;
        this.#itemBuilder = itemBuilder;
        this.hintText = placeholder;
        this.#valueField = valueField;
        this.#labelField = labelField;
        this.#searchField = searchField;
        this.#cssClass = cssClass;
        this.#listWidget = new SingleChildScrollView({
            child: new ListView({
                itemCount: this.#itemCount,
                itemBuilder: (index) => {
                    const item = this.#itemBuilder(index);
                    return item
                },
            }),
        });
        this.#inputWidget = new TextFormField({
            textAlign: TextAlign.start,
            style: {...{backgroundColor: '#dddddd', fontSize: 16, widget: 400}},
            decoration: new InputDecoration({
                hintText: this.hintText,
            }),
            onFocuse: (e) => {
                if (e.type == 'focus') {
                    this.#listWidget.htmlElement.style.display = 'flex';
                } else {
                    this.#listWidget.htmlElement.style.display = 'none';
                }
            }
        });
        this.#widget = new Widget({
            child: new Column({
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                    this.#inputWidget,
                    this.#listWidget,
                ],
            }),
            cssClass: [
                'search-field-widget',
            ],
        });
    }
    build() {
        this.#widget.build();
        // this.#widget.htmlElement.flex = '1 0';
        this.#listWidget.htmlElement.parentNode.style.position = 'relative';
        this.#listWidget.htmlElement.style.position = 'absolute';
        this.#listWidget.htmlElement.style.backgroundColor = '#dddddd';
        this.#listWidget.htmlElement.style.top = '18px';
        this.#listWidget.htmlElement.style.maxHeight = '150px';
        this.#listWidget.htmlElement.style.display = 'none';
        log(this.#debug, '[SearchField.build] child: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}
