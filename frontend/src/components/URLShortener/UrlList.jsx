import { useState } from "react";
import { useUrl } from "../../hooks/useUrl";
import UrlItem from "./UrlItem";
import "../../styles/UrlList.css";

const UrlList = () => {
  const { urls, removeUrl } = useUrl();
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleDeleteClick = (index) => {
    setSelectedIndex(index);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (selectedIndex !== null) removeUrl(selectedIndex);
    setShowConfirm(false);
    setSelectedIndex(null);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSelectedIndex(null);
  };

  return (
    <div className="url-list-container">
      <h2>Stored URLs</h2>
      {urls.map((url, index) => (
        <div key={index} className="url-item-row">
          <UrlItem original={url.original} short={url.short} />
          <button
            className="delete-btn"
            onClick={() => handleDeleteClick(index)}
            title="Delete this URL"
          >
            Delete
          </button>
        </div>
      ))}

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <h3>Delete this URL?</h3>
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

export default UrlList;
