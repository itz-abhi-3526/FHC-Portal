// src/app/layout.tsx
import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.example.com/"),
    title: "FISAT HORIZON CLUB",
    description: "",
    generator: "Next.js",
    applicationName: "Portfolio template",
    keywords: [
        "Portfolio template",
        "FHC",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",

    // ⭐ Added favicon/icons here
    icons: {
        icon: "https://media.licdn.com/dms/image/v2/D560BAQESeCGh7kA2rw/company-logo_200_200/company-logo_200_200/0/1729648208598?e=2147483647&v=beta&t=AmleqeqoD8UlPDLH4ku-IqS4AYRXKMAWIngLMsYv-38",
        shortcut:
            "https://media.licdn.com/dms/image/v2/D560BAQESeCGh7kA2rw/company-logo_200_200/company-logo_200_200/0/1729648208598?e=2147483647&v=beta&t=AmleqeqoD8UlPDLH4ku-IqS4AYRXKMAWIngLMsYv-38",
        apple:
            "https://media.licdn.com/dms/image/v2/D560BAQESeCGh7kA2rw/company-logo_200_200/company-logo_200_200/0/1729648208598?e=2147483647&v=beta&t=AmleqeqoD8UlPDLH4ku-IqS4AYRXKMAWIngLMsYv-38",
    },

    openGraph: {
        title: "FHC PORTAL",
        description: "",
        url: "",
        siteName: "",
        images: [
            {
                url: "https://media.licdn.com/dms/image/v2/D560BAQESeCGh7kA2rw/company-logo_200_200/company-logo_200_200/0/1729648208598?e=2147483647&v=beta&t=AmleqeqoD8UlPDLH4ku-IqS4AYRXKMAWIngLMsYv-38",
                width: 1200,
                height: 630,
                alt: "",
            },
        ],
        locale: "en-US",
        type: "website",
    },
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
