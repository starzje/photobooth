"use client";

// components/CookieConsentManager.tsx
import CookieConsentBar from "@/app/CookieConsentBar";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import React, { useState, useEffect } from "react";

const CookieConsentManager: React.FC = () => {
  const [showConsent, setShowConsent] = useState<boolean>(false);

  useEffect(() => {
    // Check for existing consent in local storage or cookies
    const storedConsent = localStorage.getItem("cookieConsent");
    if (!storedConsent) {
      // If there's no stored consent, show the consent banner
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    setShowConsent(false); // Hide the consent banner
    localStorage.setItem("cookieConsent", "true");
  };

  const handleDecline = () => {
    setShowConsent(false); // Hide the consent banner
    localStorage.setItem("cookieConsent", "false");
  };

  return (
    <>
      {showConsent && <CookieConsentBar onAccept={handleAccept} onDecline={handleDecline} />}
      {showConsent ? null : <GoogleAnalytics />}
    </>
  );
};

export default CookieConsentManager;
