import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="6698w541r" data-path="src/App.tsx">
    <LanguageProvider data-id="nfw9khn34" data-path="src/App.tsx">
      <TooltipProvider data-id="7771mepnc" data-path="src/App.tsx">
        <Toaster data-id="5d86dw88r" data-path="src/App.tsx" />
        <BrowserRouter data-id="ghbo5jiq9" data-path="src/App.tsx">
          <Routes data-id="bvj2c5y98" data-path="src/App.tsx">
            <Route path="/" element={<HomePage data-id="48ajhyt7i" data-path="src/App.tsx" />} data-id="8czqznrjb" data-path="src/App.tsx" />
            <Route path="/checkout" element={<CheckoutPage data-id="0ri652wdh" data-path="src/App.tsx" />} data-id="pj8rlihm2" data-path="src/App.tsx" />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound data-id="25duq7ufv" data-path="src/App.tsx" />} data-id="3o5tpurnj" data-path="src/App.tsx" />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>;


export default App;