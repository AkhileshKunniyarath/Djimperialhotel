import './globals.css'

export const metadata = {
    title: 'DJ Imperial Suites | Luxury Stay in Sasthamangalam',
    description: 'DJ Imperial Suites offers premium accommodation in the heart of Sasthamangalam, Thiruvananthapuram with 15 luxury suites and Food Book Restaurant.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="app-wrapper">
                    {children}
                </div>
            </body>
        </html>
    )
}
