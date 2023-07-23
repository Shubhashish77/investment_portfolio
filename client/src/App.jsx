import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";


import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Trending from "./pages/Trending";
import Coins from "./pages/Coins";
import CoinsDetail from "./pages/CoinsDetail";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
            <Route path="trending" element={<Trending />} />
            <Route path="coins" element={<Coins />} />
            <Route path="coins/:coinId" element={<CoinsDetail />} />
          </Route>
          <Route path="login" element={<h1>Login</h1>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)"
          }
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
