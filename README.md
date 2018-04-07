# x-react-scripts

### ⚠️ 声明:
> 这不是 ```create-react-app``` 的 fork. 仅仅是fork  ```react-scripts``` 来扩展一些特性.

### 💡扩展特性如下:

#### 语法语言

- [Decorators](https://github.com/wycats/javascript-decorators)
- [Do expressions](https://github.com/tc39/proposal-do-expressions)
- Less
- CSS modules

#### 框架与库的集成

- [antd 3.x](https://ant.design)
- [ant-design-pro 1.2.x](https://pro.ant.design/components)
- [axios](https://github.com/axios/axios)
- [react-router-dom](https://reacttraining.com/react-router/)

#### Domain Style的项目结构

当项目初始化完毕后，有如下结构:

```
my-app/
  README.md
  node_modules/
  package.json
  mockup/
    index.js
  public/
    index.html
    favicon.ico
  src/
    biz/
      biz1/
      biz2/
    common/
    components/
    services/
    index.less
    index.js
    Routes.js
```

该项目结构在[CRA Folder Structure](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure)
基础上增加以下特定的文件以及目录约定：

- mockup: 放置mock数据和json-server的配置文件
- src/biz: 放置业务单元模块，在业务模块下可以递归的继续切分子业务模块，可以将src目录看成根业务模块
- src/common: 放置通用的功能模块，如工具，封装好的http请求模块等
- src/components：放置归属于全局（应用）级别的组件，如导航栏，消息通知等
- src/services：放置全局服务，如系统信息等接口请求，若服务数量少，可以直接使用单文件services.js
- src/Routes.js：放置应用路由配置，业务子路由应放置在业务模块目录下

##### 为何是Domain Style的项目结构？

1. 可伸缩性强：即能适应中小规模项目，又能适应大规模项目，当项目进一步演进为平台化级应用时，Domain Style能够很好的支持业务组件化

2. 可阅读性强：强制让开发人员在开发阶段想清楚某个模块的业务归属权，当阅读项目代码时，能够很好的从项目结构了解到宏观的业务功能

#### Mock 服务支持

该项目用了 **[json-server](https://github.com/typicode/json-server)** 来支持mock，json-server的主要优点如下：

- 能够支持restful的CRUD Mock，使得前端可以在mock阶段进行CRUD的校验，减少在前后端联调阶段的bug率

- 对于非restful的系统，可以灵活简单的通过自定义路由和中间件支持适配

项目创建后可以使用 ```npm run mock``` 来启用本地mock server，设置MOCK_PORT来调整服务端口，默认为5000，
同时在packag.json增加proxy配置：

```
"proxy": {
    "/mock/api": {
      "target": "http://127.0.0.1:5000"
    }
}
```
可以根据自己的项目需要灵活调整。

### ❔如何使用
```create-react-app my-app --scripts-version x-react-scripts```

### 未来计划

1. 集成应用架构解决方案，如redux，mobx

2. 集成HTTP2.0 + HTTP1.1的混合构建方案
