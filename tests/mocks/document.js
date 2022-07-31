export default class Document {
    /**
     * @constructor
     */
    constructor () {
        this.setFunctions();
    }

    /**
     * @returns {void}
     */
    setFunctions () {
        this.sheet = {
            cssRules: [],
            insertRule: jest.fn(),
            deleteRule: jest.fn(),
        };
        this.createElement = jest.fn(() => ({
            sheet: this.sheet,
        }));
        this.append = jest.fn();
        this.querySelector = jest.fn(() => ({
            append: this.append,
        }));
    }

    /**
     * @returns {void}
     */
    resetFunctions () {
        this.createElement = jest.fn(() => ({
            sheet: this.sheet,
        }));
        this.append = jest.fn();
        this.querySelector = jest.fn(() => ({
            append: this.append,
        }));
    }
}
