# FreeColorHub.com

一个基于 AI 技术的免费涂色资源平台，致力于为用户提供高质量的涂色页面和在线涂色工具。

## 🎯 项目特色

- **免费可打印**：提供大量免费涂色资源，支持 PDF 下载
- **AI 智能生成**：基于用户描述自动生成个性化涂色页
- **全年龄段覆盖**：从儿童到成人的完整用户群体
- **在线涂色体验**：提供便捷的在线涂色工具

## 🏗️ 技术栈

### 前端

- **框架**：Next.js 14 + TypeScript
- **样式**：Tailwind CSS + Framer Motion
- **状态管理**：Zustand
- **画布**：Fabric.js + Canvas API

### 后端

- **运行时**：Node.js 18+
- **框架**：Express.js
- **数据库**：PostgreSQL + Redis
- **AI 服务**：Stable Diffusion API / OpenAI DALL-E

## 🚀 快速开始

### 环境要求

- Node.js 18+
- PostgreSQL 14+
- Redis 6+

### 安装依赖

```bash
# 安装前端依赖
cd frontend
npm install

# 安装后端依赖
cd ../backend
npm install
```

### 环境配置

1. 复制环境变量文件：

```bash
# 前端
cp frontend/.env.example frontend/.env.local

# 后端
cp backend/.env.example backend/.env
```

2. 配置数据库连接和 AI 服务密钥

### 启动开发服务器

```bash
# 启动后端服务
cd backend
npm run dev

# 启动前端服务（新终端）
cd frontend
npm run dev
```

访问 http://localhost:3000 查看前端应用

## 📁 项目结构

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

## 📚 文档

- [MVP 开发计划](./docs/MVP-Development-Plan.md)
- [项目结构设计](./project-structure.md)
- [API 文档](./docs/api.md)
- [部署指南](./docs/deployment.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

_FreeColorHub.com - 让涂色创作更简单_
