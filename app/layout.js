import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Yogures de Anita",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
