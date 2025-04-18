import type { Metadata } from 'next'
import './globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const metadata: Metadata = {
    title: '城轨事业部数据中台',
    description: 'Generated by 城轨事业部精益信息化组',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>{children}</body>
        </html>
    )
}
