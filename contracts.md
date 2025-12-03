# Portfolio Backend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for Rifki Rusdi Satma Putra's portfolio website backend implementation.

## Current State: Frontend-Only with Mock Data
**Mock Data Location:** `/app/frontend/src/data/mockData.js`

### Mocked Data Includes:
- ✅ Personal information (name, title, bio, contact details)
- ✅ Experience history (5 positions)
- ✅ Skills & technologies (15 items across 6 categories)
- ✅ Languages proficiency (3 languages)
- ✅ Education details (degree, GPA, roles, awards)
- ✅ Projects showcase (4 featured projects)
- ✅ Contact form (mock submission only)

## Backend Implementation Plan

### 1. Database Models (MongoDB)

#### User/Portfolio Model
```javascript
{
  _id: ObjectId,
  personalInfo: {
    name: String,
    title: String,
    bio: String,
    location: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
    portrait: String (URL)
  },
  createdAt: Date,
  updatedAt: Date
}
```

#### Experience Model
```javascript
{
  _id: ObjectId,
  role: String,
  company: String,
  period: String,
  highlights: [String],
  logo: String (URL),
  order: Number,
  isActive: Boolean,
  createdAt: Date
}
```

#### Skill Model
```javascript
{
  _id: ObjectId,
  name: String,
  category: String (frontend/backend/mobile/database/devops/design),
  icon: String,
  order: Number,
  createdAt: Date
}
```

#### Project Model
```javascript
{
  _id: ObjectId,
  title: String,
  subtitle: String,
  description: String,
  tech: [String],
  image: String (URL),
  category: String,
  color: String,
  liveUrl: String (optional),
  githubUrl: String (optional),
  order: Number,
  isFeatured: Boolean,
  createdAt: Date
}
```

#### Education Model
```javascript
{
  _id: ObjectId,
  degree: String,
  university: String,
  gpa: String,
  period: String,
  roles: [String],
  awards: [String],
  createdAt: Date
}
```

#### Language Model
```javascript
{
  _id: ObjectId,
  name: String,
  level: Number (0-100),
  proficiency: String,
  order: Number
}
```

#### ContactMessage Model
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  isRead: Boolean,
  createdAt: Date
}
```

### 2. API Endpoints

#### Portfolio Endpoints
- `GET /api/portfolio/personal` - Get personal information
- `GET /api/portfolio/experience` - Get all experiences
- `GET /api/portfolio/skills` - Get all skills (grouped by category)
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/education` - Get education details
- `GET /api/portfolio/languages` - Get language proficiencies
- `GET /api/portfolio/all` - Get complete portfolio data (single request)

#### Contact Endpoint
- `POST /api/contact` - Submit contact form message

#### Admin Endpoints (Future Enhancement)
- `PUT /api/admin/personal` - Update personal info
- `POST /api/admin/experience` - Add experience
- `PUT /api/admin/experience/:id` - Update experience
- `DELETE /api/admin/experience/:id` - Delete experience
- Similar CRUD for skills, projects, education

### 3. Frontend Integration Points

#### Files to Update:
1. **Hero.jsx**
   - Replace `import { personalInfo }` with API call
   - Use `GET /api/portfolio/personal`

2. **Experience.jsx**
   - Replace `import { experiences }` with API call
   - Use `GET /api/portfolio/experience`

3. **Skills.jsx**
   - Replace `import { skills }` with API call
   - Use `GET /api/portfolio/skills`

4. **Projects.jsx**
   - Replace `import { projects }` with API call
   - Use `GET /api/portfolio/projects`

5. **Summary.jsx**
   - Replace `import { education, languages }` with API calls
   - Use `GET /api/portfolio/education` and `GET /api/portfolio/languages`

6. **Contact.jsx**
   - Implement real form submission
   - Use `POST /api/contact`
   - Add success/error toast notifications

### 4. CV Download Feature

**Current State:** Direct link to uploaded CV file
```javascript
cvUrl: "https://customer-assets.emergentagent.com/job_dev-glassmorphism/artifacts/bwz28coj_CV%20Software%20Developer%20Rusdy.docx"
```

**Backend Implementation:**
- Store CV file in `/app/backend/static/cv/` directory
- Create endpoint: `GET /api/portfolio/cv/download`
- Serve file with proper headers for download

### 5. Data Migration Strategy

**Step 1:** Create migration script to populate database
- Read mock data from `mockData.js`
- Transform and insert into MongoDB collections
- Verify data integrity

**Step 2:** Create data seeding script
- `/app/backend/seed/seedData.py`
- Populate initial portfolio data
- Run once during backend setup

### 6. Frontend State Management

**Current:** Direct imports from mockData.js
**Future:** React hooks for API calls

```javascript
// Example: usePortfolio.js custom hook
const usePortfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/portfolio/all`)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);
  
  return { data, loading };
};
```

### 7. Contact Form Implementation

**Current:** Mock submission with setTimeout
**Future:** Real API integration

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/contact`,
      formData
    );
    
    toast({
      title: "Message Sent!",
      description: response.data.message,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "Failed to send message. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing Checklist

### Backend API Testing
- [ ] All GET endpoints return correct data structure
- [ ] POST /api/contact validates required fields
- [ ] CV download serves file correctly
- [ ] Error handling for invalid requests
- [ ] CORS configured properly

### Frontend Integration Testing
- [ ] All sections load data from API
- [ ] Loading states display properly
- [ ] Error states handled gracefully
- [ ] Contact form submits successfully
- [ ] Toast notifications appear
- [ ] CV download works from button
- [ ] No console errors

### Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Images optimized and load quickly
- [ ] API responses < 500ms
- [ ] Smooth scrolling on all sections
- [ ] Responsive on all screen sizes

## Notes
- All API endpoints should return consistent JSON structure
- Implement proper error handling and status codes
- Add request validation using Pydantic models
- Consider caching for frequently accessed data
- Implement rate limiting on contact form endpoint
