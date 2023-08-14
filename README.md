<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>


### Installation

```bash
$ npm install -g @nestjs/cli
$ nest new <project_name>
$ npm install
```

### Dependency Module

```bash
$ npm i class-transformer
$ npm i class-validator
$ npm i mapped-types
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Testing

```bash
# unit tests
$ npm run test

# unit tests watch mode
$ npm run test:watch

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

 ## TodoList
 1. Absolute Path
 2. Logging
 3. Database
 4. @nestjs/config

2개의 프레임워크에서 돌아간다. express, fastify express(@Req() req, @Res() res)

jest는 자바스크립트를 아주 쉽게 테스팅하는 npm 패키지 *.spec.ts 파일은 unit testing하기 위한 파일 unit test: function 같은 하나의 유닛만 테스트 e2e (End to End): 전체 시스템을 테스트

    /* 
        yaml은 컴파일시에 dist 폴더로 copy 되지 않음
        ERROR [ExceptionHandler] ENOENT: no such file or directory, open '/Users/sejin/Documents/nest_template/dist/config/config.yaml'
        cpx 모듈 설치
        "copy-files": "cpx \"src/config/*.yaml\" dist/config/",
         https://codegear.tistory.com/82
        nest-cli.json - deleteOutDir : false
    */

      // console.log(process.env.SERVER_PORT);
  // const config = app.get(ConfigService);
  // console.log(config.get('SERVER_PORT'));
  const configService = app.get(ConfigService);
  const port = configService.get('http.port');
  console.log(port);
  
  console.log(configService.get('SERVER_PORT'));