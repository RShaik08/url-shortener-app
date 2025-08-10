import React, { useState } from 'react';
import axios from 'axios';

const ShortenerForm = ({ setShortenedUrl }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
      setShortenedUrl(`http://localhost:5000/${res.data.shortCode}`);
    } catch (err) {
      console.error(err);
      alert('Error shortening URL. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="shortener-form-container">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a long URL here"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten URL'}
        </button>
      </form>
    </div>
  );
};

export default ShortenerForm;