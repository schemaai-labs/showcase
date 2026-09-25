# SchemaAI Showcase

**简体中文** ｜ [English](./README.md)

---

SchemaAI 是一个 **schema-driven 低代码引擎**——所有组件与平台能力都用 schema 表达。本仓是它的**能力展示站**，剥去编辑器、登录与应用管理等产品形态，只保留最核心的渲染链路：**Lang DSL → 编译 → 渲染**。

**在线演示** → https://schemaai-labs.github.io/

画廊里的每个模板都是**真跑起来的应用**，不是录屏也不是截图：动效、导航、浮层、拖拽、事件代码沙箱全部真实执行。

> **关于语言**：本仓面向国际访客，因此标签与界面说明以英文为准（见 [英文 README](./README.md)）。47 个模板的正文正在按批次翻译，尚未翻译的模板在画廊里带 `中文` 角标。

## 展示什么

47 个模板，四个主题：

| 主题 | 内容 |
| --- | --- |
| 营销 / 增长 | 落地页、大促专题、投放物料、作品集…… |
| 产品 / 应用 | 数据看板、后台骨架、设置页、看板应用…… |
| 内容 / 品牌 | 品牌叙事、编辑排版、摄影集…… |
| 交互 / 动效 | 滚动叙事、翻转卡片、看板拖拽…… |

其中 19 个是 `sty-` 风格系列（包豪斯、孟菲斯、奢华极简、时尚大片、低多边形 3D……），在画廊里置顶。

**能力实证**（每条都有真浏览器断言覆盖）：

- **动效** —— 入场编排、数字滚动、视差、滚动进度指示、打字机、磁吸与光标跟随、3D 模型查看
- **交互** —— 多页 `nav.to`、页内 `nav.scroll` 定位与回顶、浮层（父子页传参 + 跨页写回）、看板跨列拖拽
- **数据** —— 查询执行器与 `{{}}` 绑定（本仓用本地 mock 传输；真实传输在后端侧）
- **事件代码沙箱** —— 模板里的事件是**真实执行的代码**，带命名空间白名单与超时

## 跑起来

```bash
pnpm install
pnpm dev          # → http://localhost:3010
pnpm build        # 纯静态产物（dist/），零后端
pnpm test:e2e     # 真浏览器能力实证（需先起 dev）
```

要求 Node 22+、pnpm 10+。首次跑 E2E 需要下载浏览器（playwright 已**锁定版本**，浏览器与版本一一对应）：

```bash
pnpm exec playwright install chromium
```

## 引擎在哪里

本仓只有展示站外壳。引擎是 npm 上的 `@schemaai/*` 包：

| 包 | 作用 | 分发形态 |
| --- | --- | --- |
| `@schemaai/schema` | 契约层：类型、能力注册表、校验 | Apache-2.0，**含源码** |
| `@schemaai/registry` | 契约层：组件描述符、知识单元 | Apache-2.0，**含源码** |
| `@schemaai/lang-compiler` | Lang DSL 编译器（parse / compile / serialize / import） | Apache-2.0，**含源码** |
| `@schemaai/runtime-core` | 框架无关运行时：绑定解析、事件、查询执行 | 专有（编译产物） |
| `@schemaai/motion` | 动效执行器：声明式 spec + 触发控制器 | 专有（编译产物） |
| `@schemaai/renderer-react` | React 渲染器与组件实现 | 专有（编译产物） |
| `@schemaai/runtime-host` | 宿主执行层：动作分派、代码沙箱、浮层生命周期 | 专有（编译产物） |

协议层三包以 Apache-2.0 开源并提供 TypeScript 源码；引擎四包以编译产物分发，许可条款见各包 `LICENSE`（允许作为依赖使用，禁止反向工程与再分发）。

## 目录

```text
src/
  app/            路由（path 路由；hash 归 PreviewRuntimeProvider 做模板内多页）
  pages/          GalleryPage（画廊）/ PreviewPage（预览）
  runtime/        展示站宿主：store、节点渲染器、能力适配器、浮层层、查询执行器
  exhibits/       展品目录 + Lang DSL 懒加载
exhibits/         模板资产（md + 缩略图）与清单 —— **上游生成物**
assets-src/       演示素材（图片 / 视频 / glb），构建期复制进 public/
scripts/          构建期同步（exhibits → generated/ + public/）
tests/            真浏览器能力实证
```

`src/generated/` 与 `public/exhibits/` 是构建期派生数据（未纳入版本控制），`pnpm dev` / `pnpm build` 会自动重建。

## 模板从哪里来

`exhibits/` 是**上游生成物**——由 SchemaAI monorepo 从模板真源同步而来，本仓不自持模板。想加/改模板请到上游改；本仓内的 `exhibits/` 请勿手改。

## 协议

[Apache-2.0](./LICENSE) —— 覆盖本仓源码与 `exhibits/` 内的模板资产。
`@schemaai/*` 引擎包另有各自的许可条款，见上表。
