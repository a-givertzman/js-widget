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

// import { FirstPage } from "./first_page.js";
// import {  } from "./second_page.js";
// import {  } from "./third_page.js";
// import {  } from "./test_input_page.js";
// import {  } from "./search_field_page.js";
import { menuHeaderTextStyle } from "../navigator/presentation/app_styles.js";
import { SizedBox } from 'js-widget/sizedbox.js';
import { Center } from "js-widget/center.js";
import { Container } from "js-widget/container.js";
import { Row } from "js-widget/row.js";
import { Column } from "js-widget/column.js";
import { Scaffold } from "js-widget/scaffold.js";
import { TextWidget } from "js-widget/text.js";
import { MainAxisAlignment, CrossAxisAlignment } from "js-widget/alignment.js";
import { TextButton } from "js-widget/text_button.js";
import { MaterialRoute } from "js-widget/material_route.js";
import { Expanded } from "js-widget/expanded.js";
import { StreamBuilder } from "js-widget/stream_builder.js";
import { StreamDataSource } from "js-widget/stream/stream_data_source.js";
import { CustomPaint } from "../../src/lib/custom_paint.js";
import { Size } from "../../src/lib/size.js";
import { SingleChildScrollView } from "../../src/lib/single_child_scroll_view.js";
import { Alignment } from "../../src/lib/alignment.js";

export class StreamPage {
    #debug = true;
    #widget;
    #streamDataSource;
    navigateTo;
    constructor({
        onNavigate,
    }={}) {
        this.#streamDataSource = new StreamDataSource({
            ip: '127.0.0.1',
            port: '4545',
            reconnectDelay: 1500,
            reconnectCount: 5,
        });
        const streamFilteredArea1 = this.#streamDataSource.stream.where(event => {
            return event.area == 'area1';
        });
        const streamFilteredArea2 = this.#streamDataSource.stream.where(event => {
            return event.area == 'area2';
        });
        const streamFilteredArea3 = this.#streamDataSource.stream.where(event => {
            return event.area == 'area3';
        });
        const streamFilteredArea4 = this.#streamDataSource.stream.where(event => {
            return event.area == 'area4';
        });
        const streamFilteredConnection = this.#streamDataSource.stream.where(event => {
            return event.type == 'polling';
        });
        this.navigateTo = onNavigate;
        this.#widget = new Scaffold({
            title: 'Stream Page',
            child: new Container({
                alignment: Alignment.topCenter,
                child: new Column({
                    children: [
                        new Container({
                            color: '#5050ff',
                            height: 60,
                            alignment: Alignment.center,
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
                                    new TextWidget('Stream Page', {
                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                    }),
                                    new TextWidget('icon', {
                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                    }),
                                ],
                            }),
                        }),
                        new Container({
                            color: '#aaaaaa',
                            alignment: Alignment.center,
                                alignment: Alignment.center,
                                child: new SingleChildScrollView({
                                    child: new Container({
                                        width: 500,
                                        alignment: Alignment.center,
                                        child: new Column({
                                            mainAxisAlignment: MainAxisAlignment.center,
                                            crossAxisAlignment: CrossAxisAlignment.stretch,
                                            children: [
                                                new TextButton({
                                                    child: new TextWidget('Send test message', {
                                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                    }),
                                                    onPressed: (e) => {
                                                        this.#streamDataSource.send({
                                                            type: 'message', 
                                                            area: 'area1',
                                                            data: 'test message',
                                                        });
                                                    },
                                                }),
                                                new Row({
                                                    crossAxisAlignment: CrossAxisAlignment.Center,
                                                    children: [
                                                        new CustomPaint({
                                                            size: new Size(200, 100),
                                                            stream: streamFilteredArea1,
                                                            // style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                        }),                                                        new SizedBox({width: 10}),
                                                        new StreamBuilder({
                                                            stream: streamFilteredArea1,
                                                            builder: ({snapshot}={}) => {
                                                                const value = `${Number.parseFloat(snapshot.value).toFixed(5)} [${snapshot.area}]`;
                                                                return new TextWidget(value, {
                                                                    style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                                });
                                                            }
                                                        }),

                                                    ],
                                                }),
                                                new SizedBox({height: 20}),
                                                new Row({
                                                    crossAxisAlignment: CrossAxisAlignment.Center,
                                                    children: [
                                                        new CustomPaint({
                                                            size: new Size(200, 100),
                                                            stream: streamFilteredArea2,
                                                            // style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                        }),
                                                        new SizedBox({width: 10}),
                                                        new StreamBuilder({
                                                            stream: streamFilteredArea2,
                                                            builder: ({snapshot}={}) => {
                                                                const value = `${Number.parseFloat(snapshot.value).toFixed(5)} [${snapshot.area}]`;
                                                                return new TextWidget(value, {
                                                                    style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                                });
                                                            }
                                                        }),
                                                    ],
                                                }),
                                                new SizedBox({height: 20}),
                                                new Row({
                                                    crossAxisAlignment: CrossAxisAlignment.Center,
                                                    children: [
                                                        new CustomPaint({
                                                            size: new Size(200, 100),
                                                            stream: streamFilteredArea3,
                                                            // style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                        }),
                                                        new SizedBox({width: 10}),
                                                        new StreamBuilder({
                                                            stream: streamFilteredArea3,
                                                            builder: ({snapshot}={}) => {
                                                                const value = `${Number.parseFloat(snapshot.value).toFixed(5)} [${snapshot.area}]`;
                                                                return new TextWidget(value, {
                                                                    style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                                });
                                                            }
                                                        }),
                                                    ],
                                                }),
                                                new SizedBox({height: 20}),
                                                new Row({
                                                    crossAxisAlignment: CrossAxisAlignment.Center,
                                                    children: [
                                                        new CustomPaint({
                                                            size: new Size(200, 100),
                                                            stream: streamFilteredArea4,
                                                            // style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                        }),
                                                        new SizedBox({width: 10}),
                                                        new StreamBuilder({
                                                            stream: streamFilteredArea4,
                                                            builder: ({snapshot}={}) => {
                                                                const value = `${Number.parseFloat(snapshot.value).toFixed(5)} [${snapshot.area}]`;
                                                                return new TextWidget(value, {
                                                                    style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                                });
                                                            }
                                                        }),
                                                    ],
                                                }),
                                                new SizedBox({height: 20}),
                                                new StreamBuilder({
                                                    stream: streamFilteredConnection,
                                                    builder: ({snapshot}={}) => {
                                                        const value = `${snapshot.type} ${snapshot.value} ${snapshot.timestamp}`;
                                                        return new TextWidget('connected: ' + value, {
                                                            style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                        });
                                                    }
                                                }),
                                                new SizedBox({height: 10}),
                                                new TextButton({
                                                    child: new TextWidget('Second page', {
                                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                    }),
                                                    onPressed: (e) => {
                                                        this.navigateTo(
                                                            new MaterialRoute({
                                                                path: '/secondPage',
                                                                widget: new SecondPage({}),
                                                            }),
                                                        );
                                                    },
                                                }),
                                                new SizedBox({height: 10}),
                                                new TextButton({
                                                    child: new TextWidget('Third Page', {
                                                        style: {...menuHeaderTextStyle, ...{fontSize: 16}},
                                                    }),
                                                    onPressed: (e) => {
                                                        this.navigateTo(
                                                            new MaterialRoute({
                                                                path: '/thirdPage',
                                                                widget: new ThirdPage({}),
                                                            }),
                                                        );
                                                    },
                                                }),
                                                new SizedBox({height: 10,}),
                                                new TextButton({
                                                    child: new TextWidget('Test Input Page', {
                                                        style: {...menuHeaderTextStyle, ...{fontSize: 16,},},
                                                    }),
                                                    onPressed: (e) => {
                                                        this.navigateTo(
                                                            new MaterialRoute({
                                                                path: '/TestInputPage',
                                                                widget: new TestInputPage({}),
                                                            }),
                                                        );
                                                    },
                                                }),
                                                new SizedBox({height: 10,}),
                                                new TextButton({
                                                    child: new TextWidget('Search Field Page', {
                                                        style: {...menuHeaderTextStyle, ...{fontSize: 16,},},
                                                    }),
                                                    onPressed: (e) => {
                                                        this.navigateTo(
                                                            new MaterialRoute({
                                                                path: '/SearchFieldPage',
                                                                widget: new SearcchFieldPage({}),
                                                            }),
                                                        );
                                                    },
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                        }),
                    ],
                }),
            }),
        });
    }
    build() {
        // this.#streamController.listen((event) => {
        //         log(this.#debug, `listen event: `, event);
        // });
        return this.#widget.build();
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}


class StreamDataSourceFiltered {
    #debug = true;
    #stream;
    #suscribed = false;
    #listeners = [];
    constructor({
        stream,
    }={}) {
        this.#stream = stream;
    }
    listen(callback, filter = {key: '', value: ''}) {
        log(this.#debug, '[StreamDataSourceFiltered.listen] callback: ', callback);
        this.#listeners.push({
            callback: callback,
            filter: filter,
        });
        if (!this.#suscribed) {
            this.#stream.listen(this.#onEvent);
        }
    }
    #onEvent(event) {
        this.#listeners.forEach(listener => {
            const key = listener.filter.key
            if (Object.keys(event).includes(key)) {
                if (event[key] == listener.filter.value) {
                    listener.callback(event);
                }
            }
        })
    }
}