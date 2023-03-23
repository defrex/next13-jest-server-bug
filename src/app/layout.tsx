import "./globals.css";
import "server-only";

export async function getLayoutData() {
  return {
    isData: true,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getLayoutData();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
