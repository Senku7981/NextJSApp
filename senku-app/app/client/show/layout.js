import './style.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400','700'],    
    subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <h2>Something special1</h2>
      </body>
    </html>
  )
}