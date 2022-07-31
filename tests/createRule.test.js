import { createRule } from '../src/index';
import DocumentMock from './mocks/document';

const DocumentMockInstance = new DocumentMock();
let originalDocument;

describe('createRule', () => {
    beforeAll(() => {
        if (typeof global._document !== 'undefined') {
            Object.defineProperty(global, '_document', {
                value: DocumentMockInstance,
                writable: false,
            });
        } else {
            originalDocument = global.document;
            global.document = DocumentMockInstance;
        }
    });

    afterAll(() => {
        if (originalDocument) {
            global.document = originalDocument;
        }
    });

    describe('without sheet', () => {
        beforeAll(() => {
            DocumentMockInstance.resetFunctions();
            createRule();
        });

        it('should call createSheet', () => {
            expect(DocumentMockInstance.createElement).toBeCalled();
            expect(DocumentMockInstance.querySelector).toBeCalled();
            expect(DocumentMockInstance.append).toBeCalled();
        });

        it('should call stylesheet.insertRule', () => {
            expect(DocumentMockInstance.sheet.insertRule).toBeCalled();
        });
    });

    describe('general behaviour', () => {
        beforeAll(() => {
            DocumentMockInstance.resetFunctions();
        });

        it('should create the rule', () => {
            createRule('rule test');

            expect(DocumentMockInstance.sheet.insertRule).lastCalledWith('rule test', 0);
        });

        it('should reset the rule', () => {
            const rule = createRule();

            rule.reset();
            expect(DocumentMockInstance.sheet.insertRule).lastCalledWith('i {}', 0);
        });

        it('should change the rule', () => {
            const rule = createRule();

            rule.change('test');
            expect(DocumentMockInstance.sheet.deleteRule).lastCalledWith(0);
            expect(DocumentMockInstance.sheet.insertRule).lastCalledWith('test', 0);
        });
    });
});
