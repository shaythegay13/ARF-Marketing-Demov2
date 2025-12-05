import React from 'react';
import { ArrowRight, Layers, Activity, Shield } from 'lucide-react';
export function Hero() {
  return <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <span className="mr-2 flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              v1.0 Hackathon Release
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Multi-Agent AI for{' '}
              <span className="text-blue-600">Production Reliability</span>
            </h1>
            <p className="mb-8 text-lg text-slate-600">
              Autonomous incident resolution powered by a 5-layer agentic
              architecture. Secure, performant, and designed for modern SRE
              teams.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                Run Incident Simulation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#architecture" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
                View Architecture
              </a>
            </div>
          </div>

          {/* Right Visual - Abstract 5-Layer Stack */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
              <div className="rounded-xl bg-slate-50 p-6">
                <div className="space-y-4">
                  {/* Visual representation of layers */}
                  {[{
                  name: 'Presentation Layer',
                  icon: Activity,
                  color: 'text-blue-500',
                  bg: 'bg-blue-50'
                }, {
                  name: 'Core Coordination',
                  icon: Layers,
                  color: 'text-indigo-500',
                  bg: 'bg-indigo-50'
                }, {
                  name: 'Multi-Agent Intel',
                  icon: Shield,
                  color: 'text-violet-500',
                  bg: 'bg-violet-50'
                }, {
                  name: 'Consensus & Action',
                  icon: Activity,
                  color: 'text-teal-500',
                  bg: 'bg-teal-50'
                }, {
                  name: 'Data & Learning',
                  icon: Layers,
                  color: 'text-slate-500',
                  bg: 'bg-slate-100'
                }].map((layer, i) => <div key={i} className={`flex items-center gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-sm transition-transform hover:scale-[1.02] ${i === 2 ? 'ring-2 ring-blue-500/20' : ''}`}>
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${layer.bg}`}>
                        <layer.icon className={`h-5 w-5 ${layer.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 w-24 rounded-full bg-slate-200 mb-2"></div>
                        <div className="h-2 w-full rounded-full bg-slate-100"></div>
                      </div>
                      <div className="text-xs font-medium text-slate-400">
                        Layer {i + 1}
                      </div>
                    </div>)}
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 rounded-lg border border-slate-200 bg-white p-4 shadow-lg hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Incident Detected
                    </p>
                    <p className="text-xs text-slate-500">
                      Agents responding...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}