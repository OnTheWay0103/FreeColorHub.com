export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center mb-8">
          FreeColorHub.com
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          基于AI技术的免费涂色资源平台
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">AI 智能生成</h3>
              <p className="card-description">
                基于用户描述自动生成个性化涂色页
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">免费可打印</h3>
              <p className="card-description">
                提供大量免费涂色资源，支持 PDF 下载
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">在线涂色</h3>
              <p className="card-description">
                提供便捷的在线涂色工具
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
