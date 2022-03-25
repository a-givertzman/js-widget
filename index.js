function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "MainAxisAlignment", () => $2ea2a83cd48033cc$export$6595504a60e1f77c);
$parcel$export(module.exports, "CrossAxisAlignment", () => $2ea2a83cd48033cc$export$66a3248d846611ce);
$parcel$export(module.exports, "TextAlign", () => $2ea2a83cd48033cc$export$3720eb13f948f394);
$parcel$export(module.exports, "TextAlignVertical", () => $2ea2a83cd48033cc$export$65883ddf2cf274bc);
$parcel$export(module.exports, "Border", () => $b6e0420749737f97$export$d8e9c9d63e86d41e);
$parcel$export(module.exports, "ButtonStyle", () => $5e75d0f90c45177b$export$bdc3c19374266b98);
$parcel$export(module.exports, "Center", () => $dd044168d818d120$export$1f54913ccc4368b1);
$parcel$export(module.exports, "Column", () => $8c3216930ce7adb9$export$816b5d811295e6bc);
$parcel$export(module.exports, "Container", () => $aa541ca3caea750f$export$42a852a2b6b56249);
$parcel$export(module.exports, "EdgeInsets", () => $7de8adbb396efb8c$export$45cce0bd6c1f342a);
$parcel$export(module.exports, "ElevatedButtonStyle", () => $5e2a4f07c3fb36e0$export$8cb5d935be5f40c0);
$parcel$export(module.exports, "ElevatedButton", () => $fa2aeb152cbb2444$export$e47c8ffac61d2711);
$parcel$export(module.exports, "Expanded", () => $39c14cd61a8c3eca$export$aec14294028030b8);
$parcel$export(module.exports, "FontWeight", () => $e3abc45c9e62ea36$export$1c11f686df781f87);
$parcel$export(module.exports, "InputDecoration", () => $b588aceb60e0ef61$export$ff189cb92f0c2ebe);
$parcel$export(module.exports, "ListView", () => $a9dc397e9d4383c0$export$84d0dd190d551cd1);
$parcel$export(module.exports, "MaterialApp", () => $8eb8a4f3b361972d$export$bfe8bad8982e481f);
$parcel$export(module.exports, "MaterialRoute", () => $43c4c069f909a3ef$export$dade541be005708b);
$parcel$export(module.exports, "MultiWidget", () => $380e3c9068e1be55$export$9181b6cdcb259d4e);
$parcel$export(module.exports, "Navigator", () => $9799d5cd3a3a5cfb$export$c894e24133a9bea);
$parcel$export(module.exports, "Axis", () => $94710b7380f829cf$export$d06866a9fb0606da);
$parcel$export(module.exports, "Padding", () => $25e996bd15eb9c4f$export$8ee6ea94b5aedb49);
$parcel$export(module.exports, "Row", () => $3b0732c65269b6d2$export$b59bdbef9ce70de2);
$parcel$export(module.exports, "Scaffold", () => $2593223abfc8bd51$export$e460bf4b68e36254);
$parcel$export(module.exports, "SearchField", () => $58367fe882c0aa05$export$b94867ecbd698f21);
$parcel$export(module.exports, "SingleChildScrollView", () => $ca2128afcbe8a8b0$export$143d07cf9d67646c);
$parcel$export(module.exports, "SizedBox", () => $1fbcbe3544f61ea1$export$3d2af79b839f3351);
$parcel$export(module.exports, "TextButton", () => $019283899ad19df8$export$652b5b0d951b8801);
$parcel$export(module.exports, "TextFormField", () => $b68d41202eb40c22$export$c5d7264e75cc7d00);
$parcel$export(module.exports, "TextStyle", () => $fdf534fc9f25593f$export$1df879243bf2e42d);
$parcel$export(module.exports, "TextWidget", () => $3053c8f56190ee50$export$e95904fb377b5ee2);
$parcel$export(module.exports, "ThemeData", () => $de541b8674ea0385$export$d7322a7deb61ece1);
$parcel$export(module.exports, "Widget", () => $135290c108efc430$export$a829527ff4e4114a);
"use strict";
const $2ea2a83cd48033cc$export$6595504a60e1f77c = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
    spaceAround: 'space-around',
    spaceEvenly: 'space-evenly'
};
const $2ea2a83cd48033cc$export$66a3248d846611ce = {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch'
};
const $2ea2a83cd48033cc$export$3720eb13f948f394 = {
    start: 'start',
    end: 'end',
    left: 'left',
    right: 'right',
    center: 'center',
    justify: 'justify',
    justifyAll: 'justify-all',
    matchParent: 'match-parent'
};
const $2ea2a83cd48033cc$export$65883ddf2cf274bc = {
    top: 'start',
    center: 'center',
    bottom: 'end'
};


"use strict";
class $b6e0420749737f97$export$d8e9c9d63e86d41e {
    #color;
    #width;
    #radius;
    constructor({ color: color , width: width , radius: radius  } = {}){
        this.#color = color;
        this.#width = width;
        this.#radius = radius;
    }
    static all({ color: color = 'transparent' , width: width = 0  } = {}) {
        return new $b6e0420749737f97$export$d8e9c9d63e86d41e({
            color: color,
            width: width,
            radius: 0
        });
    }
    build() {
        return {
            top: `${this.#width}px solid ${this.#color}`,
            right: `${this.#width}px solid ${this.#color}`,
            bottom: `${this.#width}px solid ${this.#color}`,
            left: `${this.#width}px solid ${this.#color}`,
            radius: `${this.#radius}px`
        };
    }
}


"use strict";
class $5e75d0f90c45177b$export$bdc3c19374266b98 {
    constructor({ backgroundColor: backgroundColor , foregroundColor: foregroundColor , overlayColor: overlayColor , shadowColor: shadowColor , elevation: elevation , padding: padding , minimumSize: minimumSize , maximumSize: maximumSize , fixedSize: fixedSize , side: side , shape: shape , mouseCursor: mouseCursor , visualDensity: visualDensity , animationDuration: animationDuration , alignment: alignment , fontFamily: fontFamily , fontWeight: fontWeight , fontSize: fontSize ,  } = {}){
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.overlayColor = overlayColor;
        this.shadowColor = shadowColor;
        this.elevation = elevation;
        this.padding = padding;
        this.minimumSize = minimumSize; //Size
        this.maximumSize = maximumSize; //Size
        this.fixedSize = fixedSize; //Size
        this.side = side; //BorderSide
        this.shape = shape; //OutlinedBorder
        this.mouseCursor = mouseCursor; //MouseCursor
        this.visualDensity = visualDensity; //VisualDensity
        this.animationDuration = animationDuration; //Duration
        this.alignment = alignment; //AlignmentGeometry
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
    }
}


"use strict";
class $135290c108efc430$export$a829527ff4e4114a {
    #debug = false;
    #child;
    #tagName;
    #cssClass;
    #htmlElement;
    constructor({ child: child = null , tagName: tagName = 'div' , cssClass: cssClass = [] ,  } = {}){
        this.#child = child;
        this.#tagName = tagName;
        this.#cssClass = cssClass;
    }
    build() {
        this.#htmlElement = document.createElement(this.#tagName);
        if (!this.#htmlElement) throw new Error(`[Widget.build] error creating document element "${this.#tagName}"`);
        // TODO remove margin to the Margin class
        // this.#htmlElement.style.margin = this.margin ? `${this.margin}px` : '';
        // TODO remove border to the Border class
        // this.#htmlElement.style.border = this.border ? this.border.build() : '';
        if (this.#cssClass.length > 0) this.#htmlElement.classList.add(...this.#cssClass);
        // log(this.#debug, '[Widget.build] child', this.#child);
        if (this.#child) {
            // throw new Error(`[Widget.build] error accessing child widget "${this.constructor.name}"`);
            const childWidget = this.#child.build();
            this.#htmlElement.appendChild(childWidget.htmlElement);
        }
        // log(this.#debug, '[Widget.build] this: ', this);
        // log(this.#debug, '[Widget.build] child: ', this.#child);
        log(this.#debug, '[Widget.build] child: ', this.htmlElement);
        return this;
    // try {
    // } catch (error) {
    //     log(this.#debug, '[Widget.build] error: ', error);
    //     throw new Error(`[Widget.build] error call method child.build()"; `, error);
    // }
    }
    get htmlElement() {
        if (!this.#htmlElement) throw new Error(`[Widget] error access htmlElement befor it was created`);
        return this.#htmlElement;
    }
}


"use strict";
class $dd044168d818d120$export$1f54913ccc4368b1 {
    #child;
    #widget;
    constructor({ child: child ,  } = {}){
        this.#child = child;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'center-widget'
            ]
        });
    }
    build() {
        this.#widget.build();
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
const $94710b7380f829cf$export$d06866a9fb0606da = {
    horizontal: 'row',
    horizontalReverse: 'row-reverse',
    vertical: 'column',
    verticalReverse: 'column-reverse'
};


"use strict";
class $380e3c9068e1be55$export$9181b6cdcb259d4e {
    #debug = false;
    #itemCount;
    #itemBuilder;
    #tagName;
    #cssClass;
    #htmlElement;
    #mainAxisAlignment;
    #crossAxisAlignment;
    #direction;
    constructor({ itemCount: itemCount , itemBuilder: itemBuilder , tagName: tagName = 'div' , cssClass: cssClass = [] , mainAxisAlignment: mainAxisAlignment = $2ea2a83cd48033cc$export$6595504a60e1f77c.start , crossAxisAlignment: crossAxisAlignment = $2ea2a83cd48033cc$export$66a3248d846611ce.center , direction: direction = $94710b7380f829cf$export$d06866a9fb0606da.vertical ,  } = {}){
        this.#itemCount = itemCount;
        this.#itemBuilder = itemBuilder;
        this.#tagName = tagName;
        this.#cssClass = cssClass;
        this.#mainAxisAlignment = mainAxisAlignment;
        this.#crossAxisAlignment = crossAxisAlignment;
        this.#direction = direction;
    }
    build() {
        this.#htmlElement = document.createElement(this.#tagName);
        if (!this.#htmlElement) throw new Error(`[Widget] error creating document element "${this.#tagName}"`);
        this.#htmlElement.style.flexDirection = this.#direction;
        this.#htmlElement.style.justifyContent = this.#mainAxisAlignment;
        this.#htmlElement.style.alignItems = this.#crossAxisAlignment;
        // TODO remove margin to the Margin class
        // this.#htmlElement.style.margin = this.margin ? `${this.margin}px` : '';
        // TODO remove border to the Border class
        // this.#htmlElement.style.border = this.border ? this.border.build() : '';
        if (this.#cssClass.length > 0) this.#htmlElement.classList.add([
            ...this.#cssClass
        ]);
        if (this.#itemBuilder) for(var index = 0; index < this.#itemCount; index++){
            const item = this.#itemBuilder(index);
            log(this.#debug, '[MultyWidget] index: ', index, ' item: ', item);
            const childWidget = item.build();
            childWidget.htmlElement.flex = '0 1 auto';
            this.#htmlElement.appendChild(childWidget.htmlElement);
        }
        return this;
    }
    get htmlElement() {
        if (!this.#htmlElement) throw new Error(`[MultyWidget] error access htmlElement befor it was created`);
        return this.#htmlElement;
    }
}




"use strict";
class $8c3216930ce7adb9$export$816b5d811295e6bc {
    #debug = false;
    #children;
    #mainAxisAlignment;
    #crossAxisAlignment;
    #widget;
    constructor({ children: children = [] , mainAxisAlignment: mainAxisAlignment = $2ea2a83cd48033cc$export$6595504a60e1f77c.start , crossAxisAlignment: crossAxisAlignment = $2ea2a83cd48033cc$export$66a3248d846611ce.center ,  } = {}){
        this.#children = children;
        this.#mainAxisAlignment = mainAxisAlignment;
        this.#crossAxisAlignment = crossAxisAlignment;
        this.#widget = new $380e3c9068e1be55$export$9181b6cdcb259d4e({
            itemCount: this.#children.length,
            itemBuilder: (index)=>{
                return this.#children[index];
            },
            cssClass: [
                'column-widget', 
            ],
            mainAxisAlignment: this.#mainAxisAlignment,
            crossAxisAlignment: this.#crossAxisAlignment,
            direction: $94710b7380f829cf$export$d06866a9fb0606da.vertical
        });
    }
    build() {
        log(this.#debug, '[Column.build] children: ', this.#children);
        this.#widget.build();
        // for (var index = 0; index < this.#children.length; index++) {
        //     let childElement = this.#children[index].element;
        //     this.#children[index].build();
        //     this.#widget.htmlElement.appendChild(childElement);
        // }
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}




"use strict";
class $7de8adbb396efb8c$export$45cce0bd6c1f342a {
    #top;
    #right;
    #bottom;
    #left;
    /**
     * Создает отступ со всех сторон 
     * @param {Number} value
     */ constructor({ top: top = 0 , right: right = 0 , bottom: bottom = 0 , left: left = 0  } = {}){
        this.#top = top;
        this.#right = right;
        this.#bottom = bottom;
        this.#left = left;
    }
    /**
     * Создает отступ одинаковый со всех сторон 
     * @param {Number} value
     * @returns {Number} EdgeInsets
     */ static all(value) {
        return new $7de8adbb396efb8c$export$45cce0bd6c1f342a({
            top: value,
            right: value,
            bottom: value,
            left: value
        });
    }
    // get top() {return this.#top;} 
    // get right() {return this.#right;} 
    // get bottom() {return this.#bottom;} 
    // get left() {return this.#left;} 
    build() {
        return {
            top: `${this.#top}px`,
            right: `${this.#right}px`,
            bottom: `${this.#bottom}px`,
            left: `${this.#left}px`
        };
    }
}


"use strict";
class $aa541ca3caea750f$export$42a852a2b6b56249 {
    #debug = true;
    #child;
    #widget;
    #width;
    #height;
    #color;
    #padding;
    #border;
    constructor({ child: child , width: width , height: height , color: color , padding: // margin, 
    padding = $7de8adbb396efb8c$export$45cce0bd6c1f342a.all(0) , border: border = new $b6e0420749737f97$export$d8e9c9d63e86d41e({
        width: 0,
        color: 'transparent',
        radius: 0
    }) ,  } = {}){
        this.#child = child;
        this.#width = width;
        this.#height = height;
        this.#color = color;
        this.#padding = padding;
        // this.margin = margin;
        this.#border = border;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'container-widget', 
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        if (!element) throw new Error(`[Container] error building child "${this.#widget.constructor.name}"`);
        element.style.width = this.#width ? `${this.#width}px` : '';
        element.style.height = this.#height ? `${this.#height}px` : '';
        element.style.maxWidth = this.#width ? `${this.#width}px` : '';
        element.style.maxHeight = this.#height ? `${this.#height}px` : '';
        element.style.backgroundColor = this.#color ? this.#color : 'transparent';
        const insets = this.#padding.build();
        element.style.padding = insets ? `${insets.top} ${insets.right} ${insets.bottom} ${insets.left}` : '';
        const border = this.#border.build();
        element.style.borderTop = border ? `${border.top}` : '';
        element.style.borderRight = border ? `${border.right}` : '';
        element.style.borderBottom = border ? `${border.bottom}` : '';
        element.style.borderLeft = border ? `${border.left}` : '';
        // log(this.#debug, '[Container.build] this: ', this);
        // log(this.#debug, '[Container.build] child: ', this.#child);
        log(this.#debug, '[Container.build] child: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $5e2a4f07c3fb36e0$export$8cb5d935be5f40c0 {
    constructor({ backgroundColor: backgroundColor , foregroundColor: foregroundColor , overlayColor: overlayColor , shadowColor: shadowColor , elevation: elevation , padding: padding , minimumSize: minimumSize , maximumSize: maximumSize , fixedSize: fixedSize , side: side , shape: shape , mouseCursor: mouseCursor , visualDensity: visualDensity , animationDuration: animationDuration , alignment: alignment , fontFamily: fontFamily , fontWeight: fontWeight , fontSize: fontSize ,  } = {}){
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;
        this.overlayColor = overlayColor;
        this.shadowColor = shadowColor;
        this.elevation = elevation;
        this.padding = padding;
        this.minimumSize = minimumSize; //Size
        this.maximumSize = maximumSize; //Size
        this.fixedSize = fixedSize; //Size
        this.side = side; //BorderSide
        this.shape = shape; //OutlinedBorder
        this.mouseCursor = mouseCursor; //MouseCursor
        this.visualDensity = visualDensity; //VisualDensity
        this.animationDuration = animationDuration; //Duration
        this.alignment = alignment; //AlignmentGeometry
        this.fontFamily = fontFamily;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
    }
}



"use strict";
class $fa2aeb152cbb2444$export$e47c8ffac61d2711 {
    #child;
    #onPressed;
    #onLongPress;
    #onHover;
    #onFocusChange;
    #style;
    #focusNode;
    #autofocus;
    constructor({ child: child , onPressed: onPressed , onLongPress: onLongPress , onHover: onHover , onFocusChange: onFocusChange , style: style , focusNode: focusNode , autofocus: autofocus = false ,  } = {}){
        this.#child = child;
        this.#onPressed = onPressed;
        this.#onLongPress = onLongPress;
        this.#onHover = onHover;
        this.#onFocusChange = onFocusChange;
        this.#focusNode = focusNode;
        this.#autofocus = autofocus;
        this.#style = style;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'text-button-widget', 
            ]
        });
    }
    build() {
        // this.child.build();
        // this.widget.htmlElement.appendChild(this.child.element);
        const element = this.#widget.build().htmlElement;
        element.addEventListener('click', this.#onPressed);
        element.addEventListener('mouseover', this.#onHover);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}


"use strict";
class $39c14cd61a8c3eca$export$aec14294028030b8 {
    #child;
    flex;
    constructor({ child: child , flex: flex = 1 ,  } = {}){
        if (!child) throw SyntaxError('[Expanded] parameter "child" is required');
        // if (!(child instanceof DataSet)) throw new TypeError(`[Expanded] parameter "child" is required, type of "Widget", but recived ${child.constructor.name}`);
        this.#child = child;
        this.flex = flex;
    }
    build() {
        const element = this.#child.build().htmlElement;
        if (!element) throw new Error(`[Expanded] error building child "${this.#child.constructor.name}"`);
        element.style.flexGrow = this.flex;
        element.style.width = '100%';
        element.style.height = '100%';
        return this;
    }
    get htmlElement() {
        if (!this.#child) throw new Error(`[Expanded] error access child`);
        return this.#child.htmlElement;
    }
}


"use strict";
const $e3abc45c9e62ea36$export$1c11f686df781f87 = {
    normal: 'normal',
    lighter: 'lighter',
    bold: 'bold',
    bolder: 'bolder',
    w100: '100',
    w200: '200',
    w300: '300',
    w400: '400',
    w500: '500',
    w600: '600',
    w700: '700',
    w800: '800',
    w900: '900'
};



"use strict";
class $b588aceb60e0ef61$export$ff189cb92f0c2ebe {
    #errorBorder;
    #focusedBorder;
    #focusedErrorBorder;
    #disabledBorder;
    #enabledBorder;
    #border;
    #enabled;
    #hintText;
    constructor({ errorBorder: errorBorder = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({}) , focusedBorder: focusedBorder = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({}) , focusedErrorBorder: focusedErrorBorder = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({}) , disabledBorder: disabledBorder = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({}) , enabledBorder: enabledBorder = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({}) , border: border = $b6e0420749737f97$export$d8e9c9d63e86d41e.all({
        color: '#333333'
    }) , enabled: enabled = true , hintText: hintText = '' ,  } = {}){
        this.#errorBorder = errorBorder;
        this.#focusedBorder = focusedBorder;
        this.#focusedErrorBorder = focusedErrorBorder;
        this.#disabledBorder = disabledBorder;
        this.#enabledBorder = enabledBorder;
        this.#border = border;
        this.#enabled = enabled;
        this.#hintText = hintText;
    }
    get border() {
        return this.#border;
    }
    get hintText() {
        return this.#hintText;
    }
}





"use strict";
class $a9dc397e9d4383c0$export$84d0dd190d551cd1 {
    #debug = false;
    #children;
    #itemCount;
    #itemBuilder;
    #mainAxisAlignment;
    #crossAxisAlignment;
    #direction;
    #widget;
    constructor({ children: children , itemCount: itemCount , itemBuilder: itemBuilder = ()=>{} , mainAxisAlignment: mainAxisAlignment = $2ea2a83cd48033cc$export$6595504a60e1f77c.start , crossAxisAlignment: crossAxisAlignment = $2ea2a83cd48033cc$export$66a3248d846611ce.center , direction: direction = $94710b7380f829cf$export$d06866a9fb0606da.vertical ,  } = {}){
        this.#children = children;
        this.#itemCount = this.#children ? this.#children.length : itemCount;
        this.#itemBuilder = itemBuilder;
        this.#mainAxisAlignment = mainAxisAlignment;
        this.#crossAxisAlignment = crossAxisAlignment;
        this.#direction = direction;
        this.#widget = new $380e3c9068e1be55$export$9181b6cdcb259d4e({
            tagName: 'ul',
            itemCount: this.#itemCount,
            itemBuilder: (index)=>{
                return this.#itemBuilder(index);
            // return this.#children[index];
            },
            cssClass: [
                'list-view-widget', 
            ],
            mainAxisAlignment: this.#mainAxisAlignment,
            crossAxisAlignment: this.#crossAxisAlignment,
            direction: this.#direction
        });
    }
    build() {
        log(this.#debug, '[ListView.build] children: ', this.#children);
        this.#widget.build();
        // this.widget.htmlElement.style.justifyContent = this.mainAxisAlignment;
        // this.widget.htmlElement.style.alignItems = this.crossAxisAlignment;
        // for (var index = 0; index < this.children.length; index++) {
        //     let childElement = document.createElement('li');
        //     let childItem = this.itemBuilder(index);
        //     childItem.build();
        //     childElement.appendChild(childItem.element);
        //     this.widget.htmlElement.appendChild(childElement);
        // }
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $8eb8a4f3b361972d$export$bfe8bad8982e481f {
    #debug = true;
    #title;
    #home;
    #routes;
    #initialRoute;
    #theme;
    #darkTheme;
    #builder;
    #widget;
    constructor({ title: title , home: home , routes: routes , initialRoute: initialRoute , theme: theme , darkTheme: darkTheme , builder: builder ,  } = {}){
        this.#title = title;
        this.#home = home;
        this.#routes = routes;
        this.#initialRoute = initialRoute;
        this.#theme = theme;
        this.#darkTheme = darkTheme;
        this.#builder = builder;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#home,
            tagName: 'div',
            cssClass: [
                'material-app-widget'
            ]
        });
        document.title = this.#title;
    }
    run() {
        window.addEventListener('load', (event)=>{
            this.build();
        });
    }
    build() {
        log(this.#debug, '[MaterialApp.build] home: ', this.#home);
        this.#home.build();
        // this.#widget.build();
        // if (!(this.#home instanceof Navigator)) {
        //     this.#widget.build();
        //     log(this.#debug, '[MaterialApp.build] App with Navigator: ', this);
        // } else {
        //     document.body.appendChild(this.#widget.build().htmlElement);
        //     log(this.#debug, '[MaterialApp.build] App without Navigator: ', this);
        // }
        log(this.#debug, '[MaterialApp.build] this: ', this);
        log(this.#debug, '[MaterialApp.build] this.widget: ', this.#widget);
        // log(this.#debug, '[MaterialApp.build] this.element: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $43c4c069f909a3ef$export$dade541be005708b {
    #debug = true;
    #path;
    #widget;
    #htmlElement;
    #prevTitle;
    constructor({ path: path , widget: widget  } = {}){
        if (!path) throw SyntaxError('[MaterialRoute] parameter "path" is required');
        // if (!(child instanceof Widget)) throw new TypeError(`[MaterialRoute] parameter "path" is required, type of "string", but recived ${path.constructor.name}`);
        this.#path = path;
        if (!widget) throw SyntaxError('[MaterialRoute] parameter "widget" is required');
        // if (!(child instanceof Widget)) throw new TypeError(`[MaterialRoute] parameter "widget" is required, type of "Widget", but recived ${path.constructor.name}`);
        this.#widget = widget;
    }
    get path() {
        return this.#path;
    }
    // hide() {
    //     this.#widget.htmlElement.hidden = false;
    // }
    // show() {
    //     this.#widget.htmlElement.hidden = true;
    // }
    build() {
        this.#prevTitle = document.title;
        const widget = this.#widget.build();
        this.#htmlElement = widget.htmlElement;
        return new Promise((resolve, reject)=>{
            widget.onComplete((result)=>{
                log(this.#debug, '[MaterialRoute.build] child result: ', result);
                document.title = this.#prevTitle;
                widget.htmlElement.previousSibling.style.display = 'flex';
                widget.htmlElement.classList.remove('scaffold-widget-slide-in');
                widget.htmlElement.classList.add('scaffold-widget-slide-out');
                setTimeout(()=>{
                    widget.htmlElement.remove();
                }, 200);
                resolve(result);
            });
        });
    }
    get htmlElement() {
        return this.#htmlElement;
    }
}




"use strict";
class $9799d5cd3a3a5cfb$export$c894e24133a9bea {
    #debug = true;
    #routes = [];
    #initialRoute;
    constructor({ initialRoute: initialRoute , routes: routes ,  } = {}){
        if (!routes) throw SyntaxError('[Navigator] parameter "routes" is required');
        if (!(routes instanceof Array)) throw new TypeError(`[Navigator] parameter "routes" is required, type of "Array<MaterialRoute>", but recived ${child.constructor.name}`);
        this.#routes = routes;
        this.#initialRoute = initialRoute;
    }
    pop() {
        if (this.#routes.length > 0) {
            this.#lastRoute().remove();
            this.#routes.pop();
        }
    }
    push(route) {
        if (this.#routes.length > 0) this.#lastRoute().hide();
        this.#routes.push(route);
        document.body.appendChild(route.build().htmlElement);
        route.show();
    }
     #lastRoute() {
        return this.#routes[this.#routes.length - 1];
    }
    build() {
        // const lastRoute = this.#lastRoute().build();
        const lastRoute = this.#routes[0].build();
        const lastRouteElement = lastRoute.htmlElement;
        console.log('[Navigator.build] lastRoute: ', lastRoute);
        // log(this.#debug, '[Navigator.build] lastRoute: ', lastRoute);
        log(this.#debug, '[Navigator.build] lastRouteElement: ', lastRouteElement);
        document.body.appendChild(lastRouteElement);
        return this;
    }
    get htmlElement() {
        return this.#lastRoute().htmlElement;
    }
}




"use strict";
class $25e996bd15eb9c4f$export$8ee6ea94b5aedb49 {
    #child;
    #padding;
    constructor({ child: child , padding: padding = $7de8adbb396efb8c$export$45cce0bd6c1f342a.all(0) ,  } = {}){
        if (!child) throw SyntaxError('[Padding] parameter "child" is required');
        // if (!(child instanceof DataSet)) throw new TypeError(`[Padding] parameter "child" is required, type of "Widget", but recived ${child.constructor.name}`);
        this.#child = child;
        this.#padding = padding;
    }
    build() {
        const element = this.#child.build().htmlElement;
        if (!element) throw new Error(`[Padding] error building child "${this.#child.constructor.name}"`);
        const insets = this.#padding.build();
        element.style.padding = insets ? `${insets.top} ${insets.right} ${insets.bottom} ${insets.left}` : '';
        return this;
    }
    get htmlElement() {
        if (!this.#child) throw new Error(`[Padding] error access child`);
        return this.#child.htmlElement;
    }
}






"use strict";
class $3b0732c65269b6d2$export$b59bdbef9ce70de2 {
    #debug = false;
    #widget;
    #children;
    #mainAxisAlignment;
    #crossAxisAlignment;
    constructor({ children: children = [] , mainAxisAlignment: mainAxisAlignment = $2ea2a83cd48033cc$export$6595504a60e1f77c.start , crossAxisAlignment: crossAxisAlignment = $2ea2a83cd48033cc$export$66a3248d846611ce.center ,  } = {}){
        this.#children = children;
        this.#mainAxisAlignment = mainAxisAlignment;
        this.#crossAxisAlignment = crossAxisAlignment;
        this.#widget = new $380e3c9068e1be55$export$9181b6cdcb259d4e({
            itemCount: this.#children.length,
            itemBuilder: (index)=>{
                return this.#children[index];
            },
            cssClass: [
                'row-widget', 
            ],
            mainAxisAlignment: this.#mainAxisAlignment,
            crossAxisAlignment: this.#crossAxisAlignment,
            direction: $94710b7380f829cf$export$d06866a9fb0606da.horizontal
        });
    }
    build() {
        log(this.#debug, '[Row.build] children: ', this.#children);
        this.#widget.build();
        // this.widget.htmlElement.style.justifyContent = this.mainAxisAlignment;
        // this.widget.htmlElement.style.alignItems = this.crossAxisAlignment;
        // for (var index = 0; index < this.#children.length; index++) {
        //     let childElement = this.#children[index].element;
        //     this.#children[index].build();
        //     this.widget.htmlElement.appendChild(childElement);
        // }
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $2593223abfc8bd51$export$e460bf4b68e36254 {
    #debug = true;
    #title;
    #child;
    #widget;
    #onCompleteCallback;
    onComplete(callback) {
        this.#onCompleteCallback = callback;
    }
    /**
     * Закрывает текущий виджет
     * Передает  
     */ close(result) {
        log(this.#debug, '[Scaffold.close] result: ', result);
        this.#onCompleteCallback(result);
    }
    constructor({ title: title , child: child ,  } = {}){
        if (!child) throw SyntaxError('[Scaffold] parameter "child" is required');
        // if (!(child instanceof Widget)) throw new TypeError(`[Scaffold] parameter "child" is required, type of "Widget", but recived ${child.constructor.name}`);
        this.#child = child;
        this.#title = title;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'scaffold-widget',
                'scaffold-widget-slide-in', 
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        if (!element) throw new Error(`[Scaffold] error building child "${this.#widget.constructor.name}"`);
        document.title = this.#title;
        const lastChild = document.body.lastChild;
        setTimeout(()=>{
            if (lastChild?.style) lastChild.style.display = 'none';
        }, 200);
        document.body.appendChild(element);
        log(this.#debug, '[Scaffold.build] this: ', this);
        log(this.#debug, '[Scaffold.build] element: ', element);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}






"use strict";
class $b68d41202eb40c22$export$c5d7264e75cc7d00 {
    #debug = true;
    #key;
    #initialValue;
    #focusNode;
    #decoration;
    #keyboardType;
    #style;
    #textAlign;
    #textAlignVertical;
    #enabled;
    #readOnly;
    #obscuringCharacter;
    #obscureText;
    #maxLines;
    #expands;
    #maxLength;
    #onChanged;
    #onTap;
    #onComplete;
    #onFocuse;
    #validator;
    #widget;
    constructor({ key: key , initialValue: initialValue , focusNode: focusNode , decoration: decoration = new $b588aceb60e0ef61$export$ff189cb92f0c2ebe() , keyboardType: keyboardType , style: style , textAlign: textAlign , textAlignVertical: textAlignVertical , enabled: enabled , readOnly: readOnly , obscuringCharacter: obscuringCharacter , obscureText: obscureText , maxLines: maxLines , expands: expands , maxLength: maxLength , onChanged: onChanged = ()=>{} , onTap: onTap = ()=>{} , onComplete: onComplete = ()=>{} , onFocuse: onFocuse = ()=>{} , validator: validator ,  } = {}){
        // log(this.#debug, '[TextFormField] onChanged', onChanged);
        this.#key = key;
        this.#initialValue = initialValue;
        this.#focusNode = focusNode;
        this.#decoration = decoration;
        this.#keyboardType = keyboardType;
        this.#style = style;
        this.#textAlign = textAlign ? textAlign : $2ea2a83cd48033cc$export$3720eb13f948f394.center;
        this.#textAlignVertical = textAlignVertical ? textAlignVertical : $2ea2a83cd48033cc$export$65883ddf2cf274bc.center;
        this.#enabled = enabled ? enabled : true;
        this.#readOnly = readOnly ? readOnly : false;
        this.#obscuringCharacter = obscuringCharacter ? obscuringCharacter : '•';
        this.#obscureText = obscureText ? obscureText : false;
        this.#maxLines = maxLines ? maxLines : 1;
        this.#expands = expands ? expands : false;
        this.#maxLength = maxLength ? maxLength : null;
        this.#onChanged = onChanged;
        this.#onTap = onTap;
        this.#onComplete = onComplete;
        this.#onFocuse = onFocuse;
        this.#validator = validator;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            tagName: 'input',
            cssClass: [
                'text-form-field-widget'
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        element.type = this.#obscureText ? 'password' : 'text';
        element.innerHTML = this.#initialValue;
        element.placeholder = this.#decoration.hintText;
        element.style.color = this.#style?.color;
        element.style.backgroundColor = this.#style?.backgroundColor ?? 'transparent';
        element.style.fontSize = this.#style ? `${this.#style.fontSize}px` : '';
        element.style.fontFamily = this.#style?.fontFamily;
        element.style.fontWeight = this.#style?.fontWeight;
        element.style.height = this.#style?.height;
        element.style.width = this.#style?.width;
        element.style.overflow = this.#style?.overflow;
        element.style.textAlign = this.#textAlign;
        const border = this.#decoration.border.build();
        element.style.borderTop = border ? `${border.top}` : '';
        element.style.borderRight = border ? `${border.right}` : '';
        element.style.borderBottom = border ? `${border.bottom}` : '';
        element.style.borderLeft = border ? `${border.left}` : '';
        element.addEventListener('input', (e)=>this.onInputListener(e)
        );
        element.addEventListener('change', (e)=>this.completedListener(e)
        );
        element.addEventListener('focus', (e)=>this.#onFocuse(e)
        );
        element.addEventListener('blur', (e)=>this.#onFocuse(e)
        );
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
    onInputListener(e) {
        if (typeof this.#onChanged == 'function') this.#onChanged(e.target.value);
        if (typeof this.#validator == 'function') this.#validator(e.target.value);
    }
    completedListener(e) {
        if (typeof this.#onComplete == 'function') this.#onComplete(e.target.value);
    }
}









"use strict";
class $ca2128afcbe8a8b0$export$143d07cf9d67646c {
    #debug = true;
    #key;
    #child;
    #direction;
    #reverse;
    #padding;
    #primary;
    #physics;
    #widget;
    constructor({ key: key , child: child , direction: direction = $94710b7380f829cf$export$d06866a9fb0606da.vertical , reverse: reverse = false , padding: padding = $7de8adbb396efb8c$export$45cce0bd6c1f342a.all(0) , primary: primary , physics: physics  } = {}){
        this.#key = key;
        this.#child = child;
        this.#direction = direction;
        this.#reverse = reverse;
        this.#padding = padding;
        this.#primary = primary;
        this.#physics = physics;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                this.#direction == $94710b7380f829cf$export$d06866a9fb0606da.vertical ? 'single-child-scroll-vertial-widget' : 'single-child-scroll-horizontal-widget', 
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        if (!element) throw new Error(`[Container] error building child "${this.#widget.constructor.name}"`);
        //  element.style.backgroundColor = this.#color ? this.#color : 'transparent';
        const insets = this.#padding.build();
        element.style.padding = insets ? `${insets.top} ${insets.right} ${insets.bottom} ${insets.left}` : '';
        log(this.#debug, '[Container.build] child: ', this.htmlElement);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $58367fe882c0aa05$export$b94867ecbd698f21 {
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
    constructor({ itemCount: // children = [], 
    itemCount , itemBuilder: itemBuilder = ()=>{} , placeholder: placeholder = '' , valueField: valueField = 'id' , labelField: labelField = 'title' , searchField: searchField = [
        'id',
        'title'
    ] , cssClass: cssClass = [] ,  } = {}){
        // this.#children = children;
        this.#itemCount = itemCount;
        this.#itemBuilder = itemBuilder;
        this.hintText = placeholder;
        this.#valueField = valueField;
        this.#labelField = labelField;
        this.#searchField = searchField;
        this.#cssClass = cssClass;
        this.#listWidget = new $ca2128afcbe8a8b0$export$143d07cf9d67646c({
            child: new $a9dc397e9d4383c0$export$84d0dd190d551cd1({
                itemCount: this.#itemCount,
                itemBuilder: (index)=>{
                    const item = this.#itemBuilder(index);
                    return item;
                }
            })
        });
        this.#inputWidget = new $b68d41202eb40c22$export$c5d7264e75cc7d00({
            textAlign: $2ea2a83cd48033cc$export$3720eb13f948f394.start,
            style: {
                backgroundColor: '#dddddd',
                fontSize: 16,
                widget: 400
            },
            decoration: new $b588aceb60e0ef61$export$ff189cb92f0c2ebe({
                hintText: this.hintText
            }),
            onFocuse: (e)=>{
                if (e.type == 'focus') this.#listWidget.htmlElement.style.display = 'flex';
                else this.#listWidget.htmlElement.style.display = 'none';
            }
        });
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: new $8c3216930ce7adb9$export$816b5d811295e6bc({
                mainAxisAlignment: $2ea2a83cd48033cc$export$6595504a60e1f77c.start,
                crossAxisAlignment: $2ea2a83cd48033cc$export$66a3248d846611ce.stretch,
                children: [
                    this.#inputWidget,
                    this.#listWidget, 
                ]
            }),
            cssClass: [
                'search-field-widget', 
            ]
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




"use strict";
class $1fbcbe3544f61ea1$export$3d2af79b839f3351 {
    #child;
    #width;
    #height;
    #widget;
    constructor({ child: child , width: width , height: height  } = {}){
        this.#child = child;
        this.#width = width;
        this.#height = height;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'sized-box-widget', 
            ]
        });
    }
    build() {
        // if (this.child) {
        //     this.child.build();
        //     this.widget.htmlElement.appendChild(this.child.element);
        // }
        const el = this.#widget.build().htmlElement;
        el.style.width = this.#width ? `${this.#width}px` : '';
        el.style.height = this.#height ? `${this.#height}px` : '';
        el.style.maxWidth = this.#width ? `${this.#width}px` : '';
        el.style.maxHeight = this.#height ? `${this.#height}px` : '';
        // el.style.backgroundColor = 'transparent';
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}



"use strict";
class $019283899ad19df8$export$652b5b0d951b8801 {
    #debug = false;
    #child;
    #onPressed;
    #style;
    #widget;
    constructor({ child: child , onPressed: onPressed , onLongPress: onLongPress , onHover: onHover , onFocusChange: onFocusChange , style: style , focusNode: focusNode , autofocus: autofocus = false  } = {}){
        this.#child = child;
        this.#onPressed = onPressed;
        this.onLongPress = onLongPress;
        this.onHover = onHover;
        this.onFocusChange = onFocusChange;
        this.focusNode = focusNode;
        this.autofocus = autofocus;
        this.#style = style;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            child: this.#child,
            cssClass: [
                'text-button-widget', 
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        element.addEventListener('click', (e)=>{
            if (this.#onPressed && typeof this.#onPressed == 'function') this.#onPressed(e);
        });
        element.addEventListener('mouseover', (e)=>{
            if (this.onHover && typeof this.onHover == 'function') this.onHover(e);
        });
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
}




"use strict";
class $fdf534fc9f25593f$export$1df879243bf2e42d {
    constructor({ inherit: inherit = true , color: color , backgroundColor: backgroundColor , fontSize: fontSize , fontWeight: fontWeight , fontStyle: fontStyle , letterSpacing: letterSpacing , wordSpacing: wordSpacing , textBaseline: textBaseline , height: height , leadingDistribution: leadingDistribution , locale: locale , foreground: foreground , background: background , shadows: shadows , fontFeatures: fontFeatures , decoration: decoration , decorationColor: decorationColor , decorationStyle: decorationStyle , decorationThickness: decorationThickness , debugLabel: debugLabel , fontFamily: fontFamily , fontFamilyFallback: fontFamilyFallback , overflow: overflow  } = {}){
        this.inherit = inherit, this.color = color;
        this.backgroundColor = backgroundColor;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight ? fontWeight : $e3abc45c9e62ea36$export$1c11f686df781f87.normal;
        this.fontStyle = fontStyle;
        this.letterSpacing = letterSpacing;
        this.wordSpacing = wordSpacing;
        this.textBaseline = textBaseline;
        this.height = height;
        this.leadingDistribution = leadingDistribution;
        this.locale = locale;
        this.foreground = foreground;
        this.background = background;
        this.shadows = shadows;
        this.fontFeatures = fontFeatures;
        this.decoration = decoration;
        this.decorationColor = decorationColor;
        this.decorationStyle = decorationStyle;
        this.decorationThickness = decorationThickness;
        this.debugLabel = debugLabel;
        this.fontFamily = fontFamily;
        this.fontFamilyFallback = fontFamilyFallback;
        this.overflow = overflow;
    }
    build() {
        return this;
    }
}




"use strict";
class $3053c8f56190ee50$export$e95904fb377b5ee2 {
    #data;
    #style;
    #overflow;
    #widget;
    constructor(data, { style: style  } = {}){
        this.#data = data;
        this.#style = style;
        this.#overflow = $3053c8f56190ee50$export$75c0faeae05f58d.ellipsis;
        this.#widget = new $135290c108efc430$export$a829527ff4e4114a({
            // tagName: 'p',
            cssClass: [
                'text-widget'
            ]
        });
    }
    build() {
        const element = this.#widget.build().htmlElement;
        element.innerHTML = this.#data;
        element.style.color = this.#style?.color;
        element.style.backgroundColor = this.#style?.backgroundColor;
        element.style.fontSize = this.#style?.fontSize ? `${this.#style.fontSize}px` : 'inherit';
        element.style.fontFamily = this.#style?.fontFamily ?? 'inherit';
        element.style.fontWeight = this.#style?.fontWeight ?? 'inherit';
        element.style.height = this.#style?.height;
        element.style.overflow = this.#overflow ? 'hidden' : '';
        element.style.textOverflow = this.#overflow;
        element.style.textAlign = this.#style?.textAlign;
        // this.#ellipsizeTextBox(element);
        // new ResizeObserver(async () => {
        //     this.#onResize();
        // }).observe(element);
        return this;
    }
    get htmlElement() {
        return this.#widget.htmlElement;
    }
     #onResize() {
        const element = this.#widget.htmlElement;
        this.#addText(element, this.#data);
    }
     #addText(element, text) {
        element.innerHTML = '';
        const wordArray = text.split(' ');
        const height = element.clientHeight;
        for(var i = 0; i < wordArray.length; i++){
            element.innerHTML = element.innerHTML + " " + wordArray[i];
            if ($3053c8f56190ee50$var$checkOverflow(element)) return 0;
        }
    }
     #ellipsizeTextBox(element1) {
        const wordArray = element1.innerHTML.split(' ');
        while(element1.scrollHeight > element1.clientHeight){
            wordArray.pop();
            element1.innerHTML = wordArray.join(' ') + '...';
        }
    }
}
function $3053c8f56190ee50$var$checkOverflow(el) {
    const curOverflow = el.style.overflow;
    if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";
    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    el.style.overflow = curOverflow;
    return isOverflowing;
}
const $3053c8f56190ee50$export$75c0faeae05f58d = {
    clip: 'clip',
    fade: 'fade',
    ellipsis: 'ellipsis'
};






"use strict";
class $de541b8674ea0385$export$d7322a7deb61ece1 {
    constructor({ accentColor: accentColor = '#FF7800' , onAccentColor: onAccentColor = 'rgba(255, 255, 255, 1.0)' , secondary: secondary = 'rgba(41, 73, 127, 1.0)' , onSecondary: onSecondary = 'rgba(255, 255, 255, 1.0)' , onSurface: onSurface = 'rgba(255, 255, 255, 1.0)' , onBackground: onBackground = 'rgba(255, 255, 255, 1.0)' , shadowColor: shadowColor = 'rgba(25, 25, 25, 0.7)' , primaryFontFamily: primaryFontFamily = 'Roboto' , secondaryFontFamily: secondaryFontFamily = 'Rubik' , baseFontSize: baseFontSize = 14 , backgroundColor: backgroundColor , scaffoldBackgroundColor: scaffoldBackgroundColor , textSelectionTheme: textSelectionTheme , dialogTheme: dialogTheme , colorScheme: colorScheme , elevatedButtonTheme: elevatedButtonTheme , textButtonTheme: textButtonTheme , appBarTheme: appBarTheme , textTheme: textTheme ,  } = {}){
        this.backgroundColor = backgroundColor ? backgroundColor : '#ffffff';
        this.scaffoldBackgroundColor = scaffoldBackgroundColor ? scaffoldBackgroundColor : '#ffffff';
        this.textSelectionTheme = textSelectionTheme ? textSelectionTheme : new $de541b8674ea0385$export$581730b9ded1fdb3({
            cursorColor: '#000000',
            selectionColor: accentColor,
            selectionHandleColor: accentColor
        });
        this.dialogTheme = dialogTheme ? dialogTheme : new $de541b8674ea0385$export$9d6128e3fb0b8797({
            backgroundColor: secondary,
            titleTextStyle: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize + 6,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.w500,
                color: onSecondary
            }),
            contentTextStyle: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onSecondary
            })
        });
        this.colorScheme = colorScheme ? colorScheme : new $de541b8674ea0385$export$610a58c777d52843({
            primary: primary,
            onPrimary: onPrimary,
            primaryContainer: primaryContainer,
            onPrimaryContainer: onPrimaryContainer,
            secondary: secondary,
            onSecondary: onSecondary,
            secondaryContainer: secondaryContainer,
            onSecondaryContainer: onSecondaryContainer,
            tertiary: accentColor,
            onTertiary: onAccentColor,
            tertiaryContainer: accentContainerColor,
            onTertiaryContainer: onAccentContainerColor,
            surface: surface,
            onSurface: onSurface,
            background: background,
            onBackground: onBackground,
            error: error,
            onError: onError,
            brightness: $de541b8674ea0385$export$98835ff3df8927e5.light
        });
        this.elevatedButtonTheme = elevatedButtonTheme ? elevatedButtonTheme : new $de541b8674ea0385$export$56f557c8af0f2aba({
            style: new $5e2a4f07c3fb36e0$export$8cb5d935be5f40c0({
                primary: accentColor,
                onPrimary: onAccentColor,
                onSurface: onSurface,
                shadowColor: shadowColor
            })
        });
        this.textButtonTheme = textButtonTheme ? textButtonTheme : new $de541b8674ea0385$export$7be413bc563acd8a({
            style: new $5e75d0f90c45177b$export$bdc3c19374266b98({
                primary: onAccentColor,
                backgroundColor: accentColor
            })
        });
        this.appBarTheme = appBarTheme ? appBarTheme : new $de541b8674ea0385$export$4192434a718633e9({
            titleTextStyle: new $5e75d0f90c45177b$export$bdc3c19374266b98({
                fontFamily: secondaryFontFamily,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                fontSize: baseFontSize * 1.2,
                color: onSecondary
            })
        }), this.textTheme = textTheme ? textTheme : new $de541b8674ea0385$export$893b92e122a257c3({
            headline1: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: primaryFontFamily,
                fontSize: baseFontSize + 18,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            headline2: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: primaryFontFamily,
                fontSize: baseFontSize + 16,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            headline3: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: primaryFontFamily,
                fontSize: baseFontSize + 12,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            headline4: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize + 6,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            // headline5
            headline6: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize + 4,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            subtitle1: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize + 2,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            subtitle2: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize + 2,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground
            }),
            bodyText1: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground,
                height: 1.5
            }),
            bodyText2: new $fdf534fc9f25593f$export$1df879243bf2e42d({
                fontFamily: secondaryFontFamily,
                fontSize: baseFontSize,
                fontWeight: $e3abc45c9e62ea36$export$1c11f686df781f87.normal,
                color: onBackground,
                height: 1.5
            })
        });
    }
}
const $de541b8674ea0385$export$98835ff3df8927e5 = {
    dark: 0,
    light: 1
};
class $de541b8674ea0385$export$581730b9ded1fdb3 {
    constructor({} = {}){}
}
class $de541b8674ea0385$export$9d6128e3fb0b8797 {
    constructor({} = {}){}
}
class $de541b8674ea0385$export$610a58c777d52843 {
    constructor({ primary: primary , onPrimary: onPrimary , primaryContainer: primaryContainer , onPrimaryContainer: onPrimaryContainer , secondary: secondary , onSecondary: onSecondary , secondaryContainer: secondaryContainer , onSecondaryContainer: onSecondaryContainer , tertiary: accentColor , onTertiary: onAccentColor , tertiaryContainer: accentContainerColor , onTertiaryContainer: onAccentContainerColor , surface: surface , onSurface: onSurface , background: background , onBackground: onBackground , error: error , onError: onError , brightness: brightness ,  } = {}){
        this.primary = primary;
        this.onPrimary = onPrimary;
        this.primaryContainer = primaryContainer;
        this.onPrimaryContainer = onPrimaryContainer;
        this.secondary = secondary;
        this.onSecondary = onSecondary;
        this.secondaryContainer = secondaryContainer;
        this.onSecondaryContainer = onSecondaryContainer;
        this.tertiary = accentColor;
        this.onTertiary = onAccentColor;
        this.tertiaryContainer = accentContainerColor;
        this.onTertiaryContainer = onAccentContainerColor;
        this.surface = surface;
        this.onSurface = onSurface;
        this.background = background;
        this.onBackground = onBackground;
        this.error = error;
        this.onError = onError;
        this.brightness = brightness;
    }
}
class $de541b8674ea0385$export$4192434a718633e9 {
    constructor({} = {}){}
}
class $de541b8674ea0385$export$893b92e122a257c3 {
    constructor({ displayLarge: displayLarge , displayMedium: displayMedium , displaySmall: displaySmall , headlineLarge: headlineLarge , headlineMedium: headlineMedium , headlineSmall: headlineSmall , titleLarge: titleLarge , titleMedium: titleMedium , titleSmall: titleSmall , bodyLarge: bodyLarge , bodyMedium: bodyMedium , bodySmall: bodySmall , labelLarge: labelLarge , labelMedium: labelMedium , labelSmall: labelSmall , headline1: headline1 , headline2: headline2 , headline3: headline3 , headline4: headline4 , headline5: headline5 , headline6: headline6 , subtitle1: subtitle1 , subtitle2: subtitle2 , bodyText1: bodyText1 , bodyText2: bodyText2 , caption: caption , button: button , overline: overline ,  } = {}){
        this.displayLarge = displayLarge ? displayLarge : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.displayMedium = displayMedium ? displayMedium : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.displaySmall = displaySmall ? displaySmall : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headlineLarge = headlineLarge ? headlineLarge : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headlineMedium = headlineMedium ? headlineMedium : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headlineSmall = headlineSmall ? headlineSmall : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.titleLarge = titleLarge ? titleLarge : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.titleMedium = titleMedium ? titleMedium : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.titleSmall = titleSmall ? titleSmall : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.bodyLarge = bodyLarge ? bodyLarge : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.bodyMedium = bodyMedium ? bodyMedium : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.bodySmall = bodySmall ? bodySmall : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.labelLarge = labelLarge ? labelLarge : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.labelMedium = labelMedium ? labelMedium : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.labelSmall = labelSmall ? labelSmall : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline1 = headline1 ? headline1 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline2 = headline2 ? headline2 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline3 = headline3 ? headline3 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline4 = headline4 ? headline4 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline5 = headline5 ? headline5 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.headline6 = headline6 ? headline6 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.subtitle1 = subtitle1 ? subtitle1 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.subtitle2 = subtitle2 ? subtitle2 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.bodyText1 = bodyText1 ? bodyText1 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.bodyText2 = bodyText2 ? bodyText2 : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.caption = caption ? caption : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.button = button ? button : new $fdf534fc9f25593f$export$1df879243bf2e42d();
        this.overline = overline ? overline : new $fdf534fc9f25593f$export$1df879243bf2e42d();
    }
}
class $de541b8674ea0385$export$7be413bc563acd8a {
    constructor({} = {}){}
}
class $de541b8674ea0385$export$56f557c8af0f2aba {
    constructor({} = {}){}
}





//# sourceMappingURL=index.js.map
