# TravelMate Holidays Website Clone

## Overview
TravelMate Holidays is a modern, visually rich travel agency website clone, designed to showcase and book curated travel experiences across India, especially South India. The site is built as a static, multi-page application using HTML, CSS, and JavaScript, with a focus on user experience, responsive design, and engaging visuals.

## Features
- **Home Page:** Hero video, animated stats, featured packages, and a clear call-to-action.
- **About Us:** Company story, values, and testimonials from real travelers.
- **Services:** Detailed cards for each service (Pilgrim Tours, Backwaters, House Boating, Adventure, etc.) with immersive backgrounds.
- **Booking:** Interactive booking form with validation, package selection, and real-time feedback.
- **Contact:** Location, phone, email, and embedded map for easy reach.
- **Footer:** Social links, quick navigation, and contact info on every page.
- **Responsive Design:** Mobile-first, works seamlessly on all devices.
- **Animations:** Uses AOS (Animate On Scroll) and Swiper for smooth transitions and carousels.

## Project Structure
```
Travel2/
├── index.html                # Main landing page
├── home.html                 # Alternate homepage
├── about/
│   ├── about.html            # About Us page
│   └── about-media/          # CSS, JS, images for About
├── book/
│   ├── Booking.html          # Booking form page
│   └── Booking_files/        # CSS, JS, images for Booking
├── contact/
│   └── contact.html          # Contact page
│   └── contact-file/
│       └── contact_files/    # CSS, JS, images for Contact
├── service/
│   ├── Our Services.html     # Services page
│   └── services_files/       # CSS, JS, images for Services
├── public/                   # Shared images and media
└── TravelMate Holidays_files/# Shared CSS/JS for main pages
```

## Design & UX Decisions
- **Visual Storytelling:** The homepage uses a hero video and animated stats to immediately engage visitors and build trust.
- **Consistent Navigation:** All pages share a responsive navbar and footer for easy navigation and a unified brand feel.
- **Rich Media:** High-quality images and videos are used throughout to inspire travel and showcase destinations.
- **Accessible Forms:** The booking form includes validation, clear feedback, and is keyboard-friendly.
- **Mobile-First:** Layouts adapt gracefully to all screen sizes, with special attention to touch usability.
- **Performance:** CSS and JS are minified; only essential libraries (Bootstrap, Swiper, AOS, FontAwesome) are included.
- **Sustainability & Authenticity:** The About page highlights the company’s commitment to responsible tourism and authentic experiences.

## How to Run
1. **Clone or Download:**
   - Download the project folder or clone the repository.
2. **Open in Browser:**
   - Open `index.html` in your web browser. All links and assets are relative, so no server is required.
3. **Booking Form:**
   - The booking form is static and posts to `booknow.php` (not included). For demo, form validation and UI feedback work client-side.
4. **Customization:**
   - Replace images in `public/` and section folders to personalize destinations or branding.

## Credits & Acknowledgements
- **Original Inspiration:** [travelmateholidays.com](https://travelmateholidays.com)
- **Libraries Used:**
  - [Bootstrap 5](https://getbootstrap.com/)
  - [Swiper.js](https://swiperjs.com/)
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
  - [FontAwesome](https://fontawesome.com/)
- **Icons & Images:** Sourced from the original site and royalty-free stock.
- **Development:** This clone was built with a focus on clean structure, maintainability, and a delightful user experience, reflecting the best practices in modern web design.

---

*For any questions or suggestions, feel free to reach out via the contact page!* 