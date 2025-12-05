import React, { useEffect, useState } from 'react';
import { Play, RotateCcw, Activity, Terminal, BarChart3, AlertTriangle, CheckCircle, FileText, Scale, DollarSign, Search } from 'lucide-react';
export function DemoSection() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'reasoning' | 'metrics' | 'reports'>('reasoning');
  const [policyStatus, setPolicyStatus] = useState<{
    rule: string;
    matched: boolean;
  }[]>([]);
  const [businessImpact, setBusinessImpact] = useState<string>('');
  const startSimulation = () => {
    setIsSimulating(true);
    setLogs([]);
    setPolicyStatus([]);
    setBusinessImpact('');
    const sequence = [{
      text: '⚠️ Traffic spike detected on API Gateway (Region: us-east-1)',
      delay: 500
    }, {
      text: '🔍 Detective Agent: Analyzing request patterns...',
      delay: 1200
    }, {
      text: '📊 Diagnostic Agent: Correlating with DB latency metrics...',
      delay: 2000
    }, {
      text: '💡 Root Cause: Connection pool exhaustion in Payment Service',
      delay: 3000
    }, {
      text: '🔮 Predictive Agent: 85% probability of cascading failure in 2 mins',
      delay: 3800
    }, {
      text: '⚖️ Policy Engine: Evaluating 5 policy rules...',
      delay: 4200,
      action: () => {
        setPolicyStatus([{
          rule: 'High Latency Restart',
          matched: true
        }, {
          rule: 'Cascading Failures',
          matched: true
        }, {
          rule: 'Resource Exhaustion',
          matched: true
        }, {
          rule: 'Moderate Performance',
          matched: false
        }, {
          rule: 'Critical Failures',
          matched: false
        }]);
      }
    }, {
      text: '💰 Business Impact Calculator: Revenue at risk: $12,400/hour',
      delay: 4800,
      action: () => setBusinessImpact('$12,400/hour')
    }, {
      text: '🔎 Anomaly Detector: Pattern matches 3 historical incidents',
      delay: 5200
    }, {
      text: '🧠 FAISS Vector Search: Retrieved similar incident from 2024-01-15',
      delay: 5600
    }, {
      text: '✅ Policy Match: High Latency + Resource Exhaustion → Scale & Flush',
      delay: 6000
    }, {
      text: '⚖️ Consensus: Scale up replicas + Flush idle connections',
      delay: 6400
    }, {
      text: '🚀 Orchestrator: Executing recovery playbook...',
      delay: 6800
    }, {
      text: '✅ Recovery Successful. Latency normalized. Revenue protected.',
      delay: 7400
    }];
    sequence.forEach(({
      text,
      delay,
      action
    }) => {
      setTimeout(() => {
        setLogs(prev => [...prev, text]);
        if (action) action();
        if (text.includes('Revenue protected')) setIsSimulating(false);
      }, delay);
    });
  };
  return <section id="demo" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Run a Reliability Simulation
          </h2>
          <p className="mt-4 text-slate-600">
            See ARF in action. Trigger a simulated incident and watch the Policy
            Engine evaluate rules and coordinate recovery.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          {/* Toolbar */}
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <span className="text-sm font-medium text-slate-600">
                arf-dashboard-v1.0
              </span>
            </div>
            <div className="flex gap-2">
              <button onClick={startSimulation} disabled={isSimulating} className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-50 transition-colors">
                <Play className="h-4 w-4" />
                {isSimulating ? 'Simulating...' : 'Start Simulation'}
              </button>
              <button onClick={() => {
              setLogs([]);
              setPolicyStatus([]);
              setBusinessImpact('');
            }} className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Sidebar / Inputs & Policy Status */}
            <div className="border-r border-slate-200 bg-slate-50 p-4">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Incident Triggers
              </h3>
              <div className="space-y-2 mb-6">
                {['Traffic Spike', 'Database Latency', 'Timeout Storm', 'Memory Leak'].map(trigger => <button key={trigger} onClick={startSimulation} disabled={isSimulating} className="flex w-full items-center justify-between rounded-lg border border-slate-200 bg-white p-3 text-left text-sm font-medium text-slate-700 shadow-sm hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-colors disabled:opacity-50">
                    {trigger}
                    <AlertTriangle className="h-4 w-4 text-slate-400" />
                  </button>)}
              </div>

              {/* Policy Engine Status */}
              <div className="mb-6">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Scale className="h-3 w-3" />
                  Policy Engine Status
                </h3>
                {policyStatus.length > 0 ? <div className="space-y-2">
                    {policyStatus.map((policy, i) => <div key={i} className={`flex items-center justify-between rounded-lg border p-2 text-xs transition-all ${policy.matched ? 'border-amber-200 bg-amber-50 text-amber-900' : 'border-slate-200 bg-white text-slate-500'}`}>
                        <span className="font-medium">{policy.rule}</span>
                        {policy.matched ? <CheckCircle className="h-3 w-3 text-amber-600" /> : <div className="h-3 w-3 rounded-full border border-slate-300"></div>}
                      </div>)}
                  </div> : <div className="rounded-lg border border-slate-200 bg-white p-3 text-center text-xs text-slate-400">
                    Waiting for evaluation...
                  </div>}
              </div>

              {/* Business Impact */}
              {businessImpact && <div className="mb-6">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                    <DollarSign className="h-3 w-3" />
                    Business Impact
                  </h3>
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                    <div className="text-lg font-bold text-red-900">
                      {businessImpact}
                    </div>
                    <div className="text-xs text-red-700">Revenue at Risk</div>
                  </div>
                </div>}

              {/* System Status */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  System Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">API Gateway</span>
                    <span className="flex items-center gap-1.5 text-green-600 font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>{' '}
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Payment Service</span>
                    <span className={`flex items-center gap-1.5 font-medium ${isSimulating ? 'text-yellow-600' : 'text-green-600'}`}>
                      <div className={`h-1.5 w-1.5 rounded-full ${isSimulating ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
                      {isSimulating ? 'Degraded' : 'Healthy'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Database</span>
                    <span className="flex items-center gap-1.5 text-green-600 font-medium">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>{' '}
                      Healthy
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Output Area */}
            <div className="col-span-2 flex flex-col bg-slate-900 text-slate-300">
              {/* Tabs */}
              <div className="flex border-b border-slate-800">
                {[{
                id: 'reasoning',
                icon: Terminal,
                label: 'Agent Reasoning'
              }, {
                id: 'metrics',
                icon: BarChart3,
                label: 'Metrics'
              }, {
                id: 'reports',
                icon: FileText,
                label: 'Reports'
              }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? 'border-b-2 border-blue-500 bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'}`}>
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>)}
              </div>

              {/* Content */}
              <div className="flex-1 p-4 min-h-[400px] font-mono text-sm overflow-y-auto">
                {activeTab === 'reasoning' && <div className="space-y-2">
                    {logs.length === 0 ? <div className="flex h-full items-center justify-center text-slate-600 pt-20">
                        Waiting for simulation to start...
                      </div> : logs.map((log, i) => <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                          <span className="mr-2 text-slate-600">
                            [{new Date().toLocaleTimeString()}]
                          </span>
                          {log}
                        </div>)}
                    {isSimulating && <div className="animate-pulse text-blue-400">_</div>}
                  </div>}

                {activeTab === 'metrics' && <div className="flex h-full items-center justify-center text-slate-500">
                    <div className="text-center">
                      <BarChart3 className="mx-auto h-12 w-12 opacity-20 mb-4" />
                      <p>Live metrics visualization would appear here.</p>
                    </div>
                  </div>}

                {activeTab === 'reports' && <div className="flex h-full items-center justify-center text-slate-500">
                    <div className="text-center">
                      <CheckCircle className="mx-auto h-12 w-12 opacity-20 mb-4" />
                      <p>Post-incident reports generated automatically.</p>
                    </div>
                  </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}