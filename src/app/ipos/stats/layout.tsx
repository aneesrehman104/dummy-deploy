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
    <>{ children }</>
  );
}
export default RootLayout
