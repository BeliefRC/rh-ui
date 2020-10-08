# 使用Typescript搭建的react组件库

[在线文档](https://beliefrc.github.io/rh-ui/?path=/story/introduction--page).

## 一.项目运行

```
git clone https://github.com/BeliefRC/rh-ui.git  //clone项目
npm i  //安装依赖
npm run  storybook  //项目运行
npm run build //构建组件库
npm run build-storybook //构建组件库文档静态站点
```
## 二.使用的工具
1. 用了create-react-app 官方脚手架工具搭建了项目，并且使用TS
```
 npx create-react-app my-app --typescript
 # 或者
 yarn create react-app my-app --typescript
```
[中文文档](https://www.html.cn/create-react-app/docs/adding-typescript/ "中文文档")
[英文文档](https://create-react-app.dev/docs/adding-typescript "英文文档")

2. 用 React Testing Library 和 Jest 完成单元测试
[文档地址](https://testing-library.com/docs/react-testing-library/migrate-from-enzyme#what-is-react-testing-library "文档地址")

3. 使用Storybook为组件库自动生成文档
[文档地址](https://storybook.js.org/docs/react/get-started/install "文档地址")

4. 使用 Travis CI 提供的持续集成服务，构建与部署文档到ghPage
[文档地址](https://docs.travis-ci.com/ "文档地址")

5. 使用  husky、lint-staged、prettier、eslint 规范代码格式


