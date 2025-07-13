import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../lib/wagmi.config';

import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
// import '../styles/globals.css';
import { cn } from '../lib/utils';
// import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster as Sonner } from '../components/ui/sonner';
import { Toaster } from '../components/ui/toaster';
import { ThemeProvider } from '../contexts/theme-provider';
import { MainNavigation } from '../components/shared/main-navigation';
import { Web3Provider } from '../contexts/web3-provider';
import { DataProvider } from '../contexts/data-provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Chiliz Got Talent',
  description: 'Chiliz Got Talent',
};


const client = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
     >        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <RainbowKitProvider>
            <MainNavigation>
              <Component {...pageProps} />
              </MainNavigation>
              <Sonner
                toastOptions={{
                  classNames: {
                    info: 'dark:bg-gray-700 dark:text-white bg-gray-200',
                    error: 'dark:bg-red-700 dark:text-white bg-red-500',
                    success: 'dark:bg-green-700 dark:text-white bg-green-400',
                  },
                  duration: 4000,
                }}
              />
              <Toaster />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      </ThemeProvider>
    </body>
  );
}

export default MyApp;
