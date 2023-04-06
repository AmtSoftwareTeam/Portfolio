import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "AMT",
  description: "Presentation Web-Page AMT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header>{children}</Header>
      </body>
    </html>
  );
}
