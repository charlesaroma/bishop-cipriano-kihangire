import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import HomePage from './pages/1.homePage/HomePage'
import ApplyNowPage from './pages/4.admissions/ApplyNowPage'
import AdmissionsPage from './pages/admissions/AdmissionsPage'
import ContactPage from './pages/6.contact/ContactPage'
import TheSchoolPage from './pages/2.about/TheSchoolPage'
import BackgroundPage from './pages/2.about/BackgroundPage'
import ManagementPage from './pages/2.about/ManagementPage'
import CatholicIdentityPage from './pages/2.about/CatholicIdentityPage'
import AcademicsPage from './pages/3.information/AcademicsPage'
import StudentLifePage from './pages/student-life/StudentLifePage'
import FacilitiesPage from './pages/facilities/FacilitiesPage'
import InformationPage from './pages/3.information/InformationPage'
import NewsPage from './pages/news/NewsPage'
import GenericPage from './components/global/GenericPage'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-bck-text bg-bck-bg">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="about" element={<TheSchoolPage />} />
          <Route path="about/history" element={<BackgroundPage />} />
          <Route path="about/administration" element={<ManagementPage />} />
          <Route path="about/*" element={<TheSchoolPage />} />

          {/* Academics Routes (renamed from Information) */}
          <Route path="academics/curriculum" element={<AcademicsPage section="curriculum" />} />
          <Route path="academics/performance" element={<AcademicsPage section="performance" />} />
          <Route path="academics/ict" element={<AcademicsPage section="ict" />} />
          <Route path="academics/*" element={<AcademicsPage section="curriculum" />} />

          {/* Student Life Routes */}
          <Route path="student-life/boarding-day" element={<StudentLifePage section="boarding" />} />
          <Route path="student-life/sports" element={<StudentLifePage section="sports" />} />
          <Route path="student-life/clubs" element={<StudentLifePage section="clubs" />} />
          <Route path="student-life/*" element={<StudentLifePage section="boarding" />} />

          {/* Facilities Routes - integrated into Academics and Student Life */}
          {/* No separate Facilities top-level routes */}

          {/* Admissions Routes */}
          <Route path="admissions/requirements" element={<AdmissionsPage section="requirements" />} />
          <Route path="admissions/apply" element={<AdmissionsPage section="apply" />} />
          <Route path="admissions/*" element={<AdmissionsPage section="apply" />} />

          {/* News & Events Route (merged from Blog) */}
          <Route path="news" element={<NewsPage />} />

          {/* Contact Us Route */}
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
