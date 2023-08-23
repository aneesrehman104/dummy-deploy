import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'SPACS HUB',
  description: 'SPACS HUB',
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
