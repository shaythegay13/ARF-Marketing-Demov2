import React from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, FileText, Server, ShieldCheck, Scale } from 'lucide-react';
const steps = [{
  title: 'Incoming Event',
  desc: 'External monitor detects anomaly',
  icon: AlertCircle,
  color: 'text-red-500',
  bg: 'bg-red-50',
  meta: 'Latency: 2ms'
}, {
  title: 'Layer 2 Ingest',
  desc: 'Event validation & impact analysis',
  icon: Server,
  color: 'text-blue-500',
  bg: 'bg-blue-50',
  meta: 'Revenue Risk: Calc'
}, {
  title: 'Layer 3 Diagnosis',
  desc: '4 agents run in parallel',
  icon: FileText,
  color: 'text-indigo-500',
  bg: 'bg-indigo-50',
  meta: 'Confidence: 89%'
}, {
  title: 'Policy Assessment',
  desc: 'Policy engine evaluates rules',
  icon: Scale,
  color: 'text-amber-500',
  bg: 'bg-amber-50',
  meta: 'Rule: Matched'
}, {
  title: 'Layer 4 Consensus',
  desc: 'Weighted voting & action prep',
  icon: ShieldCheck,
  color: 'text-teal-500',
  bg: 'bg-teal-50',
  meta: 'Vote: Unanimous'
}, {
  title: 'Action & Recovery',
  desc: 'Idempotent script deployed',
  icon: CheckCircle2,
  color: 'text-green-500',
  bg: 'bg-green-50',
  meta: 'Resolved: 450ms'
}];
export function IncidentFlowSection() {
  return <section id="flow" className="py-24 bg-white border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From Detection to Autonomous Recovery
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            End-to-end incident resolution flow with policy-based decision
            making and sub-second latency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-slate-200 lg:block"></div>

          <div className="grid gap-8 lg:grid-cols-6">
            {steps.map((step, i) => <div key={i} className="relative flex flex-col items-center text-center">
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white ${step.bg} shadow-sm`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4 w-full">
                  <h3 className="text-sm font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">{step.desc}</p>
                  <div className="mt-3 inline-block rounded bg-white px-2 py-1 text-[10px] font-mono font-medium text-slate-600 shadow-sm border border-slate-100">
                    {step.meta}
                  </div>
                </div>

                {/* Mobile Arrow */}
                {i < steps.length - 1 && <div className="my-4 lg:hidden">
                    <ArrowRight className="h-6 w-6 text-slate-300 rotate-90" />
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}