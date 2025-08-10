import React from 'react';

const ShortenedUrlDisplay = ({ shortenedUrl }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="shortened-url-display">
      <p>Your shortened URL is:</p>
      <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
        {shortenedUrl}
      </a>
      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default ShortenedUrlDisplay;