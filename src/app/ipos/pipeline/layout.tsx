import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IPO PIPELINE',
  description: 'IPO PIPELINE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ width: "100%" }}>{children}</body>
    </html>
  );
}
