import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TransformationFramework } from '../components/interactive/TransformationFramework';

export const ThreePillars = () => {
  return (
    <section id="framework" className="section section-alt">
      <div className="container">
        
        <SectionHeader
          eyebrow="Transformation Methodology"
          eyebrowVariant="process"
          title="Our Three-Pillar"
          titleHighlight="Transformation Framework"
          description="Technology alone cannot solve complex industrial challenges. True transformation requires the harmonious synchronization of Technology, Process, and People."
        />

        {/* Interactive Framework Visualizer */}
        <TransformationFramework />

      </div>
    </section>
  );
};
