import { createSheet } from '../src/index';
import DocumentMock from './mocks/document';

const DocumentMockInstance = new DocumentMock();
let originalDocument;

describe('createSheet', () => {
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

        DocumentMockInstance.resetFunctions();
        createSheet();
    });

    afterAll(() => {
        if (originalDocument) {
            global.document = originalDocument;
        }
    });

    it('should call document.createElement', () => {
        expect(DocumentMockInstance.createElement).toBeCalled();
    });

    it('should call document.querySelector', () => {
        expect(DocumentMockInstance.querySelector).toBeCalled();
    });

    it('should call element.append', () => {
        expect(DocumentMockInstance.append).toBeCalled();
    });
});
