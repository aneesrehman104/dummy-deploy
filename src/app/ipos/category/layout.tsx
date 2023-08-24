import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'IPO Category',
  description: 'IPO Category',
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
