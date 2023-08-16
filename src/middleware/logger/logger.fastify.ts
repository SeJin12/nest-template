import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { MyLogger } from "@middleware/logger/MyLogger"

@Injectable()
export class LoggerFastify implements NestMiddleware {

    constructor(private myLogger: MyLogger) {
        this.myLogger.setContext(LoggerFastify.name);
    }

    use(req: Request, res: Response, next: NextFunction) {
        this.myLogger.appLog(`${req.url} [${req.method}] ${JSON.stringify(req.body)}`)
        next();
    }
}