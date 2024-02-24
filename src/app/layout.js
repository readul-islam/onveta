import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "onveta",
  description: "Explore Onveta, the ultimate Tailwind design component library, featuring a comprehensive collection of forms, dividers, heroes, login pages, navbars, footers, steps, layouts, and more. Streamline your UI development process with our meticulously crafted components. Start building beautiful, responsive web interfaces effortlessly. ailwind CSS components, UI design library, Tailwind UI kit, responsive web design, UI components, Tailwind CSS forms, Tailwind dividers, Tailwind heroes, Tailwind login pages, Tailwind navbars, Tailwind footers, Tailwind steps, web development resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="../../static/favicon.ico" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
