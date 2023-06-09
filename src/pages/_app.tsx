import { theme } from '@/styles/theme'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
