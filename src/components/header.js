import "../styles/header.css"

export default function Header() {
  return (
    <header>
      <img src="/logo.png" alt="Logo" />
      <nav className="container-nav-links-header">
        <ul className="nav-links-header">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Lab</a></li>
        </ul>
      </nav>
    </header>
  );
}