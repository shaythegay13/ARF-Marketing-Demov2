import React from 'react';
import { Activity, Clock, TrendingUp, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
export function SecurityPerformanceSection() {
  return <section id="metrics" className="py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Real-Time Reliability Metrics
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Live system health and performance indicators powered by ARF's
            multi-agent monitoring.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <Activity className="h-8 w-8 text-green-400" />
              <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                Healthy
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">99.97%</div>
            <div className="text-sm text-slate-400">System Uptime</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span>+0.12% from last month</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                Optimal
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">2.3 min</div>
            <div className="text-sm text-slate-400">Mean Time to Resolve</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <TrendingUp className="h-3 w-3 text-blue-400" />
              <span>-45% faster than baseline</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <Zap className="h-8 w-8 text-amber-400" />
              <span className="text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded-full">
                Active
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">127</div>
            <div className="text-sm text-slate-400">Incidents Resolved</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="h-3 w-3 text-amber-400" />
              <span>Last 30 days</span>
            </div>
          </div>

          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-teal-400" />
              <span className="text-xs font-medium text-teal-400 bg-teal-400/10 px-2 py-1 rounded-full">
                Low
              </span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">3</div>
            <div className="text-sm text-slate-400">Active Alerts</div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <span>2 low priority, 1 medium</span>
            </div>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Agent Performance */}
          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <h3 className="text-lg font-bold text-white mb-6">
              Agent Performance
            </h3>
            <div className="space-y-4">
              {[{
              name: 'Detective Agent',
              accuracy: 94,
              latency: '12ms',
              color: 'blue'
            }, {
              name: 'Diagnostic Agent',
              accuracy: 91,
              latency: '18ms',
              color: 'teal'
            }, {
              name: 'Predictive Agent',
              accuracy: 87,
              latency: '24ms',
              color: 'indigo'
            }, {
              name: 'Policy Engine',
              accuracy: 96,
              latency: '8ms',
              color: 'amber'
            }].map(agent => <div key={agent.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-300">
                      {agent.name}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-500">
                        {agent.latency}
                      </span>
                      <span className={`text-sm font-bold text-${agent.color}-400`}>
                        {agent.accuracy}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full bg-${agent.color}-500 rounded-full transition-all duration-500`} style={{
                  width: `${agent.accuracy}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>

          {/* System Health */}
          <div className="rounded-xl bg-slate-800 border border-slate-700 p-6">
            <h3 className="text-lg font-bold text-white mb-6">System Health</h3>
            <div className="space-y-4">
              {[{
              service: 'API Gateway',
              status: 'Operational',
              uptime: '99.99%',
              statusColor: 'green'
            }, {
              service: 'Payment Service',
              status: 'Operational',
              uptime: '99.95%',
              statusColor: 'green'
            }, {
              service: 'Database Cluster',
              status: 'Operational',
              uptime: '99.98%',
              statusColor: 'green'
            }, {
              service: 'FAISS Vector Store',
              status: 'Operational',
              uptime: '100%',
              statusColor: 'green'
            }, {
              service: 'Event Bus',
              status: 'Degraded',
              uptime: '99.87%',
              statusColor: 'yellow'
            }].map(item => <div key={item.service} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/50">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full bg-${item.statusColor}-500 ${item.statusColor === 'green' ? '' : 'animate-pulse'}`}></div>
                    <span className="text-sm font-medium text-slate-200">
                      {item.service}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-medium ${item.statusColor === 'green' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {item.status}
                    </span>
                    <span className="text-xs text-slate-500">
                      {item.uptime}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Recovery Stats */}
        <div className="mt-8 rounded-xl bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-500/20 p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Autonomous Recovery Impact
            </h3>
            <p className="text-slate-400">
              Cost savings and efficiency gains from ARF automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$847K</div>
              <div className="text-sm text-slate-400">Revenue Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">
                156 hrs
              </div>
              <div className="text-sm text-slate-400">
                Engineering Time Saved
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">94%</div>
              <div className="text-sm text-slate-400">
                Incidents Auto-Resolved
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}