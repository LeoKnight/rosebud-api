# rosebud-api

## 开发环境搭建
mysql <= 5.7
推荐使用docker
```shell
sudo docker run --name my-sql -v ~/db/mysql:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 -d mysql:5.7
```
## doc

<https://typeorm.io/#/entities>
<https://docs.nestjs.com/>

### 新建module

class (alias: cl)
controller (alias: co)
decorator (alias: d)
filter (alias: f)
gateway (alias: ga)
guard (alias: gu)
interface (alias: -)
interceptor (alias: in)
library (alias: lib)
middleware (alias: mi)
module (alias: mo)
pipe (alias: pi)
provider (alias: pr)
resolver (alias: r)
service (alias: s)

```js
nest g mo demo
```
