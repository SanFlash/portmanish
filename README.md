# Manish Kumar Mishra — Premium Portfolio

Next.js portfolio with GSAP ScrollTrigger, Lenis smooth scrolling, responsive mobile/desktop layouts, 3D-inspired icon surfaces, cinematic portrait treatment, animated skill/tool cards, timeline motion and resume/contact interactions.

## Required assets

Add these exact files:

public/assets/manish.jpg
public/assets/Manish_Kumar_Mishra.pdf

The code references these exact paths. Keep the filenames lowercase/case-sensitive for Vercel Linux builds.

## Local development

npm install
npm run dev

Then open http://localhost:3000.

## Production check

npm run build
npm start

## Upload assets to GitHub

1. Open https://github.com/SanFlash/portmanish
2. Create public/assets if it does not exist.
3. Upload manish.jpg.
4. Upload Manish_Kumar_Mishra.pdf.
5. Commit to main.

Or with Git:

git clone https://github.com/SanFlash/portmanish.git
cd portmanish
mkdir -p public/assets
# copy the supplied portrait and resume into public/assets
git add public/assets
git commit -m "assets: add Manish portrait and resume"
git push origin main

## Deploy on Vercel

1. Sign in to Vercel.
2. Add New Project.
3. Import SanFlash/portmanish from GitHub.
4. Framework: Next.js.
5. Build Command: npm run build.
6. Install Command: npm install.
7. No environment variables are required.
8. Deploy.

Once Git integration is enabled, pushes to main can trigger new deployments automatically.

## Important

The source code is ready, but the binary portrait/resume should be uploaded to public/assets before the first production deployment.

## Visual / motion features

- Mobile-first responsive navigation and layouts
- GSAP ScrollTrigger section reveals and timeline progress
- Lenis smooth scrolling
- 3D-inspired floating hero icons and depth card
- Perspective/tilt skill icons
- Animated tool icons
- Scroll-driven skill/tool/education/certification/contact reveals
- Reduced-motion fallback
- Optimized local portrait path: /assets/manish.jpg

