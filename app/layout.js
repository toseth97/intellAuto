import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "Intell Automated Systems",
    description: "Better Solutions For Your Business",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${inter.variable} ${poppins.variable} font-sans`}
                suppressHydrationWarning={true}
            >
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
