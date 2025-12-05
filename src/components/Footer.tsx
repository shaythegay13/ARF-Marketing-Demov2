import React from 'react';
import { Github, ShieldCheck } from 'lucide-react';
export function Footer() {
  return <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-slate-400" />
            <span className="text-lg font-bold text-slate-700">ARF</span>
          </div>

          <div className="text-center text-sm text-slate-500 md:text-left">
            <p>Hackathon Prototype • Production-Conscious Architecture</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-slate-900">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-slate-200 pt-8 md:justify-start">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800">
            Python 3.10
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Security: Patched
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Tests: 40+
          </span>
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
            Coverage: 80%+
          </span>
        </div>
      </div>
    </footer>;
}