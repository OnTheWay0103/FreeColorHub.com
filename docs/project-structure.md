# FreeColorHub.com 项目结构设计

## 📁 整体项目结构

```
FreeColorHub.com/
├── frontend/                 # 前端项目 (Next.js 14)
├── backend/                  # 后端项目 (Node.js + Express)
├── shared/                   # 共享类型和工具
├── docs/                     # 项目文档
├── scripts/                  # 部署和构建脚本
├── docker/                   # Docker 配置文件
└── README.md                 # 项目说明
```

## 🎨 前端项目结构 (frontend/)

```
frontend/
├── public/                   # 静态资源
│   ├── images/              # 图片资源
│   ├── icons/               # 图标文件
│   ├── fonts/               # 字体文件
│   └── favicon.ico          # 网站图标
│
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── (auth)/          # 认证相关页面（后期）
│   │   ├── (dashboard)/     # 用户中心页面（后期）
│   │   ├── api/             # API 路由
│   │   ├── coloring/        # 在线涂色工具
│   │   ├── generate/        # AI 生成页面
│   │   ├── pages/           # 涂色页展示
│   │   ├── search/          # 搜索页面
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 首页
│   │
│   ├── components/          # 可复用组件
│   │   ├── ui/              # 基础UI组件
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/          # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Sidebar.tsx
│   │   │
│   │   ├── coloring/        # 涂色相关组件
│   │   │   ├── Canvas.tsx
│   │   │   ├── ColorPicker.tsx
│   │   │   ├── ToolBar.tsx
│   │   │   └── BrushSettings.tsx
│   │   │
│   │   ├── generate/        # AI生成相关组件
│   │   │   ├── PromptInput.tsx
│   │   │   ├── StyleSelector.tsx
│   │   │   ├── GenerationProgress.tsx
│   │   │   └── ResultPreview.tsx
│   │   │
│   │   ├── pages/           # 涂色页相关组件
│   │   │   ├── PageCard.tsx
│   │   │   ├── PageGrid.tsx
│   │   │   ├── PageDetail.tsx
│   │   │   └── DownloadButton.tsx
│   │   │
│   │   └── common/          # 通用组件
│   │       ├── Loading.tsx
│   │       ├── ErrorBoundary.tsx
│   │       ├── SearchBox.tsx
│   │       └── FilterPanel.tsx
│   │
│   ├── hooks/               # 自定义 Hooks
│   │   ├── useAI.ts         # AI 生成相关
│   │   ├── useColoring.ts   # 涂色工具相关
│   │   ├── useSearch.ts     # 搜索相关
│   │   ├── useDownload.ts   # 下载相关
│   │   └── useLocalStorage.ts
│   │
│   ├── lib/                 # 工具库和配置
│   │   ├── api.ts           # API 客户端
│   │   ├── utils.ts         # 通用工具函数
│   │   ├── constants.ts     # 常量定义
│   │   ├── types.ts         # TypeScript 类型
│   │   └── validations.ts   # 数据验证
│   │
│   ├── store/               # 状态管理 (Zustand)
│   │   ├── aiStore.ts       # AI 生成状态
│   │   ├── coloringStore.ts # 涂色工具状态
│   │   ├── searchStore.ts   # 搜索状态
│   │   └── userStore.ts     # 用户状态（后期）
│   │
│   ├── styles/              # 样式文件
│   │   ├── components.css   # 组件样式
│   │   └── animations.css   # 动画样式
│   │
│   └── types/               # TypeScript 类型定义
│       ├── ai.ts            # AI 相关类型
│       ├── coloring.ts      # 涂色相关类型
│       ├── pages.ts         # 涂色页相关类型
│       └── user.ts          # 用户相关类型
│
├── .env.local               # 本地环境变量
├── .env.example             # 环境变量示例
├── next.config.js           # Next.js 配置
├── tailwind.config.js       # Tailwind CSS 配置
├── tsconfig.json            # TypeScript 配置
├── package.json             # 依赖管理
└── README.md                # 前端项目说明
```

## ⚙️ 后端项目结构 (backend/)

```
backend/
├── src/
│   ├── controllers/         # 控制器层
│   │   ├── aiController.ts  # AI 生成控制器
│   │   ├── pageController.ts # 涂色页控制器
│   │   ├── searchController.ts # 搜索控制器
│   │   ├── userController.ts # 用户控制器（后期）
│   │   └── uploadController.ts # 上传控制器
│   │
│   ├── services/            # 业务逻辑层
│   │   ├── aiService.ts     # AI 生成服务
│   │   ├── pageService.ts   # 涂色页服务
│   │   ├── searchService.ts # 搜索服务
│   │   ├── userService.ts   # 用户服务（后期）
│   │   ├── uploadService.ts # 文件上传服务
│   │   └── emailService.ts  # 邮件服务（后期）
│   │
│   ├── models/              # 数据模型
│   │   ├── Page.ts          # 涂色页模型
│   │   ├── User.ts          # 用户模型（后期）
│   │   ├── Category.ts      # 分类模型
│   │   ├── Tag.ts           # 标签模型
│   │   └── Generation.ts    # 生成记录模型
│   │
│   ├── routes/              # 路由定义
│   │   ├── ai.ts            # AI 相关路由
│   │   ├── pages.ts         # 涂色页相关路由
│   │   ├── search.ts        # 搜索相关路由
│   │   ├── users.ts         # 用户相关路由（后期）
│   │   └── upload.ts        # 上传相关路由
│   │
│   ├── middleware/          # 中间件
│   │   ├── auth.ts          # 认证中间件（后期）
│   │   ├── rateLimit.ts     # 限流中间件
│   │   ├── cors.ts          # CORS 配置
│   │   ├── validation.ts    # 数据验证中间件
│   │   └── errorHandler.ts  # 错误处理中间件
│   │
│   ├── utils/               # 工具函数
│   │   ├── database.ts      # 数据库连接
│   │   ├── redis.ts         # Redis 连接
│   │   ├── logger.ts        # 日志工具
│   │   ├── fileUtils.ts     # 文件处理工具
│   │   ├── imageUtils.ts    # 图片处理工具
│   │   └── aiUtils.ts       # AI 相关工具
│   │
│   ├── config/              # 配置文件
│   │   ├── database.ts      # 数据库配置
│   │   ├── redis.ts         # Redis 配置
│   │   ├── ai.ts            # AI 服务配置
│   │   ├── storage.ts       # 存储配置
│   │   └── app.ts           # 应用配置
│   │
│   ├── types/               # TypeScript 类型
│   │   ├── express.d.ts     # Express 类型扩展
│   │   ├── ai.ts            # AI 相关类型
│   │   ├── page.ts          # 涂色页相关类型
│   │   └── user.ts          # 用户相关类型
│   │
│   └── app.ts               # 应用入口文件
│
├── tests/                   # 测试文件
│   ├── unit/                # 单元测试
│   ├── integration/         # 集成测试
│   └── fixtures/            # 测试数据
│
├── uploads/                 # 上传文件目录
│   ├── pages/               # 涂色页文件
│   ├── generated/           # AI 生成文件
│   └── temp/                # 临时文件
│
├── .env                     # 环境变量
├── .env.example             # 环境变量示例
├── package.json             # 依赖管理
├── tsconfig.json            # TypeScript 配置
├── jest.config.js           # Jest 测试配置
└── README.md                # 后端项目说明
```

## 🗄️ 数据库设计

### PostgreSQL 表结构

```sql
-- 涂色页表
CREATE TABLE pages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    file_path VARCHAR(500) NOT NULL,
    thumbnail_path VARCHAR(500),
    category_id INTEGER REFERENCES categories(id),
    difficulty_level VARCHAR(20) CHECK (difficulty_level IN ('simple', 'medium', 'complex', 'intricate')),
    age_group VARCHAR(20) CHECK (age_group IN ('toddler', 'kids', 'teens', 'adults')),
    download_count INTEGER DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    rating_count INTEGER DEFAULT 0,
    is_ai_generated BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 分类表
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    parent_id INTEGER REFERENCES categories(id),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 标签表
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 涂色页标签关联表
CREATE TABLE page_tags (
    page_id INTEGER REFERENCES pages(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (page_id, tag_id)
);

-- AI 生成记录表
CREATE TABLE generations (
    id SERIAL PRIMARY KEY,
    prompt TEXT NOT NULL,
    style VARCHAR(50),
    size VARCHAR(20),
    file_path VARCHAR(500),
    ip_address INET,
    user_agent TEXT,
    status VARCHAR(20) DEFAULT 'pending',
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 用户表（后期）
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    name VARCHAR(100),
    avatar_url VARCHAR(500),
    subscription_type VARCHAR(20) DEFAULT 'free',
    subscription_expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 用户下载记录表（后期）
CREATE TABLE user_downloads (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    page_id INTEGER REFERENCES pages(id),
    downloaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 用户收藏表（后期）
CREATE TABLE user_favorites (
    user_id INTEGER REFERENCES users(id),
    page_id INTEGER REFERENCES pages(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, page_id)
);
```

### Redis 数据结构

```redis
# AI 生成限制（基于 IP）
SET ai:limit:{ip_address} 0 EX 86400

# 热门涂色页缓存
SET pages:popular {json_data} EX 3600

# 搜索缓存
SET search:{query_hash} {results} EX 1800

# 用户会话（后期）
SET session:{session_id} {user_data} EX 86400

# 下载计数
INCRBY pages:downloads:{page_id} 1
```

## 🚀 部署结构

```
production/
├── docker-compose.yml       # Docker 编排文件
├── nginx/                   # Nginx 配置
│   ├── nginx.conf
│   └── sites-enabled/
│       └── freecolorhub.com
├── ssl/                     # SSL 证书
├── logs/                    # 日志文件
└── backups/                 # 数据库备份
```

## 📦 包管理结构

### 前端依赖 (frontend/package.json)

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.16.0",
    "zustand": "^4.4.0",
    "fabric": "^5.3.0",
    "axios": "^1.5.0",
    "react-hook-form": "^7.45.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "jest": "^29.0.0",
    "@testing-library/react": "^13.0.0"
  }
}
```

### 后端依赖 (backend/package.json)

```json
{
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "compression": "^1.7.4",
    "pg": "^8.11.0",
    "redis": "^4.6.0",
    "multer": "^1.4.5",
    "sharp": "^0.32.0",
    "joi": "^17.9.0",
    "winston": "^3.10.0",
    "rate-limiter-flexible": "^3.0.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "jest": "^29.0.0",
    "supertest": "^6.3.0",
    "nodemon": "^3.0.0"
  }
}
```

## 🔧 开发工具配置

### ESLint 配置

```json
{
  "extends": ["next/core-web-vitals", "@typescript-eslint/recommended"],
  "rules": {
    "prefer-const": "error",
    "no-unused-vars": "warn"
  }
}
```

### Prettier 配置

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Git 忽略文件

```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Production
.next/
out/
build/
dist/

# Environment variables
.env
.env.local
.env.production

# Logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed

# Coverage directory used by tools like istanbul
coverage/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```
