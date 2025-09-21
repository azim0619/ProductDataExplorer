export const metadata = {
  title: "Product Data Explorer",
  description: "Explore products with categories and details",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
