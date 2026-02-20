import "./globals.css";
import {Newsreader, Nunito_Sans } from 'next/font/google'

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Yogures de Anita",
};

const newsreader = Newsreader({
  subsets: ['latin']
});

const nunito = Nunito_Sans({
  subsets: ['latin']
});

export default function RootLayout({ children }) {
  return (
    <html className={`${newsreader.className} ${nunito.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
