import React, { useEffect, useState } from 'react';
import './UserPreferences.css';

const UserPreferences = () => {
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Retrieve preferences from local storage on mount
    const storedName = localStorage.getItem('name');
    const storedTheme = localStorage.getItem('theme');
    if (storedName) setName(storedName);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const clearPreferences = () => {
    setName('');
    setTheme('light');
    localStorage.removeItem('name');
    localStorage.removeItem('theme');
  };

  return (
    <div className={`user-preferences ${theme}`}>
      <h2>User Preferences</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={clearPreferences}>Clear Preferences</button>
      <p>Hello, {name ? name : 'Guest'}!</p>
    </div>
  );
};

export default UserPreferences;
