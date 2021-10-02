import React from 'react';
import './App.css';
import Stars from './components/Stars';

export default function App() {
  const starsCounst = [-1, 0, 5, 3, 'Олег', undefined];
  return (
    <div className="container">
      {starsCounst.map((count, index) => <Stars count={count} key={index} />)}
      {/* <Stars count={-1} />
      <Stars count={0} />
      <Stars count={5} />
      <Stars count={3} />
      <Stars count={'Олег'} />
      <Stars /> */}
    </div>
  );
}
