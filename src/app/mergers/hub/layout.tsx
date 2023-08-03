import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'MERGER HUB',
  description: 'MERGER HUB',
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
