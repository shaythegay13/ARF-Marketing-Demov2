import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DemoSection } from './components/DemoSection';
import { AgentsSection } from './components/AgentsSection';
import { IncidentFlowSection } from './components/IncidentFlowSection';
import { SecurityPerformanceSection } from './components/SecurityPerformanceSection';
import { UseCasesSection } from './components/UseCasesSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
      <Navigation />
      <main>
        <Hero />
        <ArchitectureSection />
        <DemoSection />
        <AgentsSection />
        <IncidentFlowSection />
        <SecurityPerformanceSection />
        <UseCasesSection />
      </main>
      <Footer />
    </div>;
}