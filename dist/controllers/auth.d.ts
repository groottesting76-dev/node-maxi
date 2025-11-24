import type { Request, Response, NextFunction } from "express";
declare const signup: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
declare const login: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export { signup, login };
//# sourceMappingURL=auth.d.ts.map