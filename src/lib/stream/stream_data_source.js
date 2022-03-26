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

import { StreamController } from "./stream_controller.js";

/**
 * Класс реализует потоковый обмен данными с WebSoccket
 * можно подписаться на данные методом listen() передав callback.
 * Подписчиков может быть несколько
 * Можно отправить данные в WebSocket методом send()
 */
export class StreamDataSource {
    #debug = true;
    #ip;
    #port;
    #reconnectDelay;
    #reconnectCount;
    #connection;
    #connected = false;
    #connectionPending = false;
    #streamController;
    constructor({
        ip = '127.0.0.1',
        port = '4545',
        reconnectDelay = 500,   //ms
        reconnectCount = 5,
    }={}) {
        this.#ip = ip;
        this.#port = port;
        this.#reconnectDelay = reconnectDelay;
        this.#reconnectCount = reconnectCount;
        this.#streamController = new StreamController();
    }
    send(data) {
        if (this.#connected && data) {
            data.timestamp = messageTimestamp();
            this.#connection.send(
                JSON.stringify(data),
            );
        } else {
            throw Error('[StreamDataSource.send] Невозможно отправить данные, нет подключения');
        }
    }
    listen(callback) {
        log(this.#debug, '[StreamDataSource.listen] callback: ', callback);
        this.#reconnect(this.#ip, this.#port);
        this.#streamController.listen(callback);
    }
    #tryConnect(ip, port) {
        try {
            return new WebSocket(`ws://${ip}:${port}`);
        } catch (error) {
            console.warn('[StreamDataSource.#tryConnect] error: ', error);
            return false;        
        }
    }
    #reconnect(ip, port) {
        if (this.#connected || this.#connectionPending) {
            return 0;
        }
        this.#connectionPending = true;
        log(this.#debug, `[StreamDataSource.reconnect] to: ${ip}:${port}`);
        var tryCount = 0;
        new Promise((resolve, reject) => {
            const tryInterval = setInterval(() => {
                tryCount++
                log(this.#debug, '[StreamDataSource.reconnect] try: ', tryCount);
                const connection = this.#tryConnect(ip, port);
                if (connection) {
                    log(this.#debug, '[StreamDataSource.reconnect] connected: ', connection);
                    clearInterval(tryInterval);
                    resolve(connection);
                }
                if (tryCount >= this.#reconnectCount) {
                    clearInterval(tryInterval);
                    reject('Превышен лимит попыток подключения');
                }
            }, this.#reconnectDelay);
        }).then(connection => {
            this.#connection = connection;
            this.handleConnection(this.#connection);
            this.#connected = true;
            this.#connectionPending = false;
        }).catch(error => {
            this.#connected = false;
            this.#connectionPending = false;
            console.error('StreamDataSource connection error: ', error);
        })
    }
    handleConnection(connection) {
        log(this.#debug, '[StreamDataSource.handleConnection]');
        connection.onopen = (event) => {
            log(this.#debug, '[StreamDataSource.handleConnection] onopen: ', event);
            connection.send(
                JSON.stringify({
                    type: 'start', 
                    timestamp: messageTimestamp(),
                    value: ''
                })
            );
        };
        connection.onmessage = (event) => {
            const message = JSON.parse(event.data);
            // log(this.#debug, 'webSocket.onmessage: ', message);
            this.#streamController.add(message);
        };
        connection.onclose = async (event) => {
            log(this.#debug, '[StreamDataSource.handleConnection] onclose: ', event);
            this.#connected = false;
            this.#reconnect(this.#ip, this.#port);
        }
        connection.onerror = async (event) => {
            log(this.#debug, '[StreamDataSource.handleConnection] onerror: ', event);
            this.#connected = false;
            this.#reconnect(this.#ip, this.#port);
        }        
    }
}

function messageTimestamp() {
    return new Date(Date.now()).toISOString();
}
