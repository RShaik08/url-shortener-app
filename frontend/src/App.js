import React, { useState } from 'react';
import ShortenerForm from './components/ShortenerForm';
import ShortenedUrlDisplay from './components/ShortenedUrlDisplay';
import './App.css'; 

function App() {
  const [shortenedUrl, setShortenedUrl] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <ShortenerForm setShortenedUrl={setShortenedUrl} />
        {shortenedUrl && <ShortenedUrlDisplay shortenedUrl={shortenedUrl} />}
      </header>
    </div>
  );
}

export default App;