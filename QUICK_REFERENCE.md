# BCK SSS Website - Quick Reference Guide

## 🗂️ Project Structure After Refactoring

```
src/
├── pages/
│   ├── 1.homePage/
│   │   └── HomePage.jsx                 (Home page - maintained)
│   ├── 2.about/
│   │   ├── TheSchoolPage.jsx            (School Overview)
│   │   ├── BackgroundPage.jsx           (Background & History)
│   │   ├── ManagementPage.jsx           (Administration & Management)
│   │   └── CatholicIdentityPage.jsx     (NEW - Catholic Identity)
│   ├── 3.information/
│   │   ├── InformationPage.jsx          (Legacy - still used for some sections)
│   │   └── AcademicsPage.jsx            (NEW - Academics with sections)
│   ├── 3.ExcellencePage/
│   │   └── ExcellencePage.jsx           (Legacy)
│   ├── 4.admissions/
│   │   └── ApplyNowPage.jsx             (Legacy - used within AdmissionsPage)
│   ├── admissions/                      (NEW)
│   │   └── AdmissionsPage.jsx           (NEW - Comprehensive admissions)
│   ├── 5.blog/
│   │   └── BlogPage.jsx                 (Legacy - merged into News)
│   ├── 5.blogPage/
│   │   └── BlogPage.jsx                 (Legacy duplicate)
│   ├── 6.contact/
│   │   └── ContactPage.jsx              (Updated - enhanced contact info)
│   ├── 6.contactUsPage/
│   │   └── ContactPage.jsx              (Legacy duplicate)
│   ├── news/                            (NEW)
│   │   └── NewsPage.jsx                 (NEW - News & Events merged)
│   ├── student-life/                    (NEW)
│   │   └── StudentLifePage.jsx          (NEW - Comprehensive student life)
│   └── facilities/                      (NEW)
│       └── FacilitiesPage.jsx           (NEW - Comprehensive facilities)
│
├── components/
│   ├── global/
│   │   ├── Navbar.jsx                   (Updated navigation)
│   │   ├── Footer.jsx                   (Maintained)
│   │   ├── Layout.jsx                   (Maintained)
│   │   └── GenericPage.jsx              (Maintained fallback)
│   ├── common/
│   │   ├── PageHero.jsx                 (Enhanced with breadcrumbs)
│   │   └── ... (other common components)
│   ├── 2.about/
│   ├── 3.information/
│   ├── 4.admissions/
│   ├── 5.blog/
│   └── 6.contact/
│
├── data/
│   ├── homeData.json
│   ├── aboutData.json
│   ├── admissionsData.json
│   ├── contactData.json
│   ├── blogData.json
│   ├── informationData.json
│   └── ... (other data files)
│
├── App.jsx                              (Updated - 28 routes)
└── main.jsx
```

## 🔗 Route Map

### Navigation Structure
```
Home (/)
├── About Us (/about)
│   ├── School Overview (/about/school)
│   ├── Background & History (/about/background)
│   ├── Administration & Management (/about/management)
│   └── Catholic Identity (/about/catholic-identity)
├── Academics (/academics)
│   ├── Curriculum (/academics/curriculum)
│   ├── Departments (/academics/departments)
│   ├── Academic Performance (/academics/performance)
│   └── E-Governance & ICT (/academics/ict)
├── Student Life (/student-life)
│   ├── Boarding & Day Section (/student-life/boarding)
│   ├── Co-Curricular Activities (/student-life/co-curricular)
│   ├── Sports & MDD (/student-life/sports)
│   └── Clubs & Special Programs (/student-life/clubs)
├── Facilities (/facilities)
│   ├── Classrooms & Laboratories (/facilities/classrooms)
│   ├── Library & E-Library (/facilities/library)
│   ├── ICT Hub (/facilities/ict-hub)
│   ├── Dove Stadium (/facilities/stadium)
│   └── New Academic Block (/facilities/academic-block)
├── Admissions (/admissions)
│   ├── Requirements (/admissions/requirements)
│   ├── Fees Structure (/admissions/fees)
│   └── How to Apply (/admissions/apply)
├── News & Events (/news)
└── Contact Us (/contact)
```

## 📄 Key Files Guide

### Navigation
**File:** `src/components/global/Navbar.jsx`
- Primary navigation menu configuration
- Dropdown menu definitions
- Navigation links and styling
**Key Variable:** `navLinks` array (23 navigation items)

### Routing
**File:** `src/App.jsx`
- All route definitions
- Component imports and mappings
- Layout wrapper
**Total Routes:** 28 (plus parent route)

### Page Templates
**File:** `src/components/common/PageHero.jsx`
- Hero banner component used on all new pages
- Props: `title`, `subtitle`, `image`, `breadcrumbs`
- Default image support for consistency

## 🚀 Adding New Pages

### Step 1: Create Page Component
```jsx
// src/pages/section-name/PageNamePage.jsx
import React from 'react'
import PageHero from '../../components/common/PageHero'

const PageNamePage = () => {
    return (
        <div>
            <PageHero 
                title="Page Title"
                subtitle="Page subtitle..."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Section', href: '/section' },
                    { label: 'Page Name', href: '/section/page-name' }
                ]}
            />
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Page content here */}
            </div>
        </div>
    )
}

export default PageNamePage
```

### Step 2: Add Route in App.jsx
```jsx
import PageNamePage from './pages/section-name/PageNamePage'

// In Routes:
<Route path="section/page-name" element={<PageNamePage />} />
```

### Step 3: Add Navigation Link in Navbar.jsx
```jsx
{
    name: 'Section Name',
    path: '/section',
    dropdown: [
        { name: 'Page Name', path: '/section/page-name' },
        // ... other items
    ]
}
```

## 🎨 Styling Guide

### Tailwind Classes Used
- `bg-bck-blue` - School blue color
- `text-bck-text` - Body text color
- `bg-bck-bg` - Background color
- `rounded-xl`, `rounded-2xl` - Consistent rounding
- `shadow-lg` - Card shadows
- `border-t-4 border-blue-600` - Accent borders

### Component Patterns
1. **Hero Section:**
   ```jsx
   <PageHero title="Title" subtitle="Subtitle" breadcrumbs={[...]} />
   ```

2. **Content Section:**
   ```jsx
   <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
       {/* Content */}
   </div>
   ```

3. **Card Grid:**
   ```jsx
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       {/* Cards */}
   </div>
   ```

4. **Info Card:**
   ```jsx
   <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600">
       {/* Content */}
   </div>
   ```

## 📊 Component Reuse

### Existing Components Used in New Pages
| Component | File | Used In |
|-----------|------|---------|
| PageHero | src/components/common/ | All new pages |
| BlogGrid | src/components/5.blog/ | NewsPage |
| FeesTable | src/components/3.information/ | AdmissionsPage |
| CoCurricularGrid | src/components/3.information/ | StudentLifePage |
| ApplicationForm | src/components/4.admissions/ | AdmissionsPage |
| PerformanceStats | src/components/3.information/ | AcademicsPage |

## 🔄 Data Flow

### Data Files
- `src/data/homeData.json` - Home page content
- `src/data/aboutData.json` - About Us content
- `src/data/admissionsData.json` - Admissions requirements, levels, process
- `src/data/contactData.json` - Contact information
- `src/data/blogData.json` - News/blog content
- `src/data/informationData.json` - Academic and facility data

### Accessing Data
```jsx
import admissionsData from '../../data/admissionsData.json'

const { requirements, academicLevels, admissionProcess } = admissionsData;
```

## 🛠️ Common Maintenance Tasks

### Update Navigation
1. Edit `src/components/global/Navbar.jsx`
2. Modify `navLinks` array
3. Update routes in `src/App.jsx` if needed
4. Test all links

### Add New Admissions Info
1. Update `src/data/admissionsData.json`
2. Edit `src/pages/admissions/AdmissionsPage.jsx` if new sections needed
3. Add route if creating separate page

### Update Facilities
1. Edit `src/pages/facilities/FacilitiesPage.jsx` components
2. Update descriptions and features
3. Add new subsection if needed
4. Update navigation in Navbar

### Modify Contact Info
1. Update `src/data/contactData.json`
2. Edit `src/pages/6.contact/ContactPage.jsx` for layout changes
3. Verify banking information accuracy

## 🐛 Debugging Tips

### Page Not Showing?
1. Check route in `src/App.jsx` - ensure it exists and is spelled correctly
2. Verify component import in `App.jsx`
3. Check navigation link in `Navbar.jsx` matches route
4. Look for console errors

### Styling Issues?
1. Check Tailwind classes are spelled correctly
2. Verify `max-w-7xl mx-auto` for content width
3. Check responsive breakpoints (sm, md, lg)
4. Inspect element in browser DevTools

### Navigation Not Working?
1. Verify route path matches exactly
2. Check component name capitalization
3. Ensure React Router is properly configured
4. Test with React Router DevTools

## 📚 Documentation Files
- `REFACTORING_SUMMARY.md` - Complete refactoring overview
- `IMPLEMENTATION_CHECKLIST.md` - Feature checklist
- `GIT_COMMIT_SUMMARY.md` - Git commit details
- This file - Quick reference

## 🎯 Key Statistics
- **Routes:** 28 total
- **Navigation Links:** 23 links
- **Main Sections:** 8
- **Subsections:** 23
- **New Page Files:** 6
- **Modified Files:** 7

## ⚡ Performance Tips
1. Images should be optimized and compressed
2. Use lazy loading for facility galleries
3. Keep component re-renders minimal
4. Monitor bundle size
5. Use React DevTools Profiler for optimization

## 🔐 Security Notes
- Contact form should have CSRF protection
- Input validation required for forms
- Email addresses should be verified
- Rate limiting recommended for contact form

---

**Last Updated:** January 19, 2026
**Current Version:** 1.0 (Post-Refactoring)
**Status:** Production Ready
