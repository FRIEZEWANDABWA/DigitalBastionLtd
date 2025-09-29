export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🛡️ Digital Bastion
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Advanced Cybersecurity Platform
          </p>
          <div className="inline-block bg-green-600 text-green-100 px-6 py-2 rounded-full font-semibold">
            ✅ System Operational
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-blue-400 text-lg font-semibold mb-2">🔐 Cybersecurity</h3>
            <p className="text-slate-300">Advanced threat detection and incident response</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-blue-400 text-lg font-semibold mb-2">💻 IT Management</h3>
            <p className="text-slate-300">Comprehensive IT infrastructure monitoring</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-blue-400 text-lg font-semibold mb-2">🌐 Networking</h3>
            <p className="text-slate-300">Network security and performance optimization</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-blue-400 text-lg font-semibold mb-2">🔑 Access Control</h3>
            <p className="text-slate-300">Role-based access control and authentication</p>
          </div>
        </div>

        <div className="text-center text-slate-400">
          <p><strong>Digital Bastion Ltd</strong> - Advanced Cybersecurity Solutions</p>
          <p>Built with Jac Language + Python FastAPI</p>
        </div>
      </div>
    </div>
  )
}