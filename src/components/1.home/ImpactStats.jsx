import React from 'react';
import { motion } from 'framer-motion';

const ImpactStats = () => {
    const stats = [
        { value: '2500+', label: 'Students Enrolled', desc: 'Developing tomorrow\'s leaders.' },
        { value: '100%', label: 'Pass Rate', desc: 'Academic excellence guaranteed.' },
        { value: '50+', label: 'Expert Educators', desc: 'Passionate about teaching.' },
        { value: '25', label: 'Years of History', desc: 'A legacy of success.' },
    ];

    return (
        <section className="py-32 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24">

                <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-6">
                            Our Track Record
                        </h2>
                        <p className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                            EXCELLENCE DISCIPLINE AND FAITH IN EVERY STEP WE TAKE.
                        </p>
                    </div>
                    <div className="hidden lg:block w-32 h-px bg-gray-700" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border-t border-gray-800">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className={`py-12 ${index !== 0 ? 'xl:border-l' : ''} border-gray-800 xl:px-10 group cursor-default`}
                        >
                            <div className="space-y-6">
                                <span className="inline-block w-8 h-1 bg-blue-700 group-hover:w-16 transition-all duration-500" />
                                <h3 className="text-6xl font-black tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
                                    {stat.value}
                                </h3>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-2">
                                        {stat.label}
                                    </p>
                                    <p className="text-gray-500 text-sm font-medium">
                                        {stat.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
