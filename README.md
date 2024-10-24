# React 项目模板

## 技术栈

- React v18
- TypeScript v5
- Vite v5
- Tailwind CSS v3
- ESLint v9
- Ant Design v5

## 创建项目

1. 使用 `degit` 克隆此仓库：

```bash
npx degit newarea0/react-template <project-name>
cd <project-name>
```

2. 安装依赖：

```bash
pnpm install
```

3. 启动开发服务器：

```bash
pnpm run dev
```

4. 构建项目：

```bash
pnpm run build
```

## 目录结构

```
.
├── public/                 # 静态资源
├── src/                    # 源代码
│   ├── assets/             # 资源文件
│   ├── components/         # 组件
│   ├── pages/              # 页面
│   ├── App.tsx             # 入口组件
│   ├── index.tsx           # 入口文件
│   └── ...                 # 其他文件
├── .vscode/                # VSCode 配置
├── package.json            # 项目配置文件
├── pnpm-lock.yaml          # 依赖锁定文件
└── ...                     # 其他文件
```

## 如何贡献

1. Fork 此仓库
2. 创建你的分支 (`git checkout -b feature/fooBar`)
3. 提交你的修改 (`git commit -am 'Add some fooBar'`)
4. 推送到分支 (`git push origin feature/fooBar`)
5. 创建一个新的 Pull Request
