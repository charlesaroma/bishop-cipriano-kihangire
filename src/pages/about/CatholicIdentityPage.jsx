import React from 'react'
import PageHero from '../../components/common/PageHero'
import { motion } from 'framer-motion'
import { Shield, Sparkles, Heart, Users, Check, Church } from 'lucide-react'

const CatholicIdentityPage = () => {
    const values = [
        { title: 'Spirituality', icon: Church, desc: 'Living our Catholic faith with integrity and deepening our relationship with God through prayer, sacraments, and service.' },
        { title: 'Excellence', icon: Sparkles, desc: 'Pursuing academic and personal excellence with diligence, discipline, and a commitment to continuous improvement.' },
        { title: 'Integrity', icon: Shield, desc: 'Acting with honesty, accountability, and moral uprightness in all our dealings and interactions.' },
        { title: 'Community', icon: Users, desc: 'Building a united, inclusive community where every member is valued and contributes to our collective mission.' }
    ]

    return (
        <div>
            <PageHero 
                title="Catholic Identity"
                subtitle="Living our faith and values: Spiritual formation at the heart of our mission."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Catholic Identity', href: '/about/catholic-identity' }
                ]}
            />
            
            <div className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto space-y-24">
                
                {/* Intro Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#003399] font-bold uppercase tracking-widest text-xs mb-3 block">Faith & Values</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                            Faith, Formation & Values
                        </h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                            <p>
                                Bishop Cipriano Kihangire Senior Secondary School is a Catholic institution committed to the holistic development of our students. Under the spiritual guidance of the Archdiocese of Kampala, our school integrates faith, academic excellence, and moral uprightness into every aspect of student life.
                            </p>
                            <p>
                                Founded by the late Reverend Father John Scalabrini, our institution continues to embody the Scalabrinian values of love, compassion, and dedication to education. We believe that true education nurtures not just the mind, but the heart and soul.
                            </p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                         <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                            <Church className="w-64 h-64" />
                        </div>
                        <div className="space-y-8 relative z-10">
                            {[
                                { title: 'Our Motto', text: '"For Unity, Academic Excellence and Moral Uprightness"', italic: true },
                                { title: 'Our Vision', text: 'To be the best choice in providing holistic education in Uganda.' },
                                { title: 'Our Mission', text: 'To provide high-quality secondary education emphasizing spiritual, social, intellectual, and physical development to face the changing world.' }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-4 border-[#003399] pl-6">
                                    <h3 className="text-lg font-bold text-[#003399] mb-2">{item.title}</h3>
                                    <p className={`text-gray-700 ${item.italic ? 'italic font-medium' : ''}`}>
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div>
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                            Core Values
                        </h2>
                        <div className="w-20 h-1 bg-[#003399] mx-auto opacity-20"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon
                            return (
                                <motion.div 
                                    key={idx}
                                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="w-12 h-12 bg-blue-50 text-[#003399] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {value.desc}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Spiritual Formation Programs */}
                <motion.div 
                    className="bg-[#003399] rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
                            Spiritual Formation & Activities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
                            {[
                                "Daily prayer and Mass attendance for interested students",
                                "Monthly Eucharistic celebrations and retreats",
                                "Religious education integrated into the curriculum",
                                "Community service and outreach programs",
                                "Leadership development rooted in Catholic social teachings",
                                "Guidance and counseling supporting holistic well-being"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                                        <Check className="w-3 h-3 text-white stroke-[3px]" />
                                    </div>
                                    <span className="text-blue-100 leading-relaxed text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default CatholicIdentityPage
