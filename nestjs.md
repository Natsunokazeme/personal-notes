1.controllers
 用来处理收到的HTTP请求，将它们分发给对应的service，前面的route决定哪一个controller处理当前请求
 nest g resource [name] 生成 a CRUD controller
 注：@xxx()就是一个装饰器
 例：@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
@Req() decorator 是用来获取整个request objet
@Request(), @Req()	req
@Response(), @Res()*	res
@Next()	next
@Session()	req.session
@Param(key?: string)	req.params / req.params[key]
@Body(key?: string)	req.body / req.body[key]
@Query(key?: string)	req.query / req.query[key]
@Headers(name?: string)	req.headers / req.headers[name]
@Ip()	req.ip
@HostParam()	req.hosts

route 参数支持正则

@HttpCode(204)
默认响应体status是200(post 201除外)，可以通过@HttpCode(204)来更改status

@Header('Cache-Control', 'none')
通过这个decorator可custom response header

@Redirect(url, status=302)
通过这个decorator重定向，如果想动态配置url可在该decorator之后return{
  "url": string,
  "statusCode": number
}，这会override decorator的参数


typeORM是一个用于处理数据库的ORM库，支持mysql, postgres, mssql, sqlite, mongodb, cordova, react-native, nativescript, expo, and web browser。
推荐在nestjs中使用typeorm，因为typeorm支持nestjs的dependency injection，而typeorm的repository是用来处理数据库的，所以在nestjs中使用typeorm的repository是最好的选择。
typeorm里 不能直接对已存在的表新增列，必须通过迁移。

entity中的装饰器
@CreateDateColumn和@UpdateDateColumn都会自动更新时间，但是@CreateDateColumn只会在创建时更新，而@UpdateDateColumn会在每次更新时更新
