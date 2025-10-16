import "../../styles/UrlItem.css";

const UrlItem = ({ original, short }) => {
  return (
    <div className="url-item-content">
      <p className="original-text">
        Original: <span>{original}</span>
      </p>
      <br></br>
      <p className="short-text">
        Shortened URL:{" "}
        <a href={original} target="_blank" rel="noreferrer">
          {short}
        </a>
      </p>
    </div>
  );
};

export default UrlItem;
