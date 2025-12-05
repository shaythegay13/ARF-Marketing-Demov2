import React, { useState, Component } from 'react';
import { Search, Stethoscope, TrendingUp, Terminal, Shield, Play, AlertCircle } from 'lucide-react';
export function AgentsSection() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);
  const [agentOutputs, setAgentOutputs] = useState<{
    [key: string]: string[];
  }>({
    detective: [],
    diagnostic: [],
    predictive: []
  });
  const runAgent = (agentType: string) => {
    setActiveAgent(agentType);
    setAgentOutputs(prev => ({
      ...prev,
      [agentType]: []
    }));
    const outputs: {
      [key: string]: string[];
    } = {
      detective: ['🔍 Scanning event streams...', '📊 Detected 3 anomalies in last 60 seconds', '⚠️ High request latency on /api/payments endpoint', '✅ Pattern identified: Connection pool saturation'],
      diagnostic: ['🔬 Analyzing root cause...', '📈 Correlating metrics: CPU 45%, Memory 78%, Connections 95%', '💡 Hypothesis: Database connection pool exhausted', '✅ Root cause confirmed with 89% confidence'],
      predictive: ['🔮 Analyzing historical trends...', '📉 Similar pattern detected on 2024-01-15', '⚠️ Predicting cascading failure in 2.3 minutes', '✅ Recommendation: Scale replicas + flush idle connections']
    };
    outputs[agentType].forEach((output, i) => {
      setTimeout(() => {
        setAgentOutputs(prev => ({
          ...prev,
          [agentType]: [...prev[agentType], output]
        }));
        if (i === outputs[agentType].length - 1) {
          setTimeout(() => setActiveAgent(null), 500);
        }
      }, i * 800);
    });
  };
  const agents = [{
    id: 'detective',
    name: 'Detective Agent',
    role: 'Event Monitoring',
    icon: Search,
    color: 'blue',
    description: 'Continuously monitors event streams and logs, filtering noise to identify potential anomalies in real-time.',
    action: 'Scan Events'
  }, {
    id: 'diagnostic',
    name: 'Diagnostic Agent',
    role: 'Root Cause Analysis',
    icon: Stethoscope,
    color: 'teal',
    description: 'Analyzes alerts from the Detective, correlating them with system state to hypothesize root causes.',
    action: 'Analyze Root Cause'
  }, {
    id: 'predictive',
    name: 'Predictive Agent',
    role: 'Trend Forecasting',
    icon: TrendingUp,
    color: 'indigo',
    description: 'Looks at historical data and current trajectories to forecast potential cascading failures before they happen.',
    action: 'Predict Trends'
  }];
  const policyEngine = {
    name: 'Policy Engine',
    role: 'Policy-Based Self Healing',
    icon: Shield,
    status: 'Evaluating policies...',
    color: 'amber',
    description: 'Assesses agent outputs against 5 core rules to determine appropriate recovery actions and calculate business impact.',
    rules: ['High Latency Restart', 'Cascading Failures', 'Resource Exhaustion', 'Moderate Performance', 'Critical Failures']
  };
  return <section id="agents" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Multi-Agent Intelligence
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Try each agent individually to see how they analyze and respond to
            system events.
          </p>
        </div>

        {/* Interactive Agents */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {agents.map(agent => <div key={agent.id} className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${agent.color}-50 text-${agent.color}-600`}>
                    <agent.icon className="h-6 w-6" />
                  </div>
                  <button onClick={() => runAgent(agent.id)} disabled={activeAgent !== null} className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${activeAgent === agent.id ? 'bg-slate-200 text-slate-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500'} disabled:opacity-50`}>
                    <Play className="h-3 w-3" />
                    {activeAgent === agent.id ? 'Running...' : agent.action}
                  </button>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {agent.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {agent.role}
                </p>
                <p className="text-slate-600 mb-6">{agent.description}</p>

                {/* Agent Output Terminal */}
                <div className="rounded-lg bg-slate-900 p-4 font-mono text-xs text-slate-300 min-h-[120px]">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2 mb-2">
                    <Terminal className="h-3 w-3" />
                    <span className="text-slate-500">Agent Output</span>
                  </div>
                  <div className="space-y-1">
                    {agentOutputs[agent.id].length === 0 ? <p className="text-slate-600 italic">
                        Click "{agent.action}" to run agent...
                      </p> : agentOutputs[agent.id].map((output, i) => <p key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                          {output}
                        </p>)}
                    {activeAgent === agent.id && <p className="animate-pulse text-blue-400">_</p>}
                  </div>
                </div>
              </div>

              <div className="mt-auto border-t border-slate-100 bg-slate-50 px-6 py-4 rounded-b-2xl">
                <div className="flex justify-between text-xs font-medium text-slate-500">
                  <span>Latency: 12ms</span>
                  <span>Confidence: 98%</span>
                </div>
              </div>
            </div>)}
        </div>

        {/* Policy Engine - Full Width Below */}
        <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-8 shadow-lg">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg">
                <policyEngine.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {policyEngine.name}
                </h3>
                <p className="text-amber-700 font-medium">
                  {policyEngine.role}
                </p>
              </div>
              <span className="ml-auto inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-800 shadow-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                {policyEngine.status}
              </span>
            </div>
            <p className="text-slate-700 text-lg">{policyEngine.description}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Policy Rules */}
            <div className="rounded-xl bg-white border border-amber-100 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Policy Rules
              </h4>
              <div className="space-y-3">
                {policyEngine.rules.map((rule, i) => <div key={i} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-900">
                      {rule}
                    </span>
                  </div>)}
              </div>
            </div>

            {/* Decision Flow */}
            <div className="rounded-xl bg-white border border-amber-100 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-amber-900 mb-4">
                Decision Flow
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-2 text-center flex-1">
                    <div className="text-sm font-bold text-amber-900">
                      Policy Engine
                    </div>
                    <div className="text-xs text-amber-700">
                      Evaluates 5 Rules
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-slate-400 text-lg">↓</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-center flex-1">
                    <div className="text-sm font-bold text-blue-900">
                      Circuit Breaker
                    </div>
                    <div className="text-xs text-blue-700">Safety Check</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-slate-400 text-lg">↓</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-2 text-center flex-1">
                    <div className="text-sm font-bold text-green-900">
                      Combined Output
                    </div>
                    <div className="text-xs text-green-700">Action Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Downstream Components */}
          <div className="mt-8 pt-8 border-t border-amber-200">
            <div className="text-sm font-semibold text-amber-900 mb-4">
              Downstream Components
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg bg-white border border-amber-100 p-4 shadow-sm">
                <div className="text-sm font-medium text-slate-900">
                  Business Impact Calculator
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Revenue risk assessment
                </div>
              </div>
              <div className="rounded-lg bg-white border border-amber-100 p-4 shadow-sm">
                <div className="text-sm font-medium text-slate-900">
                  Anomaly Detector
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Pattern recognition
                </div>
              </div>
              <div className="rounded-lg bg-white border border-amber-100 p-4 shadow-sm">
                <div className="text-sm font-medium text-slate-900">
                  FAISS Vector Memory
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Semantic search
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}