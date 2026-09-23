import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { CheckCircle2, ArrowRight, RotateCcw, Sparkles, Award, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../../data/contentData';

const questions = [
  {
    id: 1,
    question: "How interconnected is your engineering and shop-floor ecosystem?",
    options: [
      { text: "Heavily siloed; CAD, PLM, MES, and ERP operate in separate silos with manual data handoffs.", score: 1 },
      { text: "Partially connected; PLM or MES exists but frequent engineering-to-shop-floor friction persists.", score: 2 },
      { text: "Integrated; data flows across PLM and MES, but lacks closed-loop AI telemetry.", score: 3 },
      { text: "Fully harmonized digital thread with real-time analytics across all enterprise layers.", score: 4 }
    ]
  },
  {
    id: 2,
    question: "What is your current strategy for Industrial AI Adoption?",
    options: [
      { text: "No active AI initiative or only ad-hoc exploratory discussions.", score: 1 },
      { text: "Piloting isolated AI tools without a unified enterprise roadmap or clear POV.", score: 2 },
      { text: "Deploying Human-Centered AI (HAI) for specific predictive maintenance or QA tasks.", score: 3 },
      { text: "Enterprise-wide AI strategy with closed-loop autonomous execution workflows.", score: 4 }
    ]
  },
  {
    id: 3,
    question: "How is your organization managing Change & Workforce Adoption?",
    options: [
      { text: "High automation anxiety and employee change fatigue; users resist new software tools.", score: 1 },
      { text: "Traditional top-down training; limited empathetic change management or floor engagement.", score: 2 },
      { text: "Empathetic OCM frameworks in place; operators are upskilled to work alongside AI.", score: 3 },
      { text: "High digital fluency culture; continuous learning and collaborative Human-in-the-Loop workflows.", score: 4 }
    ]
  },
  {
    id: 4,
    question: "What is your primary operational bottleneck right now?",
    options: [
      { text: "Legacy software migrations, fragmented BOMs, and high manufacturing rework.", score: 1 },
      { text: "Scaling pressure; chaotic startup engineering methods needing repeatable blueprints.", score: 2 },
      { text: "Maximizing realized ROI on existing Dassault / Siemens / PTC enterprise investments.", score: 3 },
      { text: "Transitioning from automated monitoring to self-optimizing Intelligent Autonomy.", score: 4 }
    ]
  }
];

export const ReadinessAssessmentModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId, score) => {
    const newAnswers = { ...answers, [questionId]: score };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const totalScore = Object.values(answers).reduce((sum, s) => sum + s, 0);

  const getMaturityResult = (score) => {
    if (score <= 6) {
      return {
        stage: "Stage 1: Legacy Silos & High Change Friction",
        badge: "Urgent Modernization Needed",
        color: "#EF4444",
        summary: "Your enterprise is experiencing significant data fragmentation between design and shop floor, compounded by automation anxiety.",
        recommendation: "Prioritize an Enterprise Application Assessment to eliminate data silos and implement Empathetic Change Management (OCM) before deploying complex AI."
      };
    } else if (score <= 10) {
      return {
        stage: "Stage 2: Point-Solution Modernization",
        badge: "Growth & Harmonization Opportunity",
        color: "#F59E0B",
        summary: "You have modern engineering tools, but gaps in process harmonization and digital thread continuity prevent maximizing full IT ROI.",
        recommendation: "Focus on PLM/MES end-to-end integration and initiate focused Human-Centered AI (HAI) Proof of Values (POVs) with clear KPAs."
      };
    } else if (score <= 13) {
      return {
        stage: "Stage 3: Connected Digital Thread",
        badge: "Advanced Enterprise Scale",
        color: "#0284C7",
        summary: "You possess a well-integrated digital backbone with strong operational disciplines across engineering and manufacturing.",
        recommendation: "Accelerate closed-loop smart factory automation and scale real-time AI models for predictive quality and maintenance."
      };
    } else {
      return {
        stage: "Stage 4: Intelligent Autonomy Ready",
        badge: "Pioneer in Autonomous Execution",
        color: "#10B981",
        summary: "Your organization embodies high digital fluency, robust toolchain harmonization, and empathetic leadership culture.",
        recommendation: "Execute self-optimizing closed-loop governance and explore next-generation autonomous shop-floor execution blueprints."
      };
    }
  };

  const result = getMaturityResult(totalScore);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Industrial AI & Digital Engineering Readiness Assessment"
      maxWidth="680px"
    >
      {!isCompleted ? (
        <div>
          {/* Progress Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span>Question {currentStep + 1} of {questions.length}</span>
            <span className="font-mono">Progress: {Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
          </div>

          <div className="assessment-progress-bar">
            <div
              className="assessment-progress-fill"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Current Question */}
          <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.4' }}>
            {questions[currentStep].question}
          </h4>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {questions[currentStep].options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                className="assessment-option-btn"
                onClick={() => handleSelectOption(questions[currentStep].id, opt.score)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textAlign: 'left' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid var(--border-medium)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--pycs-cyan-accent)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: '1.45' }}>
                    {opt.text}
                  </span>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--text-muted)', flexShrink: 0, marginLeft: '0.5rem' }} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Result Screen */
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${result.color}15`, color: result.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
            <Award size={32} />
          </div>

          <span className="badge" style={{ backgroundColor: `${result.color}15`, color: result.color, borderColor: `${result.color}40`, marginBottom: '0.75rem' }}>
            {result.badge}
          </span>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {result.stage}
          </h3>

          <p className="font-mono" style={{ fontSize: '0.88rem', color: 'var(--pycs-cyan-accent)', marginBottom: '1.5rem' }}>
            Calculated Maturity Score: {totalScore} / 16
          </p>

          <div style={{ background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-subtle)', textAlign: 'left', marginBottom: '1.5rem' }}>
            <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)', display: 'block', marginBottom: '0.5rem' }}>
              Diagnostic Summary:
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
              {result.summary}
            </p>

            <strong style={{ fontSize: '0.9rem', color: 'var(--pycs-cyan-accent)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}>
              <Sparkles size={16} />
              PYCS Strategic Action Plan:
            </strong>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.5', fontWeight: 500 }}>
              {result.recommendation}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outline"
              size="md"
              icon={RotateCcw}
              iconPosition="left"
              onClick={handleReset}
            >
              Retake Assessment
            </Button>

            <Button
              variant="primary"
              size="md"
              href="#contact"
              onClick={onClose}
              icon={ArrowRight}
            >
              Discuss with Technical Advisor
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
