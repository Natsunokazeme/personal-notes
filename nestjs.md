1.controllers
用来处理收到的 HTTP 请求，将它们分发给对应的 service，前面的 route 决定哪一个 controller 处理当前请求
nest g resource [name] 生成 a CRUD controller
注：@xxx()就是一个装饰器
例：@Controller('cats')
export class CatsController {
@Get()
findAll(@Req() request: Request): string {
return 'This action returns all cats';
}
}
@Req() decorator 是用来获取整个 request objet
@Request(), @Req() req
@Response(), @Res()\* res
@Next() next
@Session() req.session
@Param(key?: string) req.params / req.params[key]
@Body(key?: string) req.body / req.body[key]
@Query(key?: string) req.query / req.query[key]
@Headers(name?: string) req.headers / req.headers[name]
@Ip() req.ip
@HostParam() req.hosts

route 参数支持正则

@HttpCode(204)
默认响应体 status 是 200(post 201 除外)，可以通过@HttpCode(204)来更改 status

@Header('Cache-Control', 'none')
通过这个 decorator 可 custom response header

@Redirect(url, status=302)
通过这个 decorator 重定向，如果想动态配置 url 可在该 decorator 之后 return{
"url": string,
"statusCode": number
}，这会 override decorator 的参数

typeORM 是一个用于处理数据库的 ORM 库，支持 mysql, postgres, mssql, sqlite, mongodb, cordova, react-native, nativescript, expo, and web browser。
推荐在 nestjs 中使用 typeorm，因为 typeorm 支持 nestjs 的 dependency injection，而 typeorm 的 repository 是用来处理数据库的，所以在 nestjs 中使用 typeorm 的 repository 是最好的选择。
typeorm 里 不能直接对已存在的表新增列，必须通过迁移。

entity 中的装饰器
@CreateDateColumn 和@UpdateDateColumn 都会自动更新时间，但是@CreateDateColumn 只会在创建时更新，而@UpdateDateColumn 会在每次更新时更新

nest 需要用 @Res() res: Response 来设置响应头,并且需要用 res.send(re) 来发送响应体 re

# _nest 装饰器原理_

```javascript
@Controller("users")
export class UserController {}
//编译后变成
Controller("users")(UserController)
```

装饰器 = 一个在*类定义*时被调用的函数。

NestJS 装饰器的核心原理就是利用 TypeScript 装饰器 + reflect-metadata 对类、方法、参数进行“标记”，Nest 在运行时读取这些标记，生成 IoC 容器、DI、以及路由系统。

reflect-metadata 是一个库，能将元数据存在一个隐藏的 map 中，
当修饰类自身时，propertyKey 为 undefined，挂载到类自身也就是 target，当修饰类的成员时，propertyKey 为成员名，挂载到类的 prototype 也就是 target 上，以防同一个类多个成员都能访问 Metadata，再通过 target[propertyKey]来获取 map。

```javascript
Reflect.defineMetadata(key, value, target, propertyKey?)

@Controller('/user')
class UserController {
  @Get('/list')
  getList() {}

  @Get('/detail')
  getDetail() {}

  @Inject()
  service: UserService;

  getUser(@Body() dto) {}
}

Reflect.defineMetadata('prefix', '/user', UserController);
Reflect.defineMetadata("path", "/list", UserController.prototype, "getList")
Reflect.defineMetadata("path", "/detail", UserController.prototype, "getDetail")
Reflect.defineMetadata('inject', UserService, UserController.prototype, 'service');
Reflect.defineMetadata('body:param', 0, UserController.prototype, 'getUser');

```

key 是被装饰的对象名，可以是方法名，也可以是类名，也可以是参数名,此处为'UserController'
