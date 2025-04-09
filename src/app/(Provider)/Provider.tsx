"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";

import store from "@/store/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <AppRouterCacheProvider>
          <Provider store={store}>
            {children}
          </Provider>
    </AppRouterCacheProvider>
  );
}
