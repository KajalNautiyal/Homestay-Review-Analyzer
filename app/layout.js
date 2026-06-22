import "./globals.css";

export const metadata = {
  title: "Homestay Review Analyzer",
  description: "Analyze homestay reviews using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}