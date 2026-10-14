import { useState } from 'react';
import { Monitor, Cpu, Brain, Gavel, Database, ChevronRight } from 'lucide-react';
const layers = [{
  id: 1,
  title: 'Presentation',
  subtitle: 'Web Interface (Async Event Loop)',
  icon: Monitor,
  description: 'Real-time, low-latency monitoring interface that handles user interactions and visualizes system state without blocking core processing.',
  metrics: {
    latency: '< 50ms',
    throughput: 'High',
    focus: 'UX/UI'
  }
}, {
  id: 2,
  title: 'Core Coordination',
  subtitle: 'Enhanced Reliability Engine',
  icon: Cpu,
  description: 'The central nervous system that routes events, manages state, and ensures fault tolerance across the agent network.',
  metrics: {
    uptime: '99.99%',
    load: 'Balanced',
    focus: 'Routing'
  }
}, {
  id: 3,
  title: 'Multi-Agent Intelligence',
  subtitle: 'Agentic Thought Process',
  icon: Brain,
  description: 'Specialized agents (Detective, Diagnostic, Predictive) that analyze patterns, reason about root causes, and propose solutions.',
  metrics: {
    agents: '3 Active',
    reasoning: 'Chain-of-Thought',
    focus: 'Analysis'
  }
}, {
  id: 4,
  title: 'Consensus & Action',
  subtitle: 'Orchestration Manager',
  icon: Gavel,
  description: 'Validates agent proposals through weighted voting and executes safe, idempotent recovery actions.',
  metrics: {
    safety: 'Verified',
    execution: 'Atomic',
    focus: 'Recovery'
  }
}, {
  id: 5,
  title: 'Data & Learning',
  subtitle: 'Knowledge Base Engine (FAISS)',
  icon: Database,
  description: 'Vector storage for historical incidents and resolution patterns, enabling the system to learn and improve over time.',
  metrics: {
    storage: 'Vector DB',
    retrieval: 'Semantic',
    focus: 'Memory'
  }
}];
export function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(layers[0]);
  return <section id="architecture" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Five-Layer Agentic Architecture
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            A robust, tiered system designed for production reliability. Click
            each layer to explore its role in the stack.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Layer Map */}
          <div className="lg:col-span-5 space-y-4">
            {layers.map(layer => <button key={layer.id} onClick={() => setActiveLayer(layer)} className={`group flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${activeLayer.id === layer.id ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50'}`}>
                <div className="flex items-center gap-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${activeLayer.id === layer.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <layer.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className={`font-semibold ${activeLayer.id === layer.id ? 'text-blue-900' : 'text-slate-900'}`}>
                      Layer {layer.id}: {layer.title}
                    </div>
                    <div className="text-xs text-slate-500 hidden sm:block">
                      {layer.subtitle}
                    </div>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${activeLayer.id === layer.id ? 'text-blue-600 rotate-90 lg:rotate-0' : 'text-slate-300'}`} />
              </button>)}
          </div>

          {/* Detail Panel */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-900/5">
                  <activeLayer.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {activeLayer.title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {activeLayer.subtitle}
                  </p>
                </div>
              </div>

              <div className="prose prose-slate mb-8">
                <p className="text-lg leading-relaxed text-slate-600">
                  {activeLayer.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {Object.entries(activeLayer.metrics).map(([key, value]) => <div key={key} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-900/5">
                    <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      {key}
                    </div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                      {value}
                    </div>
                  </div>)}
              </div>

              <div className="mt-8 rounded-lg bg-blue-900/5 p-4 border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                  Why this layer matters
                </h4>
                <p className="text-sm text-blue-800">
                  Critical for maintaining SLOs and ensuring that automated
                  responses are both fast and safe. This layer isolates concerns
                  to prevent cascading failures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}