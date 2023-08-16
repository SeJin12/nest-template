<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="50" alt="Nest Logo" /></a>
</p>

## NestJS
`Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well!`
- Nest(NestJS)는 효율적이고 확장 가능한 Node.js 서버 (백엔드) 애플리케이션을 구축하기 위한 프레임워크
- TypeScript, JavaScript 지원
- HTTP 프레임워크를 활용하여 구성
  - Express
  - Fastify: 최대 효율성과 속도를 제공하는 데 중점을 둔 고성능 및 낮은 오버헤드 프레임워크
- 프로그래밍 요소 결합
  - OOP (Object Oriented Programming) : 객체 지향 프로그래밍
  - FP (Functional Programming) : 함수형 프로그래밍
  - FRP (Functional Reactive Programming) : 함수 반응형 프로그래밍, 비동기 데이터 스트림 이용
- cli (Command-Line Interface) 지원
  - user controller 생성: `nest generate|g controller|co user`

### Installation

```bash
# Node.js (version >= 16)
$ npm install -g @nestjs/cli
$ nest new <project_name>
$ npm install
```

### Dependency Module

```bash
$ npm i class-transformer
$ npm i class-validator
$ npm i mapped-types
$ npm i @nestjs/config
$ npm i js-yaml
$ npm i cpx
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

jest는 자바스크립트를 쉽게 테스팅하는 npm 패키지 
<br>
`*.spec.ts 파일`은 unit testing하기 위한 파일 
<br>
`unit test` 함수와 같은 하나의 유닛만 테스트 
<br>
`e2e (End to End)` 전체 시스템을 테스트

## list
- absolute path
- logging
- middleware 
- config
- exception filter
- pipe
- cors

 ## TodoList
 1. Absolute Path (OK)
 2. Logging (OK)
 3. Database
 4. @nestjs/config (OK)
    1. process.env.SERVER_PORT
    2. const configService = app.get(ConfigService);
        1. configService.get('SERVER_PORT') # .env
        2. configService.get('http.port'); # *.yaml
 5. testing

  
  
        yaml은 컴파일시에 dist 폴더로 copy 되지 않음
        ERROR [ExceptionHandler] ENOENT: no such file or directory, open '/Users/sejin/Documents/nest_template/dist/config/config.yaml'
        cpx 모듈 설치
        "copy-files": "cpx \"src/config/*.yaml\" dist/config/",
         https://codegear.tistory.com/82
        nest-cli.json - deleteOutDir : false
 
 

### 참고 링크
- [Code Gear TISTORY](https://codegear.tistory.com/53)
- [Nomadcoders(NestJS)](https://nomadcoders.co/nestjs-fundamentals)
  