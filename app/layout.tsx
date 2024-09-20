import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins instead of Inter
import "./globals.css";
import { ThemeProvider } from "./provider";

// Load Poppins font with desired subsets and weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Specify weights as needed
});

export const metadata: Metadata = {
  title: "Prakhar's Portfolio",
  description: "Explore more about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
