import { ThemeProvider } from '@/components/theme-provider'
import ModeToggle from '@/components/color-toggle'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute top-5 right-5">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </main>
  )
}
