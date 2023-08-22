import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IPO STATS',
  description: 'IPO STATS',
}

const RootLayout =({
  children,
}: {
  children: React.ReactNode;
})=> {
  return (
    <html lang="en">
      <body style={{ width: "100%" }}>{children}</body>
    </html>
  );
}
export default RootLayout
