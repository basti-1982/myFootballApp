import './Header.css';

export default function Header({ selectedLeagueName }) {
  return (
    <header className="app-header">
      <h1>MyFootballApp</h1>
      {selectedLeagueName && <h2>{selectedLeagueName}</h2>}
    </header>
  );
}
