import type { Request, Response, NextFunction } from "express";
declare const getPosts: (req: Request, res: Response, next: NextFunction) => void;
declare const createPosts: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
declare const uploadedImage: (req: Request, res: Response, next: NextFunction) => void;
declare const downloadFile: (req: Request, res: Response, next: NextFunction) => void;
declare const downloadFileAsStream: (req: Request, res: Response, next: NextFunction) => void;
export { getPosts, createPosts, uploadedImage, downloadFile, downloadFileAsStream };
//# sourceMappingURL=feed.d.ts.map