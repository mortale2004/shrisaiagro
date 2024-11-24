import { ReactNode } from 'react';
import LayoutProvider from './LayoutProvider';
import NextAuthProvider from './NextAuthProvider';
import ReactQueryProvider from './ReactQueryProvider';
import RecoilContextProvider from './RecoilProvider';
import AppThemeProvider from './ThemeProvider';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppThemeProvider options={{ key: 'mui-theme' }}>
      <ReactQueryProvider>
        <RecoilContextProvider>
          <NextAuthProvider>
            <LayoutProvider>{children}</LayoutProvider>
          </NextAuthProvider>
        </RecoilContextProvider>
      </ReactQueryProvider>
    </AppThemeProvider>
  );
};

export default Providers;
