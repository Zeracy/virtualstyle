/**
 * @type {string}
 */
const blankRule = 'i {}';

class StylesheetRule {
    /**
     *
     * @param {number} index
     * @param {string} rule
     * @param {CSSStyleDeclaration} stylesheet
     * @constructor
     */
    constructor (index, rule = blankRule, stylesheet) {
        this.index = index;
        this.stylesheet = stylesheet;
        this.stylesheet.insertRule(rule, this.index);
    }

    /**
     * @param {string} [rule]
     * @returns {void}
     */
    change (rule = blankRule) {
        this.stylesheet.deleteRule(this.index);
        this.stylesheet.insertRule(rule, this.index);
    }

    /**
     * @returns {void}
     */
    reset () {
        this.stylesheet.insertRule(blankRule, this.index);
    }
}

/**
 * @type {CSSStyleSheet}
 */
let stylesheet;

/**
 * @returns {void}
 */
const createSheet = () => {
    if (stylesheet) {
        return;
    }

    const styleEl = document.createElement('style');

    styleEl.id = 'stlib';

    document.querySelector('head').append(styleEl);

    stylesheet = styleEl.sheet;
};

/**
 * @param {string} rule
 * @returns {StylesheetRule}
 */
const createRule = (rule) => {
    createSheet();

    return new StylesheetRule(stylesheet.cssRules.length, rule, stylesheet);
};

export {
    createSheet,
    createRule,
};
