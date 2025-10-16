import { useState, useEffect } from "react";
import InputSection from "../components/URLShortener/InputSection";
import UrlList from "../components/URLShortener/UrlList";
import "../styles/UrlShortener.css";

const UrlShortener = () => {
  const [urls, setUrls] = useState([]);

  // Load stored URLs from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("urls");
    if (stored) setUrls(JSON.parse(stored));
  }, []);

  // Save URLs to localStorage whenever list changes
  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(urls));
  }, [urls]);

  // Function to clear all URLs
  const handleClear = () => {
    if (window.confirm("Are you sure you want to delete all stored URLs?")) {
      setUrls([]);
      localStorage.removeItem("urls");
    }
  };

  return (
    <div className="url-shortener-container">
      <div className="url-shortener-box">
        <h1>URL Shortener</h1>
        <InputSection setUrls={setUrls} />
        <UrlList urls={urls} />
      </div>
    </div>
  );
};

export default UrlShortener;
