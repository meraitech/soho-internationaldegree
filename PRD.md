# Product Requirements Document — International.degree

## 1. Product Overview

### Product Name
International.degree

### Product Type
Education consultancy and international academic pathway website

### Primary Goal
Help experienced professionals understand available international certificate and degree pathways, then continue consultation through WhatsApp.

### Target Users
- Business owners
- Senior professionals
- Executives
- Organization leaders
- Professionals aged approximately 40–60
- Applicants with limited time and significant professional experience

### Main Value Proposition
- Simple access to international academic program information
- Personal consultation
- Eligibility review
- Program recommendation
- Application and document assistance
- Credential and institution verification support

---

## 2. Product Principles

- Simple and easy to understand
- Professional and trustworthy
- Large, readable typography
- Minimal navigation
- Clear institution and credential information
- No misleading academic claims
- No guaranteed admission or graduation
- Every main CTA directs users to WhatsApp

---

## 3. Website Structure

The website contains three main pages:

1. Home
2. Programs
3. About Us

Additional legal content is included within About Us or opened as a modal/section.

---

## 4. Main User Flow

1. User opens the Home page
2. User reads the main value proposition
3. User reviews available program categories
4. User reviews partner institution logos
5. User reads the process and trust information
6. User selects a program or WhatsApp consultation
7. WhatsApp opens with a prefilled message
8. Academic advisor continues the consultation manually

Alternative flow:

1. User opens the Programs page
2. User selects a program
3. User reads the program details
4. User clicks Ask via WhatsApp
5. WhatsApp opens with the selected program included in the message

---

# 5. Page Requirements

## 5.1 Home Page

### Header
Content:
- International.degree logo
- Home
- Programs
- About Us
- Consultation via WhatsApp button

Behavior:
- Sticky header on desktop
- Mobile menu on smaller screens
- WhatsApp button remains visible and prominent

### Hero Section
Content:
- Main headline
- Short supporting description
- Professional image
- Consultation via WhatsApp button

Suggested headline:
> International Academic Opportunities for Experienced Professionals

Suggested description:
> Explore professional certificates, prior learning assessment, and international degree pathways supported by personal consultation.

CTA:
- Consult via WhatsApp

### Trust Information
Content:
- International education network
- Transparent eligibility review
- Credential verification support
- Personal academic consultation

Display:
- Four simple trust items
- Short text
- Minimal icons

### About International.degree
Content:
- Short company introduction
- Target applicants
- Main services
- Role as an education facilitator

CTA:
- Learn More About Us

### Available Programs
Content:
- Professional Certificate
- Executive Education
- Prior Learning Assessment
- Bachelor Degree Pathway
- Master Degree Pathway
- Doctoral Degree Pathway

Each program card contains:
- Program category
- One-sentence description
- View Programs button
- Ask via WhatsApp button

### How It Works
Steps:
1. Consultation via WhatsApp
2. Submit education and work experience
3. Eligibility review
4. Program recommendation
5. Enrollment assistance
6. Program completion
7. Credential issuance

Display:
- Numbered steps
- Short descriptions
- No long paragraphs

### Suitable Applicants
Content:
- Business owners
- Senior professionals
- Executives
- Organization leaders
- Experienced professionals

### Partner Institutions
Content:
- Institution logos
- Institution names
- Countries
- Short partnership statement

Requirements:
- Logos must be officially approved for use
- No false affiliation claims
- Optional link to the institution’s official website
- No separate partner institution page

### Why Choose International.degree
Content:
- Personal consultation
- International program access
- Transparent program information
- Document assistance
- Application assistance
- Verification support

### Frequently Asked Questions
Questions:
- Can my work experience be recognized?
- Can I apply for an international degree?
- Who issues the credential?
- Are partner institutions accredited?
- How long does the process take?
- Can the credential be used in Indonesia?
- What documents are required?
- How much does the program cost?

Behavior:
- Accordion format
- One question open at a time
- Simple answers

### Final CTA
Content:
- Consultation headline
- Short supporting message
- Consultation via WhatsApp button

Suggested headline:
> Find the Right Academic Path for Your Experience

### Footer
Content:
- Company name
- Office address
- WhatsApp
- Email
- Home
- Programs
- About Us
- Privacy Policy
- Terms and Conditions
- Refund Policy
- Academic Disclosure

---

## 5.2 Programs Page

### Page Header
Content:
- Programs title
- Short introduction
- Consultation via WhatsApp button

### Program Category Navigation
Categories:
- Professional Certificate
- Executive Education
- Prior Learning Assessment
- Bachelor Degree Pathway
- Master Degree Pathway
- Doctoral Degree Pathway

Behavior:
- Filter program list by category
- Simple tab or dropdown interface

### Program List
Each program card contains:
- Program name
- Institution name
- Credential type
- Study method
- Estimated duration
- Main eligibility summary
- View Details button
- Ask via WhatsApp button

### Program Detail
Program details can open as:
- Dedicated dynamic detail route, or
- Modal/drawer on the Programs page

Required content:
- Program name
- Program overview
- Suitable applicants
- Credential type
- Issuing institution
- Study method
- Estimated duration
- Eligibility
- Required documents
- Curriculum summary
- Assessment method
- Graduation requirements
- Fee information
- Accreditation information
- Important disclosure
- Ask via WhatsApp button

### Program WhatsApp Message
Suggested template:

> Hello International.degree, I would like to ask about the [Program Name] from [Institution Name]. Please provide more information about eligibility, duration, requirements, and fees.

### Empty State
Content:
- No programs currently available in this category
- Contact advisor via WhatsApp

### Final CTA
Content:
- Need help choosing a program?
- Consultation via WhatsApp button

---

## 5.3 About Us Page

### Page Header
Content:
- About International.degree
- Short company introduction
- Consultation via WhatsApp button

### Our Story
Content:
- Company background
- Company purpose
- Target applicants
- Focus on international academic opportunities

### Our Role
Content:
- Education facilitator
- Academic program consultant
- Document assistance
- Application assistance
- Communication assistance with institutions
- Credential verification assistance

### Our Process
Steps:
1. Applicant consultation
2. Document review
3. Eligibility assessment
4. Program recommendation
5. Enrollment assistance
6. Program monitoring
7. Credential verification

### Partner Institution Information
Content:
- Partnership model
- Institution responsibilities
- International.degree responsibilities
- Credential issuing authority
- Admission authority
- Graduation authority

### Verification
Content:
- How to verify an institution
- How to verify accreditation
- How to verify a credential
- Verification assistance via WhatsApp

Optional verification links:
- Official institution website
- Official accreditation directory
- Credential verification portal

### Academic Disclosure
Content:
- International.degree is an education facilitator
- International.degree is not automatically the credential issuer
- Admission is decided by the institution
- Academic credit is decided by the institution
- Graduation is decided by the institution
- Credentials are issued by the stated institution
- Admission is not guaranteed
- Graduation is not guaranteed
- Employment is not guaranteed
- Recognition may differ by country, employer, regulator, or organization

### Legal Information
Content:
- Legal company name
- Company registration number
- Office address
- Contact information
- Privacy Policy
- Terms and Conditions
- Refund Policy

### Frequently Asked Questions
Questions:
- Is International.degree a university?
- Who issues the credential?
- What is the role of International.degree?
- How do I verify an institution?
- How do I verify a credential?
- Is admission guaranteed?
- Is graduation guaranteed?
- Can fees be refunded?

### Final CTA
Content:
- Speak With Our Academic Advisor
- Consultation via WhatsApp button

---

# 6. WhatsApp Integration

## Primary Requirement
All primary CTA buttons open WhatsApp.

## WhatsApp Number
- Configurable through environment variables or CMS settings
- Must support international phone number format

## General Message Template
> Hello International.degree, I would like to consult about the available international academic programs.

## Contextual Message Templates

### Home
> Hello International.degree, I would like to consult about an academic program suitable for my education and professional experience.

### Program Category
> Hello International.degree, I would like to learn more about the [Program Category].

### Program Detail
> Hello International.degree, I would like to ask about [Program Name] from [Institution Name].

### Verification
> Hello International.degree, I need assistance verifying an institution or credential.

### About Us
> Hello International.degree, I would like to learn more about your services and consultation process.

## Tracking
Each WhatsApp CTA should record:
- Source page
- Source section
- Program name, when applicable
- Click timestamp
- Device type
- UTM parameters, when available

---

# 7. Content Requirements

## Required Company Content
- Official company name
- Company description
- Office address
- WhatsApp number
- Email address
- Legal registration information
- Advisor information

## Required Institution Content
- Official institution name
- Institution logo
- Country
- Official website
- Accreditation information
- Partnership description
- Available programs
- Credential issuing authority

## Required Program Content
- Program name
- Program category
- Institution
- Credential type
- Study method
- Duration
- Eligibility
- Required documents
- Curriculum summary
- Assessment
- Graduation requirements
- Fees
- Accreditation information
- Disclosure

---

# 8. Design Requirements

## Visual Direction
- Academic
- Premium
- Editorial
- Trustworthy
- Inspired by traditional university websites
- Must not copy Harvard branding, logo, shield, or exact layout

## Recommended Colors
- Deep Maroon: `#6F1D2B`
- Dark Burgundy: `#48141E`
- Warm White: `#F7F5F0`
- Charcoal: `#202020`
- Muted Gold: `#B2925A`

## Typography
Headings:
- Source Serif 4
- Libre Baskerville
- Cormorant Garamond

Body:
- Inter
- Source Sans 3
- Arial

## Accessibility
- Minimum body font size: 18px
- High color contrast
- Large CTA buttons
- Clear focus states
- Keyboard accessible navigation
- Descriptive alt text
- Avoid small or light text
- Avoid excessive animation
- Avoid auto-playing media

## Responsive Design
- Desktop
- Tablet
- Mobile
- WhatsApp CTA remains easy to access on all devices

---

# 9. Functional Requirements

## Navigation
- Header navigation
- Mobile navigation
- Footer navigation
- Active page state

## Program Management
Recommended:
- Programs loaded from CMS or database
- Programs can be published or unpublished
- Programs can be assigned to categories
- Programs can be reordered

## Institution Management
Recommended:
- Institution name
- Logo
- Country
- Website
- Accreditation
- Partnership description
- Active/inactive status

## FAQ Management
Recommended:
- Question
- Answer
- Page
- Display order
- Active/inactive status

## SEO
Each page must support:
- SEO title
- Meta description
- Canonical URL
- Open Graph image
- Structured headings
- Index/no-index option

Program detail must support:
- Unique URL
- Unique title
- Unique description
- Social sharing metadata

## Analytics
Track:
- Page views
- WhatsApp CTA clicks
- Program views
- Program category selection
- FAQ interactions
- Partner link clicks
- Scroll depth
- Form events, if forms are added later

---

# 10. Non-Functional Requirements

## Performance
- Fast initial loading
- Optimized images
- Lazy-loaded partner logos
- Minimal JavaScript
- Lighthouse performance target: 90+

## Security
- HTTPS only
- Secure environment variables
- Input sanitization
- Rate limiting if forms are added
- No sensitive applicant documents stored in the first version

## Reliability
- WhatsApp links must have fallback behavior
- Broken institution links should be reviewed regularly
- Program publication must support draft status

## Browser Support
- Latest Chrome
- Latest Safari
- Latest Edge
- Mobile Chrome
- Mobile Safari

---

# 11. Recommended Data Model

## Program
- id
- slug
- name
- category
- institution_id
- credential_type
- overview
- suitable_applicants
- study_method
- duration
- eligibility
- required_documents
- curriculum_summary
- assessment_method
- graduation_requirements
- fee_information
- accreditation_information
- disclosure
- is_published
- display_order
- created_at
- updated_at

## Institution
- id
- slug
- official_name
- logo_url
- country
- official_website
- accreditation_body
- accreditation_status
- accreditation_url
- partnership_description
- credential_issuer_description
- is_active
- display_order
- created_at
- updated_at

## FAQ
- id
- page
- question
- answer
- is_active
- display_order
- created_at
- updated_at

## Website Setting
- company_name
- company_description
- legal_company_name
- registration_number
- address
- email
- whatsapp_number
- general_whatsapp_message
- advisor_name
- advisor_photo
- advisor_position

---

# 12. MVP Scope

## Included
- Home page
- Programs page
- Program detail
- About Us page
- Responsive design
- WhatsApp integration
- Partner institution logos
- FAQ
- Academic disclosure
- Legal information
- Basic SEO
- Analytics
- CMS or editable data source

## Not Included
- User registration
- User login
- Online application
- Online payment
- Applicant dashboard
- Document upload
- Automated eligibility assessment
- Automated credential verification
- Live chat
- Course delivery
- Student learning system

---

# 13. Success Metrics

Primary:
- WhatsApp consultation clicks
- Qualified consultation conversations
- Program inquiry conversion

Secondary:
- Program detail views
- Partner institution link clicks
- Average time on site
- FAQ interactions
- Mobile conversion rate

Suggested initial targets:
- WhatsApp CTA click rate: 5% or higher
- Program detail to WhatsApp conversion: 10% or higher
- Mobile page load under 3 seconds
- Bounce rate below 60%

---

# 14. Acceptance Criteria

## Home
- All sections load correctly
- Partner logos are visible
- WhatsApp buttons use the correct message
- FAQ works on desktop and mobile
- Main content is readable without zooming

## Programs
- Users can browse program categories
- Users can open program details
- Program information is complete
- WhatsApp message includes program context

## About Us
- Company role is clearly stated
- Verification information is available
- Academic disclosure is visible
- Legal information is accessible
- WhatsApp CTA works

## General
- Responsive on mobile, tablet, and desktop
- No broken links
- No false guarantee language
- No unapproved institution logos
- Analytics events are recorded
- SEO metadata is configured

---

# 15. Open Questions

The following items still require confirmation:

1. What is the official legal company name?
2. What is the official WhatsApp number?
3. What language will be primary: English, Indonesian, or bilingual?
4. Will Programs use a CMS/database or static content?
5. Will every program have a dedicated URL?
6. What exact credential categories are available?
7. Are Bachelor, Master, and Doctoral pathways all currently available?
8. Is honorary recognition offered?
9. Which institutions have officially approved logo usage?
10. What is the exact partnership model with each institution?
11. Who legally issues each credential?
12. What accreditation information can be publicly displayed?
13. Will fees be displayed publicly or only through consultation?
14. Is consultation free or paid?
15. What refund rules have been approved?
16. Will credential verification be manual through WhatsApp or use an online portal?
17. Is an admin dashboard required for the MVP?
18. What analytics platform will be used?
19. Does the client already have approved photos and brand assets?
20. Is the domain `international.degree` already active and controlled by the client?
