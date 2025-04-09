"use client";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Provider } from "react-redux";

// import store from "@/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

interface ProvidersProps {
  children: ReactNode;
}

// const queryClient = new QueryClient();

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <AppRouterCacheProvider>
        {/* <QueryClientProvider client={queryClient}> */}
          <Provider store={store}>
            {children}
          </Provider>
        {/* </QueryClientProvider> */}
    </AppRouterCacheProvider>
  );
}
