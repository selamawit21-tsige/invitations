import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: 'white' }}>
        {children}
      </body>
    </html>
  )
}export const metadata = {
  title: 'Invite Smart | Digital Invitations for Selam Girls Beauty Corner',
  description: 'Experience the future of event invitations. Live countdowns, interactive maps, and elegant designs for the Selam Girls Grand Opening.',
  keywords: ['Digital Invitation', 'Addis Ababa Beauty', 'Selam Girls', 'Invite Smart', 'Next.js Developer'],
  openGraph: {
    title: 'Invite Smart - Selam Girls Grand Opening',
    description: 'You are cordially invited to our beauty sanctuary.',
    url: 'https://your-link.vercel.app',
    images: [
      {
        url: '/og-image.png', // Create a simple 1200x630 image of your site
        width: 1200,
        height: 630,
      },
    ],
  },
};