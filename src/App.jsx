import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import HomePage from './pages/1.homePage/HomePage'
import ApplyNowPage from './pages/4.admissions/ApplyNowPage'
import ContactPage from './pages/6.contact/ContactPage'
import TheSchoolPage from './pages/2.about/TheSchoolPage'
import BackgroundPage from './pages/2.about/BackgroundPage'
import ManagementPage from './pages/2.about/ManagementPage'
import InformationPage from './pages/3.information/InformationPage'
import BlogPage from './pages/5.blog/BlogPage'
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
          <Route path="admissions/apply" element={<ApplyNowPage />} />
          <Route path="admissions/requirements" element={<ApplyNowPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* About Us Routes */}
          <Route path="about/school" element={<TheSchoolPage />} />
          <Route path="about/background" element={<BackgroundPage />} />
          <Route path="about/management" element={<ManagementPage />} />
          <Route path="about/*" element={<TheSchoolPage />} />

          {/* Information Routes */}
          <Route path="information/curriculum" element={<InformationPage section="curriculum" />} />
          <Route path="information/performance" element={<InformationPage section="performance" />} />
          <Route path="information/co-curricular" element={<InformationPage section="co-curricular" />} />
          <Route path="information/facilities" element={<InformationPage section="facilities" />} />
          <Route path="information/fees" element={<InformationPage section="fees" />} />
          <Route path="information/*" element={<InformationPage section="curriculum" />} />

          {/* Blog Route */}
          <Route path="blog" element={<BlogPage />} />

          {/* Generic Pages for other sub-routes */}
          <Route path="admissions/*" element={<GenericPage category="Admissions" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
