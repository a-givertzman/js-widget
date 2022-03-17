# js-widget
### JavaScript framework to build object-oriented fast and lightweight web application, easy to understand, test and maintain

- This is imperative code style
- Js code looks nice
- Easy to implement code
- Easy to maintenance code

#### You can try it <a href="https://a-givertzman.github.io/js-widget/" target="_blank">here</a> or using example below

#### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try js-widget</title>
    <link rel="icon" href="">
    <link rel="stylesheet" href="./src/js-widgets/css/widget.css" media="none" onload="if(media!='all')media='all'">
    <script src="./main.js" type="module"></script>
</head>
    <body>
    </body>
</html>
```

#### main.js
```
"use strict";
import { MaterialApp } from "../../src/js-widgets/material_app.js";
import { Scaffold } from "../../src/js-widgets/scaffold.js";
import { Center } from "../../src/js-widgets/center.js";
import { Container } from "../../src/js-widgets/container.js";
import { Row } from "../../src/js-widgets/row.js";
import { Column } from "../../src/js-widgets/column.js";
import { TextOverflow, TextWidget } from "../../src/js-widgets/text.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../../src/js-widgets/alignment.js";
import { Expanded } from "../../src/js-widgets/expanded.js";

const app = new MaterialApp({
    title: 'Try js-widget',
    home: new Scaffold({
        title: 'Try js-widget',
        child: new Row({
            children: [
                new Column({
                    children: [
                        new Expanded({
                            child: new Container({
                                color: '#aa5050',
                                child: new Center({
                                    child: new Container({
                                        color: '#f2f2f2',
                                        width: 200,
                                        height: 200,
                                        child: new TextWidget(
                                            'Квадрат 1', {
                                            overflow: TextOverflow.clip,
                                        }),
                                    }),
                                }),
                            }),
                        }),
                        new Expanded({
                            child: new Container({
                                color: '#50aa50',
                                child: new Column({
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    crossAxisAlignment: CrossAxisAlignment.center,
                                    children: [
                                        new TextWidget('Квадрат 2.1'),
                                        new TextWidget('Квадрат 2.2'),
                                        new TextWidget('Квадрат 2.3'),
                                    ],
                                }),
                            }),
                        }),
                    ]
                }),
                new Column({
                    children: [
                        new Expanded({
                            child: new Container({
                                color: '#5050aa',
                                child: new Column({
                                    children: [
                                        new Container({
                                            color: '#7070aa',
                                            height: 150,
                                            width: 300,
                                            child: new TextWidget('Квадрат 3.1'),
                                        }),
                                        new Container({
                                            color: '#2020aa',
                                            child: new TextWidget(
                                                'Квадрат 3.2', {
                                                overflow: TextOverflow.fade,
                                            }),
                                        }),                                    
                                    ],
                                }),
                            }),
                        }),
                        new Expanded({
                            child: new Container({
                                color: '#aa50aa',
                                child: new Center({
                                    child: new TextWidget('Квадрат 4'),
                                }),
                            }),
                        }),
                    ],
                })
            ],
        }),
    }),
});

app.run();

```

This is my attempt to implement object-oriented js code. And i used some principles to make it in right way. I was inspired by the book Elegant Objects by Egor Bugaenko.
- No static methods
- No mutable objects
- No inheritance 
- No monster or good classes 
- No null, use objects instead… Employer.NOT FOUND or EMPTY, which is not null, it is normal object, but it behaves differently 
- Don’t use singletons 
- Use fail fast approach, do not protect them from crashing, it should be crashed as fast as possible
- Give right names to the objects
- Build everything using decorator pattern
