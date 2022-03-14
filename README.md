# js-widget
### JavaScript framework to build object oriented web application

- This is imperative code style
- Js code looks nice
- Easy to implement code
- Easy to maintenance code

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
import { MaterialApp } from "../../src/js-widgets/material_app.js";
import { Scaffold } from "../../src/js-widgets/scaffold.js";
import { Center } from "../../src/js-widgets/center.js";
import { Container } from "../../src/js-widgets/container.js";
import { Row } from "../../src/js-widgets/row.js";
import { Column } from "../../src/js-widgets/column.js";
import { TextOverflow, TextWidget } from "../../src/js-widgets/text.js";
import { CrossAxisAlignment, MainAxisAlignment } from "../../src/js-widgets/alignment.js";
import { Expanded } from "../../src/js-widgets/expanded.js";

const app1 = new MaterialApp({
    title: 'Тест',
    home: new Scaffold({
        title: 'Test',
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

app1.run();

```
