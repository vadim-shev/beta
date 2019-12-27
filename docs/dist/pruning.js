
/*************************
**
**	This file contains prepared funtions that helps : 
**	1. Interact with DOM's objects(enable/disable styles, easily create/remove/check presence class and etc.).
**	2. Make the javaScript code more concise.
**
**************************
**
**	1. addFont(url) || removeFont(url)
**	2. addStyleSheet(url) || removeStyleSheet(url)
**	3. setBackground(element, url) || unsetBackground(element, url)
**	4. _hasClass(ele, cls) || _addClass(ele, cls) || _removeClass(ele, cls)
**	5. setImageSRC(selector, _src) || unsetImageSRC(selector, _src)
**	6. checkName(selector, _length)
**	7. checkMail(selector, _length)
**	8. checkPhone(selector, _length)
**	9. checkMessage(selector, _length)
**
**************************
**
**	File Name: pruning.js
**	File URI: teamwork/js/pruning.js
**	Author: Vadim Shevchenko
**	Version: 1.1
**	Created: 28.11.2019
**	
*************************/



'use strict'

const _Error = new Error('Error occurrated, invalid value')

var emptyObj = Object.freeze({});

// This functions help to produce better ViewModel in JS
function isUndef(value) {
    return value === undefined || value === null
}

function isDef(value) {
    return value !== undefined && value !== null
}

function isTrue(value) {
    return value === true
}

function isFalse(value) {
    return value === false
}

/**
 *  Check for primitive value
 */
function isPrimitive(value) {
    return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'symbol' ||
        typeof value === 'boolean'
    )
}

/**
 *  Checking for an object
 */
function isObj(obj) {
    return obj !== null && typeof obj === 'object'
}

function isPromise(value) {
    return (
        isDef(value) && 
        typeof value.then === 'function' && 
        typeof value.catch === 'function'
    )
}

// Go mapping and then return a Foo for checking if a key is in the map
function goMap(string, expLowerCase) {
    var map = Object.create(null)
    var list = string.split(',')

    for(var i = 0; i < list.length; i++) {
        map[list[i]] = true
    }

    return expLowerCase
        ? function(value) {
            return map[value.toLowerCase()]
        }
        : function(value) {
            return map[value]
        }
}

/**
 * Interactions with Array
 */
function removeArrItem(array, item) {
    if(array.length) {
        var detect = array.indexOf(item)

        if(detect > -1) {
            return array.slice(detect, 1)
        }
    }
}

/**
 *  Making a cached version of a pure Foo
 */
function cached(Foo) {
    var cache = Object.create(null)

    return (
        function chachedFoo(string) {
            var hit = cache[string]

            return hit || (cache[string] = Foo(string))
        }
    )
}

function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function(a, b, c) { 
    return false
}

/**
 *  Ensure a function's callback just 1 time
 */
function once(Foo) {
    var called = false

    return function() {
        if(!called) {
            called = true

            Foo.apply(this, arguments)
        }
    }
}

/**
 *  Config
 */
var cfg = (
    {
        optionMergeStrategies: Object.create(null),
        silent: false,
        errorHandler: null,
        warnHandler: null,
        ignoreElements: null,
        keyCodes: Object.create(null),
        isReservedTag: no,
        isReservedAttr: no,
        isUnknowElement: no,
        getTagNamespace: noop,
        async: true
    }
)

// asking about __proto__
var hasProto = '__proto__' in {}

/** 
 *  Client browser sniffing
 */
// Global checking of environment
var inBrowser = typeof window !== 'undefined'
var UA = inBrowser && window.navigator.userAgent.toLowerCase()
// Microsoft Browser
var isIE = UA && /msie|trident/.test(UA)
var isIE9 = UA && UA.indexOf('msie 9.0') > 0
var isEdge = UA && UA.indexOf('edge/') > 0
// iOS's/Android's Browser
var isAndroid = (UA && UA.indexOf('android') > 0) 
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) 
// Google Chrome
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
// Mozzila
var isFF = UA && UA.match(/firefox\/(\d+)/)

// Firefox specificity
var nativeWatch = ({}).watch

/*  */

// Bellow lies the variable that contains attributes that  
// has been reserved for web
var isReservedAttr = goMap('style,class')

// For binding
var acceptValue = goMap('input,textarea,option,select,progress')

var isEnumeratedAttr = goMap('contenteditable,draggable,spellcheck')

var isValidContentEditableValue = goMap('events,caret,typing,plaintext-only')

var isBooleanAttr = goMap(
    'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
    'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
    'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
    'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
    'required,reversed,scoped,seamless,selected,sortable,translate,' +
    'truespeed,typemustmatch,visible'
)

var xlinkNS = 'http://www.w3.org/1999/xlink'

var isXlink = function(name) {
    return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
}

var getXlinkProp = function(name) {
    return isXlink(name) ? name.slice(6, name.length) : ''
}

var isFalsyAttrValue = function(value) {
    return value == null || value === false
}

/*  */

var namespaceMap = {
    svg: 'http://www.w3.org/2000/svg',
    math: 'http://www.w3.org/1998/Math/MathML'
}

var isHTMLTag = goMap(
    'html,body,base,head,link,meta,style,title,' +
    'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
    'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
    'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
    's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
    'embed,object,param,source,canvas,script,noscript,del,ins,' +
    'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
    'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
    'output,progress,select,textarea,' +
    'details,dialog,menu,menuitem,summary,' +
    'content,element,shadow,template,blockquote,iframe,tfoot'
)

var isSVG = goMap(
    'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
    'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
    'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
    true
)

var isPreTag = function(tag) {
    return tag === 'pre'
}

var isReservedTag = function(tag) {
    return isHTMLTag(tag) || isSVG(tag)
}

function getTagNamespace(tag) {
    if(isSVG(tag)) return 'svg'

    if(tag == 'match') return 'math'
}

var unknownElementCache = Object.create(null)

function isUnknownElement(tag) {
    if(!inBrowser) return true

    if(isReservedTag(tag)) return false

    tag = tag.toLowerCase()

    if(unknownElementCache[tag] != null) return unknownElementCache[tag]

    var ele = document.createElement(tag)
    
    if (tag.indexOf('-') > -1) {
        return (
            unknownElementCache[tag] = (
                el.constructor === window.HTMLUnknownElement ||
                el.constructor === window.HTMLElement
            )
        )
    } else {
        return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
    }
}

/** 
 *  Private
 */
function removeChild(node, child) {
    node.removeChild(child)
}

function appendChild(node, child) {
    node.appendChild(child)
}

function parentNode(node) {
    return node.parentNode
}

function nextSibling(node) {
    return node.nextSibling
}

function tagName(node) {
    return node.tagName
}

function setTextContent(node, text) {
    node.textContent = text
}

function setStyleScope(node, scopeId) {
    node.setAttribute(scopeId, '')
}

/** 
 *  Global
 */

 /**
 * Flags
 */
function setImageSRC(selector, _src) {
	var ele = document.querySelector(selector);
	ele instanceof HTMLImageElement ? !_activateImageSRC(ele) ? ele.src = _src : false : console.error("WRONG SELECTOR " + ele.className, '\n IS NOT AN <img>')
}

function unsetImageSRC(selector, _src) {
	var ele = document.querySelector(selector);
	var Src;
	Src = _src
	ele instanceof HTMLImageElement && Src == _src ? _src = ele.src = " " : console.error('no');
}

function _activateImageSRC(activate) {
	typeof(activate) ? activate = true : false
}

function checkName(selector, _length) {
	var ele = document.querySelector(selector)
	var val = ele.value

	ele.maxLength = _length

	valid = /[^\dA-ZА-ЯЁ]+/gi.exec(val) ? ele.value = "" : /[^\t\n\v\f\rA-ZА-ЯЁ]+/gi.exec(val) ? ele.value = "" : console.log('str')

	showError = /[^\dA-ZА-ЯЁ]+/gi.exec(val) ? ele.style.border = "1px solid red" : /[^\t\n\v\f\rA-ZА-ЯЁ]+/gi.exec(val) ? ele.style.border = "1px solid red" : ele.style.border = "1px solid black"

} 

function checkMail(selector, _length) {
	var ele = document.querySelector(selector)
	var val = ele.value

	ele.maxLength = _length

	valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.exec(val) ? ( 
		console.log(val),
		ele.style.border = "1px solid black"
	) : (
		val = "",
		console.error(_Error),
		ele.style.border = "1px solid red"	
	)
}

function checkPhone(selector, _length) {
	var ele = document.querySelector(selector)
	var val = ele.value

	ele.maxLength = _length

	valid = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g.exec(val) ? ( 
		console.log(val) 
	) : ( 
		ele.value = "",
		console.error(_Error)
	)
}

function checkMessage(selector, _length) {
	var ele = document.querySelector(selector)
	var val = ele.value

	ele.maxLength = _length

	console.log(val);

	!val == false ? ele.style.border = "1px solid black" : ele.style.border = "1px solid red"
}


function setBackground(element, url) {
	var ele = document.querySelector(element);

	if(!_activateBackground(ele)) {
		var Url = "url('"+url+"')"

		ele.style.background = Url + 'no-repeat center center / contain'
		console.log(ele, ele.style.background);
	}
}

 function unsetBackground(element, url) {
	var ele = document.querySelector(element)
	Url = url
 	_activateBackground(url == "url('"+Url+"')" ? Url = "url('none')" : Url = "url('none')" , false)
 	ele.style.background = "none"
 	console.log(url);
 }

function _activateBackground(activate) {
	if(typeof(activate) == "undefined") activate = true

	return false
}

function element(id) { 
    return document.getElementById(id)
}

function addStyleSheet(url) {
    var id = _styleSheetUrlToId(url)

    if(!_enableStyleSheet(id)) {
        var link  = document.createElement("link")

        link.href = url
        link.type = "text/css"
        link.rel  = "stylesheet"
        link.id   = id

        document.getElementsByTagName("head")[0].appendChild(link)
    }
}

function removeStyleSheet(url) { 
    _enableStyleSheet(_styleSheetUrlToId(url), false) 
}

function _styleSheetUrlToId(url) { 
    var urlParts = url.split("/")

    return urlParts[urlParts.length - 1].split(".")[0] + "-style"
}

function _enableStyleSheet(id, enable) {
    if(typeof(enable) == "undefined") enable = true

    var sheet = element(id)

    if(sheet) {
        sheet.disabled = !enable
        return true    
    }

    return false
}	

function addFont(url) {
	if(!enableFont(url)) {
		var link = document.createElement("link")
		link.href = url
		link.rel = "stylesheet"
		document.getElementsByTagName("head")[0].appendChild(link)		
	}
}

function removeFont(url) {
	enableFont(url, false)
}

function enableFont(url, turnOn) {
	if(typeof(turnOn) == "undefined") turnOn = true

	return false
}

function fonts(Link) {
	addFont(Link)
}



function query(selector) {
    if (typeof selector === 'string') {
        var selected = document.querySelector(selector);

        if(!selected) {
            warn('Cannot find element: ' + selector)
            return document.createElement('div')
        }
        return selected
    } else {
        return selector
    }
}

function setAttr(selector, attr, value) {
    if(selector.tagName.indexOf('-') > -1) {
        baseSetAttr(selector, attr, value)
    } else if(isBooleanAttr(attr)) {
        if(isFalsyAttrValue(value)) {
            selector.removeAttribute(attr)
        } else {
            value = attr === 'allowfullscreen' && selector.tagName === 'EMBED' ? 'true' : attr

            selector.setAttribute(attr, value)
        }
    } else if(isEnumeratedAttr(attr)) {
        selector.setAttribute(attr, convertEnumeratedValue(attr, value))
    } else if(isXlink(attr)) {
        if(isFalsyAttrValue(value)) {
            selector.removeAttributeNS(xlinkNS, getXlinkProp(attr))
        } else {
            selector.setAttributeNS(xlinkNS, attr, value)
        }
    } else {
        baseSetAttr(selector, attr, value)
    }
}

function baseSetAttr (selector, attr, value) {
    if (isFalsyAttrValue(value)) {
        selector.removeAttribute(attr)
    } else {
        if (isIE && !isIE9 && selector.tagName === 'TEXTAREA' && attr === 'placeholder' && value !== '' && !selector.__ieph) {
            var blocker = function (e) {
                e.stopImmediatePropagation()
                selector.removeEventListener('input', blocker)
            }

            selector.addEventListener('input', blocker)
            selector.__ieph = true
        }
      selector.setAttribute(attr, value);
    }
}

function getAndRemoveAttr(selector, name, removeFromMap) {
    var val;

    if((val = selector.attrsMap[name]) != null) {
        var list = selector.attrsList;

        for(var i = 0, l = list.length; i < l; i++) {
            if(list[i].name === name) {
                list.splice(i, 1);
                break
            }
        }
    }

    if (removeFromMap) {
        delete selector.attrsMap[name];
    }
    return val
}

var whitespaceRE = /\s+/

var _hasClass = function(ele, cls) {
	if(ele.className) {
		return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	} else {
		return ele.className = cls;
	}

}

function addClass(selector, cls) {
    if(!cls || !(cls = cls.trim())) {
        return
    }

    if(selector.classList) {
        if(cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(
                function (c) { 
                    return el.classList.add(c); 
                }
            )
        } else {
            selector.classList.add(cls)
        }
    } else {
        var cur = " " + (selector.getAttribute('class') || '') + " "

        if(cur.indexOf(' ' + cls + ' ') < 0) {
            selector.setAttribute('class', (cur + cls).trim())
        }
    }
}

function removeClass(selector, cls) {
    if(!cls || !(cls = cls.trim())) {
        return
    }

    if(selector.classList) {
        if(cls.indexOf(' ') > -1) {
            cls.split(whitespaceRE).forEach(
                function(c) { 
                    return selector.classList.remove(c)
                }
            )
        } else {
            selector.classList.remove(cls)
        }

        if(!selector.classList.length) {
            selector.removeAttribute('class')
        }
    } else {
        var cur = " " + (selector.getAttribute('class') || '') + " "
        var tar = ' ' + cls + ' '

        while(cur.indexOf(tar) >= 0) {
            cur = cur.replace(tar, ' ')
        }

        cur = cur.trim()

        if(cur) {
            selector.setAttribute('class', cur)
        } else {
            selector.removeAttribute('class')
        }
    }
} 


	



