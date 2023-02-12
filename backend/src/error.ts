export default class APIError extends Error {
    code: number;

    constructor(msg: string, code: number) {
        super(msg);
        this.code = code;
    }
}
