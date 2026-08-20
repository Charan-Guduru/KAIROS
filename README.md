# Kairos

> A surplus-food marketplace that helps restaurants turn unsold food
> into affordable meals instead of waste.

Kairos is the evolution of the original **Food Connect** project. It
connects restaurants with customers looking for discounted surplus food,
giving restaurants a way to recover value from unsold meals while
helping customers find affordable food.

## 🌱 What Kairos Does

Kairos has two main user roles:

-   **Customers** can browse available surplus-food listings, search and
    filter them, claim food, and receive a confirmation code for pickup.
-   **Restaurant owners** can create food listings, upload food images,
    manage their listings, view claims/revenue statistics, and verify
    customer confirmation codes.

### Core flow

``` text
Restaurant
    │
    │  Lists surplus food
    ▼
  Kairos
    │
    │  Customers browse & claim
    ▼
 Customer
    │
    │  Shows confirmation code
    ▼
Restaurant verifies pickup
```

## ✨ Features

### Customer

-   Account registration and login
-   Browse available food listings
-   Search by food, restaurant, or category
-   Sort by:
    -   Newest
    -   Price: Low to High
    -   Price: High to Low
    -   Distance
-   Filter by:
    -   Category
    -   Delivery availability
    -   Pickup availability
    -   Maximum price
-   Claim available food
-   Receive a unique confirmation code
-   View previously claimed food
-   View pickup information

### Restaurant Owner

-   Owner account registration
-   Restaurant profile creation
-   Restaurant dashboard
-   Create surplus-food listings
-   Upload food images
-   Set price and quantity
-   Set pickup time
-   Enable delivery/pickup options
-   View active and claimed listings
-   Track meals saved
-   Track revenue earned
-   Delete listings
-   Verify customer confirmation codes

## 🛠️ Technology

### Frontend

-   HTML
-   CSS
-   JavaScript
-   Tailwind CSS
-   Remix Icon

### Backend / Cloud

-   **Supabase**
    -   PostgreSQL database
    -   Authentication
    -   Storage
    -   Database API

### Database

Kairos currently uses three main application tables:

-   `user_profiles`
-   `restaurants`
-   `food_listings`

Food images are stored in the `food-images` Supabase Storage bucket.

## 🗄️ Database Structure

``` text
auth.users
    │
    ├── user_profiles
    │       └── user_type: user | owner
    │
    ├── restaurants
    │       └── owner_id
    │
    └── food_listings
            ├── created_by
            └── claimed_by
```

A food listing contains information such as:

-   Restaurant name
-   Description
-   Price
-   Category
-   Quantity
-   Pickup time
-   Delivery availability
-   Pickup availability
-   Distance
-   Image URL
-   Availability status
-   Claiming user
-   Confirmation code
-   Creation/update timestamps

## 🔐 Authentication

Kairos uses Supabase Authentication with email/password login.

During registration, users select either:

``` text
Customer
   or
Restaurant Owner
```

The selected role is stored in the user's profile and determines which
dashboard they receive after authentication.

## 🎟️ Claim & Verification System

When a customer claims a listing:

1.  Kairos checks the authenticated user.
2.  The selected listing is marked unavailable.
3.  The customer is recorded as the claimant.
4.  A confirmation code is generated.
5.  The claim is saved locally for the customer's claim history.
6.  The restaurant owner can verify the confirmation code.

Example:

``` text
Food Listing
     ↓
Customer clicks "Claim Now"
     ↓
Listing becomes unavailable
     ↓
Confirmation Code generated
     ↓
Customer shows code at restaurant
     ↓
Restaurant verifies code
```

## 📁 Project Structure

The project is intentionally lightweight and uses a frontend-first
architecture.

``` text
Kairos/
├── index.html
├── app.js
├── config.js
├── styles.css
├── README.md
└── sql/
    └── database.sql
```

> File names may differ depending on the current deployment/repository
> structure.

## ⚙️ Configuration

Kairos initializes a Supabase client using the project URL and Supabase
anonymous key.

The application expects a configuration similar to:

``` javascript
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
```

**Never commit a Supabase service-role key or other privileged secret to
the frontend.**

For a public browser application, the Supabase anonymous key is intended
to be used client-side, while database permissions should be enforced
through Supabase security policies.

## 🚀 Running Locally

Because Kairos is a browser-based application, it can be run locally
using a simple static web server.

For example:

``` bash
git clone <your-repository-url>
cd Kairos
```

Then serve the project with any static development server.

You can also use VS Code's **Live Server** extension for local
development.

## 🌐 Deployment

Kairos is designed to be deployed as a static frontend connected to
Supabase.

A typical deployment looks like:

``` text
GitHub
   │
   ▼
Static Hosting
   │
   └──────────────► Supabase
                     ├── Auth
                     ├── PostgreSQL
                     └── Storage
```

Suitable static hosting platforms include:

-   Netlify
-   Vercel
-   GitHub Pages (if the application configuration supports it)

After deployment, configure the Supabase authentication redirect/site
URLs to match the deployed domain.

## 🔒 Security Note

Kairos uses Supabase Row Level Security (RLS) policies in its database
design to restrict access based on authenticated users and ownership.

Before using the application with real customer or restaurant data, make
sure the intended RLS policies are enabled and tested.

The frontend should never contain privileged Supabase credentials such
as a service-role key.

## 🎯 Project Goals

Kairos was created around three simple goals:

1.  **Reduce food waste** by giving surplus food another opportunity to
    be sold.
2.  **Help customers save money** by providing discounted food.
3.  **Help restaurants recover value** from food that might otherwise go
    unsold.

## 🔮 Future Possibilities

Possible future improvements include:

-   Location-based restaurant discovery
-   Real-time listing updates
-   Online payments
-   Push notifications
-   Restaurant verification
-   Better delivery integration
-   Food expiry management
-   Ratings and reviews
-   Analytics for restaurants
-   Demand prediction
-   Surplus-food prediction and intelligent discount recommendations

## 📌 Current Status

**Kairos is an MVP/prototype project.**

The core customer and restaurant-owner workflows are implemented,
including authentication, food listing management, claiming, and
confirmation-code verification.

The project is currently focused on making the existing application
publicly accessible and easy to demonstrate.

## 🤝 Contributing

Kairos is currently a personal project. If you want to experiment with
the project:

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Test the customer and owner workflows.
5.  Open a pull request.

## 📄 License

No open-source license has been selected yet.

If you intend to make Kairos open source, add an appropriate license
here.

------------------------------------------------------------------------

### Kairos

**Turning surplus food into an opportunity.**
