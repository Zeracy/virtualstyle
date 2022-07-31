declare namespace _default {
    export { createRule };
}

declare function createRule(rule: string): StylesheetRule;

declare class StylesheetRule {
    constructor(index: number, rule: string, stylesheet: CSSStyleDeclaration);
    index: number;
    stylesheet: CSSStyleDeclaration;
    change(rule?: string): void;
    reset(): void;
}

export default _default;
// # sourceMappingURL=index.d.ts.map
