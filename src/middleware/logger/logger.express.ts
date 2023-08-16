import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { MyLogger } from "./MyLogger";

@Injectable()
export class LoggerExpress implements NestMiddleware {

    constructor(private myLogger: MyLogger) {
        this.myLogger.setContext(LoggerExpress.name);
    }

    use(req: Request, res: Response, next: NextFunction) {
        this.myLogger.appLog(`${req.url} [${req.method}] ${JSON.stringify(req.body)}`)
        next();
    }
}