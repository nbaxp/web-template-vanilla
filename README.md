# Vanilla ESM

1. 使用 LiveServer 作为开发服务器
1. 不安装任何项目依赖,开发依赖仅用于提供格式化和代码检测
1. vite 不用于开发服务器,仅用于可选的打包

---

## .npmrc

1. 使用 npm 时启用 package.json 中 engines 中的版本限制:engine-strict=true
1. 自定义资源库registry=<https://registry.npmmirror.com>
1. strict-peer-dependencies=false

---

## .nvmrc

指定 nvm 环境下的默认版本

---

## .editconfig

通用代码风格配置

---

## package.json

### devDependencies

1. vite: 打包工具
1. prettier: 格式化
1. sass: sass、scss 支持
1. less: less 支持
1. eslint:
    1. eslint-config-airbnb-base 依赖于 eslint 和 eslint-plugin-import
    1. eslint-config-prettier 用于关闭 eslint 和 prettier 冲突的规则
    1. eslint-plugin-prettier 用于将 prettier 的规则作为 eslint 来运行
1. stylelint:
    1. stylelint-config-standard 继承自 stylelint-config-recommended 的规则集合
    1. stylelint-config-prettier 用于关闭和 prettier 冲突的规则
    1. stylelint-order css 属性排序
    1. stylelint-scss scss 支持
    1. stylelint-less less 支持
1. husky: git hooks 工具,初始化时先执行 `husky install && husky add .husky/pre-commit 'npm run pre-commit'`

husky配置

```sh
npm pkg set scripts.prepare="husky install" # > package.json scripts
npm run prepare
npx husky add .husky/pre-commit "npm run lint" # > .husky pre-commit
```

### scripts

```json
{
  //...
  scripts:
  {
    "dev": "vite", // 调试
    "build": "vite build", // 构建
    "preview": "vite preview", // 预览
    "eslint": "eslint --ext .js,.ts ./ --max-warnings 0 --fix", // eslint 修复
    "stylelint": "stylelint --fix src/**/*.{html,css,sass,less}", // stylelint 修复
    "prepare": "husky install", // 安装并配置 husky 使其在 git 提交前执行 pre-commit
    "pre-commit": "pretty-quick --staged && npm run eslint && npm run stylelint" // git 提交前格式化并修复代码
  }
  //...
}
```
