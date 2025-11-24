export default class AppError extends Error {
    statusCode: number | undefined;
    constructor(message: string, statusCode?: number) {
        super(message);
        this.statusCode = statusCode;
    }
}