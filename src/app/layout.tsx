import { Poppins } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"], 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(poppins.className, "bg-white text-black font-sans")}>
        {children}
      </body>
    </html>
  );
}
