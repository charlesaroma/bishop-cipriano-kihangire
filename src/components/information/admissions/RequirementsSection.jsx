import React from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2, AlertTriangle } from 'lucide-react'
import admissionsData from '../../../data/admissionsData.json'

/**
 * RequirementsSection - Academic Calm Design System
 * 
 * Visual Style:
 * - Calm, respectful, scholarly appearance
 * - Soft light, muted color saturation
 * - Generous white space
 * - Clear typographic hierarchy
 * 
 * Colors (Hardcoded - Per PRD):
 * - Brand Blue: #003399
 * - Primary Text: #374151
 * - Secondary Text: #6B7280
 * - Dividers: #E5E7EB
 */
const RequirementsSection = () => {
    const { requirements, academicLevels, admissionProcess } = admissionsData;

    // Animation variants
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    }

    return (
        <div className="space-y-20">
            {/* Required Documents - Following PRD structure */}
            <motion.section {...fadeInUp}>
                <h2 
                    className="text-[#003399] mb-4 text-center"
                    style={{ 
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.02em'
                    }}
                >
                    Required Documentation
                </h2>
                
                <p 
                    className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto"
                    style={{ fontFamily: '"Inter", sans-serif', lineHeight: 1.7 }}
                >
                    To process an application, the following must be submitted digitally or in person:
                </p>

                {/* Documentation Card */}
                <div 
                    className="
                        max-w-2xl mx-auto
                        bg-white/80 backdrop-blur-[20px]
                        rounded-xl border border-[#E5E7EB]
                        p-8 md:p-10
                    "
                >
                    <div className="space-y-5">
                        {requirements && requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <span className="text-2xl shrink-0">{getDocEmoji(idx)}</span>
                                <div>
                                    <p 
                                        className="text-[#374151]"
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    >
                                        <strong className="text-[#003399]">{req.item}</strong>
                                        {req.note && <span className="text-[#6B7280]"> — {req.note}</span>}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Section Divider */}
            <div className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]" />
            </div>

            {/* Academic Levels / Entry Requirements */}
            <motion.section {...fadeInUp}>
                <h2 
                    className="text-[#003399] mb-4 text-center"
                    style={{ 
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 600
                    }}
                >
                    Entry Levels
                </h2>
                
                <p 
                    className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto"
                    style={{ fontFamily: '"Inter", sans-serif', lineHeight: 1.7 }}
                >
                    BCK SSS offers admissions for the following academic programs:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {academicLevels && academicLevels.map((level, idx) => (
                        <motion.div 
                            key={idx} 
                            className="
                                bg-white rounded-xl border border-[#E5E7EB]
                                p-6 md:p-8
                                hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                                transition-all duration-300
                            "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <h3 
                                className="text-[#003399] mb-3"
                                style={{ 
                                    fontFamily: '"Playfair Display", Georgia, serif',
                                    fontSize: '1.25rem',
                                    fontWeight: 600
                                }}
                            >
                                {level.level}
                            </h3>
                            <p 
                                className="text-[#6B7280] mb-5"
                                style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.9375rem', lineHeight: 1.6 }}
                            >
                                {level.description}
                            </p>
                            <div>
                                <p 
                                    className="text-[#374151] font-medium mb-3"
                                    style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.875rem' }}
                                >
                                    Entry Requirements:
                                </p>
                                <ul className="space-y-2">
                                    {level.requirements && level.requirements.map((req, ridx) => (
                                        <li 
                                            key={ridx} 
                                            className="flex items-start text-[#6B7280]"
                                            style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.875rem' }}
                                        >
                                            <span className="text-[#003399] mr-2">•</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Section Divider */}
            <div className="w-16 h-px bg-[#E5E7EB] mx-auto" />

            {/* Admission Process */}
            <motion.section {...fadeInUp}>
                <h2 
                    className="text-[#003399] mb-4 text-center"
                    style={{ 
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 600
                    }}
                >
                    Application Process
                </h2>
                
                <p 
                    className="text-[#6B7280] text-center mb-12 max-w-2xl mx-auto"
                    style={{ fontFamily: '"Inter", sans-serif', lineHeight: 1.7 }}
                >
                    Follow these steps to complete your admission:
                </p>

                {admissionProcess && (
                    <div className="max-w-2xl mx-auto space-y-8">
                        {admissionProcess.map((step, idx) => (
                            <motion.div 
                                key={idx} 
                                className="flex gap-5"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <div className="shrink-0">
                                    <div 
                                        className="
                                            flex items-center justify-center 
                                            h-10 w-10 rounded-full 
                                            bg-[#003399] text-white 
                                            font-medium text-sm
                                        "
                                        style={{ fontFamily: '"Inter", sans-serif' }}
                                    >
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="pt-1">
                                    <h3 
                                        className="text-[#374151] mb-2"
                                        style={{ 
                                            fontFamily: '"Inter", sans-serif',
                                            fontSize: '1rem',
                                            fontWeight: 600
                                        }}
                                    >
                                        {step.step}
                                    </h3>
                                    <p 
                                        className="text-[#6B7280] mb-2"
                                        style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.9375rem', lineHeight: 1.6 }}
                                    >
                                        {step.description}
                                    </p>
                                    {step.details && (
                                        <ul className="space-y-1 mt-3">
                                            {step.details.map((detail, didx) => (
                                                <li 
                                                    key={didx} 
                                                    className="flex items-start text-[#6B7280]"
                                                    style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.875rem' }}
                                                >
                                                    <span className="text-[#003399] mr-2">→</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.section>

            {/* Contact Card */}
            <motion.div 
                className="
                    max-w-2xl mx-auto
                    bg-[#003399] text-white
                    rounded-xl p-8 md:p-10
                "
                {...fadeInUp}
            >
                <h2 
                    className="text-white mb-6"
                    style={{ 
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: '1.5rem',
                        fontWeight: 600
                    }}
                >
                    Need Assistance?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <p className="text-white/70 text-sm mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Email
                        </p>
                        <p className="font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            admissions@bck.ac.ug
                        </p>
                    </div>
                    <div>
                        <p className="text-white/70 text-sm mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Phone
                        </p>
                        <p className="font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            +256 414 250 404
                        </p>
                    </div>
                    <div>
                        <p className="text-white/70 text-sm mb-1" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Location
                        </p>
                        <p className="font-medium" style={{ fontFamily: '"Inter", sans-serif' }}>
                            Bbiina, Luzira, Kampala
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

// Helper function to get contextual emoji for documents
function getDocEmoji(index) {
    const emojis = ['📷', '📋', '🏥', '📄', '🎓', '📝'];
    return emojis[index % emojis.length];
}

export default RequirementsSection
