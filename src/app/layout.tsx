import "./globals.css";

export const metadata = {
  title: "NailIB | The Largest IB Resource Platform on Earth",
  description: "IB resources, videos, flashcards and practice questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
