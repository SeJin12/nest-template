import { ArgumentsHost
    , Catch
    , ExceptionFilter
    , HttpException
    , HttpStatus } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class HttpExceptionsFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) { }

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;

        const ctx = host.switchToHttp();
        console.log(exception);
        
        const httpStatus =
            exception instanceof HttpException
                ? exception.getStatus()
                : HttpStatus.INTERNAL_SERVER_ERROR; 
        
        const responseBody = {
            statusCode: httpStatus,
            timestamp: new Date().toLocaleString(),
            path: httpAdapter.getRequestUrl(ctx.getRequest())
        }

        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}