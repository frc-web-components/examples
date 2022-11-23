import { LitElement } from 'lit';
export declare class MyCounter extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    private onClick;
    render(): import("lit-html").TemplateResult<1>;
}
