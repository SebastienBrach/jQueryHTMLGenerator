class HTMLGenerator {

    constructor() {
        this.tagsList = []
        this.indexTagsArray = -1
        this.HTMLTagList = {
            HTMLTags : ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'html', 'i', 'iframe', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'u', 'ul', 'var', 'video', 'webview'],
            selfClosingHTMLTag : ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'],
            otherHTMLTags : ['a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'blockquote', 'body', 'button', 'canvas', 'caption', 'cite', 'code', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'html', 'i', 'iframe', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'u', 'ul', 'var', 'video', 'webview']
        }
    }

    /**
     * addCSS(css) => add css to the tag
     * @param {*} css 
     * @returns 
     */
    addCSS(css, value){
        let style = ''
        typeof css === 'object' ? style = this.addCSSObject(css) : style = this.addCSString(css, value)
        this.addAttribute('style', style)
    }

    /**
     * addCSSObject(css) => add css object to the tag
     * @param {*} css 
     * @returns 
     */
    addCSSObject(css){
        let style = ""
        for(let cssProperty in css){
            style +=`${cssProperty}:${css[cssProperty]}; `
        }
        return style
    }

    /**
     * addCSString(css, value) => add css string to the tag
     * @param {*} css 
     * @param {*} value 
     * @returns 
     */
    addCSString(property, value){
        let style=`${property}:${value}; ` 
        let tagStyle = this.tagsList[this.indexTagsArray].attrList.style
        tagStyle ? tagStyle += style : tagStyle = style
        return tagStyle
    }

    /**
     * addID(id) => add id attribute to the tag
     * @param {*} id 
     * @returns 
     */
    addID(id){
        this.addAttribute('id', id)
    }

    /**
     * addText(text) => add text to the tag
     * @param {*} text 
     * @returns 
     */
    addText(text){
        this.addHTML(text)
    }

    /**
     * addHTML(html) => add html to the tag
     * @param {*} html 
     * @returns 
     */
     addHTML(value){
        this.tagsList[this.indexTagsArray].html = value 
        return this
    }

    /**
     * addClass(class) => add class attribute to the tag
     * @param {*} _class 
     * @returns 
     */
    addClass(_class){
        this.addAttribute('class', _class)
    }

    /**
     * addType(type) => add type attribute to the tag
     * @param {*} type 
     * @returns 
     */
    addType(type){
        this.addAttribute('type', type)
    }

    /**
     * addName(name) => add name attribute to the tag
     * @param {*} name 
     * @returns 
     */
    addName(name){
        this.addAttribute('name', name)
    }

    /**
     * addValue(value) => add value attribute to the tag
     * @param {*} value 
     * @returns 
     */
    addValue(value){
        this.addAttribute('value', value)
    }

    /**
     * addHidden() => add hidden attribute to the tag
     * @returns 
     */
    addHidden(){
        this.addAttribute('hidden', true)
    }

    /**
     * addTitle(title) => add title attribute to the tag
     * @param {*} title 
     * @returns 
     */
    addTitle(title){
        this.addAttribute('title', title)
    }

    /**
     * addInputMode(inputmode) => add inputmode attribute to the tag
     * @param {*} inputmode 
     * @returns 
     */
    addInputMode(inputmode){
        this.addAttribute('inputmode', inputmode)
    }

    /**
     * addAttribute(attribute, value) => add attribute to the tag
     * @param {*} attribute 
     * @param {*} value 
     * @returns 
     */
    addAttribute(attribute, value){
        this.tagsList[this.indexTagsArray].attrList[attribute] = value
        return this
    }

    /**
     * addEvent(event, callback) => add event w callback to the tag
     * @param {*} event 
     * @param {*} callback 
     * @returns 
     */
    addEvent(event, callback){
        this.tagsList[this.indexTagsArray].eventList[event] = callback
        return this
    }

    /**
     * addTag(tag) => add tag 
     * @entrypoint
     * @param {*} tag
     * @returns
     */
    addTag(tag) {
        this.indexTagsArray++
        this.createTag(tag)
    }

    /**
     * appendTo() => append the tag to the parent
     * @param {*} element 
     */
    appendTo(element) {
        this.affectDataToTag(element, this.tagsList[0])
        for (let index = 1; index < this.tagsList.length; index++) {
            const tag = this.tagsList[index];
            if(this.tagsList.length > 1){
                this.affectDataToTag(this.tagsList[index-1].tagObject, this.tagsList[index])
            }
        }
    }

    /**
     * affectDataToTag(element, tag) => affect attribute, text and event to the tag
     * @param {*} element 
     * @param {*} tag 
     */
    affectDataToTag(element, tag){
        this.affectAttributeToTag(element, tag)
        this.affectHTMLToTag(tag)
        this.affectEventToTag(tag)
    }
    
    /**
     * affectAttributeToTag(element, tag) => affect attribute to the tag
     * @param {*} element 
     * @param {*} tag 
     */
    affectAttributeToTag(element, tag){
        const tagObject = tag.tagObject
        const attrTagList = tag.attrList
        for(let attr in attrTagList){
            if(attrTagList[attr] != undefined){
                tagObject.attr(attr, tag.attrList[attr])
            }
        }
        $(element).append(tagObject)
    }

    /**
     * affectHTMLToTag(tag) => affect html to the tag
     * @param {*} tag 
     */
    affectHTMLToTag(tag){
        const tagObject = tag.tagObject
        const textOrHTML = tag.html
        $(tagObject).html(textOrHTML)
    }

    /**
     * affectEventToTag(tag) => affect event to the tag
     * @param {*} element 
     * @param {*} tag 
     */
    affectEventToTag(tag){
        const tagObject = tag.tagObject
        const eventList = tag.eventList
        for(let event in eventList){
            $(tagObject).on(event, eventList[event])
        }
    }

    /**
     * createTag(tag) => create tag
     * @param {*} tag 
     */
    createTag(tag) {
        const slashIfSelfClosing = this.HTMLTagList.selfClosingHTMLTag.includes(this.tagToCreate) ? '/' : ''
        const data = {
            tag: tag,
            tagExist: this.HTMLTagList.otherHTMLTags.includes(tag) || this.HTMLTagList.selfClosingHTMLTag.includes(tag),
            tagObject : $(`<${tag}${slashIfSelfClosing}>`), 
            isSelfClosingTag : this.HTMLTagList.selfClosingHTMLTag.includes(tag),
            html : "",
            attrList : {},
            eventList: {},
        }
        this.tagsList[this.indexTagsArray] = data
    }
}