import 'src/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import Layout from 'src/components/common/layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import { ThemeProvider } from '@mui/material';
import { theme } from 'src/components/common/theme/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      suspense: true,
    },
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Layout>
        <QueryErrorBoundary>{page}</QueryErrorBoundary>
      </Layout>
    ));

  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
