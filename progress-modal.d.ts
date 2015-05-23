export declare class ProgressModal {
    title: string;
    protected uuid: string;
    protected bind(bindingContext: any): void;
    show(promise: Promise<any>): void;
    hide(): void;
}
