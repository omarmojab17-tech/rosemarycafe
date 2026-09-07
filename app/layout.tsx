import type { Metadata } from "next";
import "@fontsource-variable/alexandria";
import "./globals.css";

import { MobileQuickBar } from "@/components/MobileQuickBar";

export const metadata: Metadata = {
  title: {
    default: "Rosemary Café | Jenin",
    template: "%s | Rosemary Café",
  },
  description:
    "Rosemary Café in Jenin — specialty coffee, cold drinks, shisha and desserts in Al-Zahra.",
  metadataBase: new URL("https://rosemary-cafe-jenin.semific12345.chatgpt.site"),
  openGraph: {
    title: "Rosemary Café | Jenin",
    description: "Specialty coffee, cold drinks, shisha and desserts in Al-Zahra, Jenin.",
    images: ["/images/interior-main.jpeg"],
    locale: "en_US",
    type: "website",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Rosemary Café",
  image: "https://rosemary-cafe-jenin.semific12345.chatgpt.site/images/interior-main.jpeg",
  url: "https://rosemary-cafe-jenin.semific12345.chatgpt.site",
  telephone: "+972597827725",
  priceRange: "₪₪",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al-Zahra Neighbourhood, Opposite Traffic Department",
    addressLocality: "Jenin",
    addressCountry: "PS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.465329,
    longitude: 35.290959,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "00:00",
    },
  ],
  servesCuisine: ["Coffee", "Desserts", "Shisha", "Cold Beverages"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <MobileQuickBar />
      </body>
    </html>
  );
}
