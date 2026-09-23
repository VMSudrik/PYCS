import React, { useState } from 'react';
import { Database, Layers, Cpu, Activity, Server, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const DigitalThreadVisualizer = () => {
  const [activeNodeId, setActiveNodeId] = useState('plm');

  const nodes = [
    {
      id: 'erp',
      title: 'ERP / SCM Core',
      category: 'Enterprise Business',
      icon: Database,
      color: '#0D9488',
      details: 'Financial ledger, supply chain synchronization, procurement & work order generation.',
      integrations: ['SAP', 'Oracle', 'Microsoft Dynamics']
    },
    {
      id: 'plm',
      title: 'PLM & CAD Thread',
      category: 'Engineering & Lifecycle',
      icon: Layers,
      color: '#0284C7',
      details: 'Product design, BOM governance, digital mockups, ECN change management & ALM embedded software.',
      integrations: ['ENOVIA', 'Teamcenter', 'Windchill', 'Aras']
    },
    {
      id: 'mes',
      title: 'MES / MOM Shop Floor',
      category: 'Manufacturing Execution',
      icon: Server,
      color: '#0891B2',
      details: 'Real-time production dispatching, work-in-progress (WIP) tracking, machine telemetry & batch execution.',
      integrations: ['Siemens Opcenter', 'DELMIA Apriso', 'Rockwell']
    },
    {
      id: 'ai',
      title: 'Industrial AI (HAI)',
      category: 'Cognitive Intelligence',
      icon: Cpu,
      color: '#EA580C',
      details: 'Human-Centered AI absorbing mundane tasks, predictive maintenance, optical QA inspection & operator assistance.',
      integrations: ['Computer Vision QA', 'Edge ML Telemetry', 'POV Sandbox']
    },
    {
      id: 'autonomy',
      title: 'Autonomous Closed-Loop',
      category: 'Intelligent Autonomy',
      icon: Activity,
      color: '#8B5CF6',
      details: 'Continuous feedback loop adjusting machine setpoints, eliminating operational bottlenecks automatically.',
      integrations: ['Self-Optimizing Workflows', 'Zero Data Silos', 'Live KPI Stream']
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[1];

  return (
    <div className="digital-thread-card animate-fade-in">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'signalPulse 2s infinite' }}></span>
          <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--pycs-cyan-accent)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Interactive Enterprise Digital Thread
          </span>
        </div>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Click any node to inspect integration flow
        </span>
      </div>

      {/* Node Selector Grid */}
      <div className="topology-container">
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = node.id === activeNodeId;
          return (
            <div
              key={node.id}
              className={`topology-node ${isActive ? 'active' : ''}`}
              onClick={() => setActiveNodeId(node.id)}
              style={{
                borderColor: isActive ? node.color : undefined,
                boxShadow: isActive ? `0 0 15px ${node.color}33` : undefined
              }}
            >
              <div
                className="topology-node-icon"
                style={{
                  backgroundColor: `${node.color}18`,
                  color: node.color
                }}
              >
                <Icon size={18} />
              </div>
              <div className="topology-node-title">{node.title}</div>
              <div className="topology-node-type">{node.category}</div>
            </div>
          );
        })}
      </div>

      {/* Active Node Details Box */}
      <div
        className="topology-details-box"
        style={{ borderLeftColor: activeNode.color }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{activeNode.title}</strong>
            <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', background: `${activeNode.color}20`, color: activeNode.color, fontWeight: 600 }}>
              {activeNode.category}
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.45' }}>
            {activeNode.details}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>Connected Ecosystems:</span>
            {activeNode.integrations.map((tool) => (
              <span
                key={tool}
                className="font-mono"
                style={{ fontSize: '0.7rem', padding: '2px 6px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px', color: 'var(--text-primary)' }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'none', minWidth: '40px', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={20} style={{ color: activeNode.color }} />
        </div>
      </div>

      {/* Continuity Banner */}
      <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px dashed var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <CheckCircle2 size={14} style={{ color: 'var(--pycs-teal)' }} />
          <span>Zero Data Silos Across CAD • ALM • PLM • MES • ERP</span>
        </div>
        <span className="font-mono" style={{ color: 'var(--pycs-cyan-accent)', fontWeight: 600 }}>
          PYCS Unified Architecture
        </span>
      </div>
    </div>
  );
};
