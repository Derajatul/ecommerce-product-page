import './globals.css'
import { Kumbh_Sans } from 'next/font/google'
import {Providers} from "./contexts/providers";
import {CartProvider} from './contexts/CartProvider'
import Nav from './components/Navbar'

const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Sneakers',
  description: 'ecommerce section page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light" >
          <Providers>
      
        <body className={kumbh.className}>
            <CartProvider>
              <header className="max-w-5xl w-full sm:mb-10">
                <Nav />
              </header>
              <main className="max-w-5xl w-full sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-32">
                {children}
              </main>
              <footer className="max-w-5xl w-full h-[60px] flex items-center justify-center mt-10">
                <p>Derajatul © 2023</p>
              </footer>
            </CartProvider>
        </body>
          </Providers>        
            
    </html>
  )
}
