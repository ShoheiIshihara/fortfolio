import './globals.css'
import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ポートフォリオサイト | SHOHEI ISHIHARA',
  description: 'このサイトはSHOHEI ISHIHARAのポートフォリオサイトになります。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja" data-theme="light" >
      <body className={inter.className}>
          {children}
        </body>
    </html>
  )
}
