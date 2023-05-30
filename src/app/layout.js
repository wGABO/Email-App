import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "MailBox",
  description: "Projeto MailBox - NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
