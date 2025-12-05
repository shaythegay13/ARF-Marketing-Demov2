import React, { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [{
    name: 'Architecture',
    href: '#architecture'
  }, {
    name: 'Agents',
    href: '#agents'
  }, {
    name: 'Incident Flow',
    href: '#flow'
  }, {
    name: 'Security',
    href: '#security'
  }, {
    name: 'Demo',
    href: '#demo'
  }];
  return <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            ARF
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600">
              {link.name}
            </a>)}
          <a href="#demo" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
            Try Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>)}
          </div>
        </div>}
    </nav>;
}