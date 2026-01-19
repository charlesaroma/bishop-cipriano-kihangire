import React from 'react'
import PageHero from '../../components/common/PageHero'
import FacilitiesGallery from '../../components/3.information/FacilitiesGallery'

const FacilitiesPage = ({ section }) => {
    const titles = {
        'classrooms': { title: 'Classrooms & Laboratories', subtitle: 'State-of-the-art learning spaces equipped for academic excellence.' },
        'library': { title: 'Library & E-Library', subtitle: 'A comprehensive knowledge resource center for research and learning.' },
        'ict-hub': { title: 'ICT Hub', subtitle: 'Modern technology infrastructure supporting digital learning and innovation.' },
        'stadium': { title: 'Dove Stadium', subtitle: 'Our premier sports facility hosting athletics and competitive events.' },
        'academic-block': { title: 'New Academic Block', subtitle: 'Expanding infrastructure for enhanced learning and student support.' }
    }

    const pageInfo = titles[section] || titles['classrooms']

    const renderContent = () => {
        switch (section) {
            case 'classrooms': return <ClassroomsSection />;
            case 'library': return <LibrarySection />;
            case 'ict-hub': return <ICTHubSection />;
            case 'stadium': return <StadiumSection />;
            case 'academic-block': return <AcademicBlockSection />;
            default: return <FacilitiesGallery />;
        }
    }

    const breadcrumbPath = section ? `/facilities/${section}` : '/facilities'
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Facilities', href: '/facilities' },
        { label: pageInfo.title, href: breadcrumbPath }
    ]

    return (
        <div>
            <PageHero 
                title={pageInfo.title}
                subtitle={pageInfo.subtitle}
                breadcrumbs={breadcrumbs}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {renderContent()}
            </div>
        </div>
    )
}

const ClassroomsSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Modern Classroom Infrastructure</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        BCK SSS is equipped with well-designed, spacious classrooms furnished with modern teaching aids. Our learning environment is conducive to academic excellence, with proper ventilation, lighting, and technology integration.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Our specialized laboratories support hands-on learning in sciences and technology, with qualified technicians ensuring student safety and learning outcomes.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Classroom Features</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Well-equipped classrooms with modern furniture</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Physics, Chemistry, and Biology laboratories</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Technology-enhanced learning spaces</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Safe, hygienic environment</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Professional lab technicians</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Practical-based curriculum delivery</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const LibrarySection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Comprehensive Knowledge Center</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Our library is a hub of intellectual resources, featuring thousands of books, journals, and digital materials. With an automated circulation system, we ensure efficient access to knowledge resources that support academic research and personal development.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The E-Library platform provides remote access to digital resources, enabling students and staff to research and learn beyond school hours. Our librarians support research excellence and information literacy.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Library Resources</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Extensive collection of books and journals</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Automated circulation and management system</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">E-Library digital platform for online access</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Quiet study spaces and reading areas</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Expert library staff and research support</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Research skills training and guidance</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const ICTHubSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Technology & Innovation Center</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Our ICT Hub is equipped with modern computers, high-speed internet, and industry-standard software. It's a dedicated space for computer science education, digital literacy, and technological innovation supporting our school's vision for digital excellence.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Students gain hands-on experience with programming, web development, digital design, and other IT skills essential for the 21st-century economy.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">ICT Facilities</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Multiple computer labs with latest technology</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">High-speed internet connectivity</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Software for programming and design</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Digital literacy and coding programs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Qualified IT instructors and support staff</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">E-Governance systems and digital voting</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const StadiumSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Premier Sports Venue</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Dove Stadium is a state-of-the-art athletic facility named with pride and excellence. Our modern track, spacious field, and grandstand seating make it a hub of sports excellence and school pride. The stadium hosts football matches, athletics events, and other sporting competitions.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Regular maintenance and professional management ensure optimal conditions for training and competition, supporting our athletes' pursuit of excellence.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Stadium Features</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Modern all-weather running track</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Professional football field</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Grandstand seating for spectators</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Training facilities and equipment</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Hosting regional and national events</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Professional ground management</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const AcademicBlockSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Expanding Our Excellence</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        As part of our strategic expansion, BCK SSS is constructing a modern academic block to accommodate growing enrollment and provide enhanced learning facilities. This project reflects our commitment to continuous improvement and meeting the educational needs of our students.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The new academic block will feature modern classrooms, specialized laboratories, collaborative learning spaces, and advanced technology integration, positioning us as a leader in secondary education in Uganda.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Project Features</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Modern classroom facilities</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Advanced science laboratories</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Technology-enabled learning spaces</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Student support centers</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Collaborative learning areas</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Sustainable, eco-friendly design</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Investing in the Future</h3>
                <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
                    The new academic block represents our dedication to providing world-class educational infrastructure. We are grateful for the support of our sponsors, partners, and the school community in realizing this vision.
                </p>
            </div>
        </div>
    )
}

export default FacilitiesPage
