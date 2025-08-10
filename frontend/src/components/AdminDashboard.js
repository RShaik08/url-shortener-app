import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/urls');
        setUrls(res.data);
      } catch (err) {
        console.error('Failed to fetch URLs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Visits</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>{url.originalUrl}</td>
              <td>
                <a href={`http://localhost:5000/${url.shortCode}`} target="_blank" rel="noopener noreferrer">
                  {`http://localhost:5000/${url.shortCode}`}
                </a>
              </td>
              <td>{url.visits}</td>
              <td>{new Date(url.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;