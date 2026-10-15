import { Users, Server, Cloud } from 'lucide-react';
export function UseCasesSection() {
  const cases = [{
    title: 'SRE Teams',
    icon: Users,
    desc: 'Reduce on-call fatigue via automated diagnosis and runbooks. Let agents handle the repetitive alerts while you sleep.',
    value: '↓ 60% MTTR'
  }, {
    title: 'Platform Engineering',
    icon: Server,
    desc: 'Validate SLOs and enable self-healing automation across your entire internal developer platform.',
    value: 'Zero-touch Ops'
  }, {
    title: 'Infra & Cloud Ops',
    icon: Cloud,
    desc: 'Catch anomalies before customer impact. Optimize resource usage with predictive scaling.',
    value: '30% Cost Savings'
  }];
  return <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Built for Modern Operations
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cases.map(item => <div key={item.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-blue-50 opacity-50 transition-transform group-hover:scale-150"></div>

              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700">
                  {item.value}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}