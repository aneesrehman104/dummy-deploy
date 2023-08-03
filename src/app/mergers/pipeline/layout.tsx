import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'MERGER PIPELINE',
  description: 'MERGER PIPELINE',
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
