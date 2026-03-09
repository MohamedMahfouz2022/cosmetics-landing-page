import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "عناية جمالك | أفضل مستحضرات التجميل والعناية بالبشرة",
  description: "اكتشفي سر جمالك الطبيعي مع مجموعتنا الفاخرة من مستحضرات التجميل والعناية بالبشرة المصنوعة من مكونات طبيعية وآمنة 100%.",
  keywords: ["عناية بالبشرة", "مستحضرات تجميل", "سيروم", "كريم مرطب", "عطور", "طبيعي", "جمال"],
  authors: [{ name: "عناية جمالك" }],
  openGraph: {
    title: "عناية جمالك | أفضل مستحضرات التجميل",
    description: "اكتشفي سر جمالك الطبيعي مع مجموعتنا الفاخرة من مستحضرات التجميل والعناية بالبشرة.",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
