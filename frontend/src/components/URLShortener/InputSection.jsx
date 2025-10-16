import { useState } from "react";
import axios from "axios";
import { useUrl } from "../../hooks/useUrl";
import "../../styles/InputSection.css";

const InputSection = () => {
  const [input, setInput] = useState("");
  const { addUrl, clearUrls } = useUrl();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleShorten = async () => {
    if (!input) return;

    try {
      const res = await axios.post("http://localhost:5000/api/shorten", {
        originalUrl: input,
      });
      const short = res.data.shortUrl;
      addUrl(input, short);
      setInput("");
    } catch (err) {
      console.error("Error shortening the URL", err);
    }
  };

  const handleDeleteAll = () => setShowConfirm(true);
  const confirmDelete = () => {
    clearUrls();
    setShowConfirm(false);
  };
  const cancelDelete = () => setShowConfirm(false);

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="input-buttons">
        <button onClick={handleShorten}>Shorten</button>
        <button onClick={handleDeleteAll}>Delete All</button>
      </div>

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <h3>Delete all URLs?</h3>
            <p>This action cannot be undone.</p>
            <div className="confirm-buttons">
              <button className="confirm-yes" onClick={confirmDelete}>
                Yes, delete
              </button>
              <button className="confirm-cancel" onClick={cancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputSection;
