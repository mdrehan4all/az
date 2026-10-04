import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InvitationPage } from "../src/components/invitation/InvitationPage";
import { AuthProvider } from "../src/lib/auth/provider";
import "../src/styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("SPA root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <AuthProvider>
      <InvitationPage />
    </AuthProvider>
  </StrictMode>,
);