# Luxe by Icce - Premium E-Commerce Website

A sophisticated, frontend-only e-commerce website for Luxe by Icce, serving customers throughout Ghana with WhatsApp-based ordering and order tracking.

## 🚀 Quick Start

1. **Open the website**
   - Simply open `index.html` in your web browser
   - No server or installation required

2. **Access the Admin Dashboard**
   - Open `admin.html` in your browser
   - Default credentials:
     - Username: `admin`
     - Password: `admin123`
   - **Important:** Change the password after first login by editing `js/admin.js`

## 📁 Project Structure

```
icce/
├── index.html              # Homepage
├── catalogue.html          # Product catalogue
├── track-order.html        # Order tracking page
├── admin.html              # Admin dashboard
├── css/
│   ├── styles.css          # Main stylesheet
│   └── admin.css           # Admin dashboard styles
├── js/
│   ├── main.js             # Main JavaScript
│   └── admin.js            # Admin dashboard JavaScript
└── assets/
    ├── favicon.png         # Website favicon
    ├── images/             # Product images (1.jpeg - 15.jpeg)
    └── videos/             # Product videos (2.mp4, 3.mp4, etc.)
```

## ✨ Features

### Public Website
- **Premium Homepage** with cinematic hero carousel (images + videos)
- **Product Catalogue** with search, filtering, and sorting
- **Product Detail Modal** with image and video gallery
- **WhatsApp Integration** for product enquiries and orders
- **Order Tracking** with visual timeline
- **Responsive Design** for mobile, tablet, and desktop
- **Accessibility** features (keyboard navigation, reduced motion support)

### Admin Dashboard
- **Product Management** (add, edit, delete, publish/unpublish)
- **Order Management** (record, update status, generate tracking codes)
- **Business Settings** (name, description, WhatsApp number, announcements)
- **Dashboard Overview** with statistics

## 🎨 Design System

- **Colors:** Ivory/cream backgrounds, black typography, champagne-gold accents
- **Typography:** Serif display fonts paired with readable sans-serif
- **Style:** Editorial, premium, elegant
- **Responsive:** Mobile-first approach

## 📱 WhatsApp Integration

All product enquiry buttons open WhatsApp with pre-filled messages:
- Product-specific enquiries with product ID
- General customer support
- Order tracking support

WhatsApp number: `+233247559387` (displayed as `024 755 9387`)

## 🔄 Data Persistence

This is a **frontend-only implementation** using localStorage for data persistence:

- Products are stored in `localStorage` under key `luxe_products`
- Orders are stored in `localStorage` under key `luxe_orders`
- Settings are stored in `localStorage` under key `luxe_settings`
- Admin session is stored in `sessionStorage` under key `luxe_admin_session`

**Important:** Data persists only in the browser where it was created. Clearing browser data will remove all products, orders, and settings.

## ⚠️ Important Limitations

This is a **frontend-only prototype** with the following limitations:

### Security Limitations
1. **No server-side authentication** - Admin credentials are stored in JavaScript files
2. **No secure session management** - Uses sessionStorage, not secure cookies
3. **No CSRF protection** - Vulnerable to cross-site request forgery
4. **No rate limiting** - Vulnerable to brute-force attacks
5. **No input sanitization** - Vulnerable to XSS attacks
6. **No SQL injection protection** - Not applicable (no database), but data validation is limited

### Data Limitations
1. **No persistent database** - Data stored in browser localStorage only
2. **No data backup** - If browser data is cleared, all data is lost
3. **No multi-user support** - Each browser has its own data
4. **No real-time sync** - Changes in one browser don't reflect in others
5. **No server-side validation** - All validation happens in the browser

### Functional Limitations
1. **No real payment processing** - Orders are recorded but payment happens outside the system
2. **No automated WhatsApp integration** - Uses standard click-to-chat links only
3. **No email notifications** - No automated email sending
4. **No inventory management** - Stock levels are not tracked
5. **No customer accounts** - No user registration or login
6. **No order history** - Customers cannot view past orders
7. **No analytics** - No visitor tracking or analytics

### Production Requirements

For a **production deployment**, you would need:

1. **Backend Server**
   - Node.js with Express or similar
   - Secure authentication (JWT, session cookies)
   - API endpoints for all operations
   - Rate limiting and security headers

2. **Database**
   - PostgreSQL or MySQL
   - Proper schema and migrations
   - Backup and recovery procedures

3. **Security**
   - Environment variables for secrets
   - HTTPS/SSL certificate
   - CSRF protection
   - Input validation and sanitization
   - Security headers and CSP

4. **Features**
   - Real payment gateway integration
   - Email service integration
   - File upload handling
   - Image optimization and CDN
   - Analytics and monitoring

## 🛠️ Customization

### Adding Products
1. Access the admin dashboard at `admin.html`
2. Go to the Products tab
3. Click "Add Product"
4. Fill in the details:
   - Image filename from `assets/images/`
   - Video filename from `assets/videos/` (optional)
   - Category, description, tags
   - Featured/new/published flags

### Managing Orders
1. Access the admin dashboard
2. Go to the Orders tab
3. Add new orders or edit existing ones
4. Generate tracking codes after order verification
5. Update order status as it progresses

### Changing Business Settings
1. Access the admin dashboard
2. Go to the Settings tab
3. Update business name, description, WhatsApp number
4. Change announcement bar text
5. Set business hours

### Customizing Design
- Edit `css/styles.css` for main website styles
- Edit `css/admin.css` for admin dashboard styles
- Design tokens are defined in `:root` at the top of styles.css

### Adding Media Assets
- Place images in `assets/images/`
- Place videos in `assets/videos/`
- Reference filenames in product settings

## 📱 Browser Compatibility

Tested on:
- Google Chrome (latest)
- Microsoft Edge (latest)
- Mozilla Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Key Features Implemented

### Homepage
- ✅ Announcement bar
- ✅ Premium navigation
- ✅ Hero carousel with images and videos
- ✅ Brand introduction
- ✅ Featured collections
- ✅ New arrivals
- ✅ Editorial gallery
- ✅ Quality and service features
- ✅ WhatsApp CTA
- ✅ Delivery information
- ✅ FAQ accordion
- ✅ Footer with contact info

### Product Catalogue
- ✅ Searchable product grid
- ✅ Category filtering
- ✅ Sorting options
- ✅ Product detail modal
- ✅ WhatsApp enquiry buttons
- ✅ No prices displayed (as required)

### Order Tracking
- ✅ Tracking code input
- ✅ Visual status timeline
- ✅ Order status display
- ✅ Error handling for invalid codes

### Admin Dashboard
- ✅ Secure login (frontend-only)
- ✅ Product CRUD operations
- ✅ Order CRUD operations
- ✅ Tracking code generation
- ✅ Business settings management
- ✅ Dashboard statistics

## 📄 Sample Data

The application includes:
- 15 sample products with images and videos
- 3 sample orders with tracking codes
- Default business settings

All sample data is loaded on first visit and stored in localStorage.

## 🔧 Troubleshooting

### Images or videos not loading
- Check that files exist in `assets/images/` or `assets/videos/`
- Verify filenames match exactly (case-sensitive)
- Check browser console for errors

### Admin dashboard not accessible
- Verify credentials: `admin` / `admin123`
- Check that `admin.html` exists
- Clear browser cache and try again

### Data not persisting
- Check that localStorage is enabled in browser
- Some browsers block localStorage in private/incognito mode
- Try in normal browsing mode

### WhatsApp links not working
- Verify WhatsApp number format: `233247559387`
- Check internet connection
- Ensure WhatsApp is installed on device

## 📝 License

This project is for Luxe by Icce. All rights reserved.

## 🤝 Support

For support, contact:
- WhatsApp: 024 755 9387
- International: +233 247 559 387

---

**Note:** This is a frontend-only demonstration. For production use, implement a proper backend with database, authentication, and security measures as outlined in the limitations section.
