import '../styles/globals.css';

export const metadata = {
  title: 'Digital Technologies Learning Platform',
  description:
    'Offline-capable lesson platform for Nigerian SS1 and SS2 Digital Technologies students.',
  manifest: '/manifest.json',
  themeColor: '#0d47a1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DT Platform',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d47a1" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body>
        <div className="app-shell">
          <header className="app-header">
            <h1>
              <a href="/">DT Platform</a>
            </h1>
            <a href="/teacher/">Teacher</a>
          </header>
          <main>{children}</main>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(e) {
                    console.warn('SW registration failed', e);
                  });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
