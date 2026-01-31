# Frontend Ecommerce

A modern, responsive e-commerce frontend application built with the latest web technologies. This project features a sleek UI, clear navigation, and integration with essential e-commerce tools.

## 🚀 Features

- **Modern & Responsive UI**: Built with **Next.js 15** and **Tailwind CSS 4**, ensuring a fast and visually appealing experience on all devices.
- **Product Browsing**:
    - **Featured Products**: Highlight specific items on the homepage.
    - **Banners & Carousels**: Dynamic visual elements to showcase promotions (e.g., `banner-product.tsx`, `carousel-text-banner.tsx`).
    - **Category Filtering**: Helper components like `choose-gender.tsx` suggest category-based navigation.
- **Theming**: System-aware **Dark/Light mode** toggle using `next-themes` and `lucide-react` icons.
- **State Management**: utilizing **Zustand** for efficient global state handling (e.g., cart management).
- **Payment Integration**: Pre-configured with `@stripe/react-stripe-js` and `@stripe/stripe-js` for secure payment processing.
- **Component Library**: Leverages **Radix UI** primitives (Dialog, Popover, Slot, etc.) for accessible and robust interactive components.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 📦 Getting Started

### Prerequisites

Ensure you have one of the following installed:
- Node.js (Latest LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd frontend-ecommerce
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with TurboPack. |
| `npm run build` | Builds the application for production. |
| `npm run start` | Starts the production server. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## 📂 Project Structure

- `app/`: Contains the application routes and layouts (App Router).
- `components/`: Reusable UI components (Navbar, Footer, Banners, etc.).
- `components/ui/`: primitive UI components, likely Shadcn UI or similar based on Radix.
- `types/`: Type definitions (inferred).
- `public/`: Static assets like images and icons.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
