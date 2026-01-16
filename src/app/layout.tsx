import "./globals.css";

export const metadata = {
  title: "Nail IB | The Gold Standard for IB Excellence",
  description: "IB resources, videos, flashcards and practice questions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
