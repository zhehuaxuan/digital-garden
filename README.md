# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>


Quartz 已成功构建！✅ 

## 当前状态

- **本地预览**: `cd /e/digital-garden && node ./quartz/bootstrap-cli.mjs build --serve`
- **静态文件输出**: `/e/digital-garden/public/`

## 下一步：部署到 Vercel

### 1. 推送到 GitHub

```bash
cd /e/digital-garden

# 初始化 git（如果需要）
git init
git add .
git commit -m "Initial Quartz setup"

# 添加远程仓库（需要先在 GitHub 创建仓库）
git remote add origin https://github.com/你的用户名/digital-garden.git
git branch -M main
git push -u origin main
```

### 2. 部署到 Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 **"Add New..."** → **"Project"**
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测为 **Next.js** 项目
5. **Build Command** 留空或填 `npm run quartz build`
6. **Output Directory** 填 `public`
7. 点击 **Deploy**

### 3. 部署后配置（可选）

修改 `quartz.config.yaml` 中的 `baseUrl` 为你的 Vercel 域名：

```yaml
configuration:
  baseUrl: your-site.vercel.app
```

---

需要我帮你初始化 Git 仓库吗？