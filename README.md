# Glamorous Hub

This is the front-end Angular 18 application for the Glamorous Hub. It is built using Standalone Components, Angular Signals, and Tailwind CSS.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Customizing the Project

1. **Brand Colors**: The brand colors (`#000000` Black, `#D4AF37` Gold) are configured in `tailwind.config.js`.
2. **Typography**: The typography uses the "Poppins" font loaded via Google Fonts in `src/index.html`.
3. **Mock Data**: To adjust prices, services, team members, or testimonials, edit `src/app/services/mock-data.service.ts`.
4. **Booking Form**: The contact and booking forms are currently set up to use Formspree. Update the `action="https://formspree.io/f/YOUR_FORM_ID_HERE"` attributes in `booking.component.ts` and `contact.component.ts` with your actual form handler endpoint or EmailJS hook.

## Swapping Placeholder Assets

- **Logo**: Replace `src/assets/logo-placeholder.svg` with your actual logo (preferably an SVG or transparent PNG). If you change the filename, update `src/app/components/logo/logo.component.ts`.
- **Favicon**: Replace `public/favicon.ico`.
- **Team Photos**: Drop your high-res photos into `public/assets/team/` and update the paths in the `mock-data.service.ts`.
- **Gallery/Reels**: Replace images in `public/assets/gallery/` and `public/assets/` as needed.

## Deployment to HostAfrica

This project is configured as a Static Site and can easily be deployed to standard CPanel hosting like HostAfrica.

### Build Steps

1. Run the production build command:
   ```bash
   ng build --configuration production
   ```
2. This will generate a `dist/glamorous-hub/browser` folder containing the compiled HTML, CSS, and JS files.

### Upload Steps

1. Log into your HostAfrica cPanel account.
2. Navigate to the **File Manager** and open the `public_html` directory (or the root directory of your add-on domain).
3. Select all the contents inside `dist/glamorous-hub/browser` (not the folder itself, but the files inside it).
4. Zip the files, upload the ZIP archive to `public_html`, and extract it.
5. **Routing Setup for Apache/Litespeed**:
   Since this is a Single Page Application (SPA), you must ensure deep links work (like `/booking` or `/services`). Create or edit an `.htaccess` file in the root of `public_html` with the following fallback rules:

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

Your site should now be live and properly routing on HostAfrica!
