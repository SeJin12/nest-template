import { ConfigService } from "@nestjs/config";


export class MySql {
    
    constructor(private readonly config: ConfigService) {

    }

    checkEnv() : void {
        console.log(this.config.get('NODE_ENV'));
    }
}