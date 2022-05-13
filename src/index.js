import React from 'react'
import App from './App';
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "react-query";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const queryClient = new QueryClient();


root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);