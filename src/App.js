import React from 'react';
import './App.css';
import Stars from './components/Stars';

export default function App() {
  return (
    <div className="container">
      <Stars count={-1} />
      <Stars count={0} />
      <Stars count={5} />
      <Stars count={3} />
      <Stars count={'Олег'} />
      <Stars />
    </div>
  );
}
