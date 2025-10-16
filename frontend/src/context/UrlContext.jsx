import { createContext, useState, useEffect } from "react";

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  // Load immediately from localStorage (no delay, no bullshit)
  const storedUrls = JSON.parse(localStorage.getItem("urls")) || [];
  const [urls, setUrls] = useState(storedUrls);

  // Always save to localStorage whenever urls change
  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(urls));
  }, [urls]);

  // Add URL
  const addUrl = (original, short) => {
    const newUrls = [...urls, { original, short }];
    setUrls(newUrls);
    localStorage.setItem("urls", JSON.stringify(newUrls));
  };

  // Remove one URL
  const removeUrl = (index) => {
    const updated = urls.filter((_, i) => i !== index);
    setUrls(updated);
    localStorage.setItem("urls", JSON.stringify(updated));
  };

  // Clear all URLs
  const clearUrls = () => {
    setUrls([]);
    localStorage.removeItem("urls");
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, removeUrl, clearUrls }}>
      {children}
    </UrlContext.Provider>
  );
};
