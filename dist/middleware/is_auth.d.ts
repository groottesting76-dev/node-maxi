import type { Request, Response, NextFunction } from 'express';
declare module "express-serve-static-core" {
    interface Request {
        userId?: string;
    }
}
declare const isAuth: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default isAuth;
//# sourceMappingURL=is_auth.d.ts.map