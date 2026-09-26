import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeLoader from "./themes/ThemeLoader";
import NotFound from "./pages/NotFound";

const Admin = lazy(() => import("./pages/Admin"));

/** Toaster/Sonner/TooltipProvider/react-query were wired here for every
 * route despite having zero use outside the lazy-loaded /admin editors
 * (which render their own Toaster+Sonner) — moved out to keep the main
 * themed page's bundle to what it actually uses. */
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ThemeLoader />} />
      <Route
        path="/admin"
        element={
          <Suspense fallback={null}>
            <Admin />
          </Suspense>
        }
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
