import '@mantine/core/styles.css';
//
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/utils/theme';
import { AppLayout } from '@/layouts';

export { ColorSchemeScript } from '@mantine/core';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My awesome app</title>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppLayout>{children}</AppLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
