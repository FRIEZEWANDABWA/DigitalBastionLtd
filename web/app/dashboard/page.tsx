export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">🎯 Security Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-slate-300">Active Users</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">5</div>
            <div className="text-slate-300">Monitored Devices</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
            <div className="text-slate-300">Open Incidents</div>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-lg text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">15%</div>
            <div className="text-slate-300">Risk Score</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Recent Incidents</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded">
                <span>Suspicious login attempt</span>
                <span className="text-yellow-400">Medium</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-700/50 rounded">
                <span>Malware detected</span>
                <span className="text-red-400">High</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">System Status</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Firewall</span>
                <span className="text-green-400">✅ Active</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Antivirus</span>
                <span className="text-green-400">✅ Updated</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Backup</span>
                <span className="text-yellow-400">⚠️ Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}