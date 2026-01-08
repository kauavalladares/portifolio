import './Header.css'

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">Kauã Valladares</h1>

      <nav>
        <ul className="menu">
          <li>Home</li>
          <li>Projetos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  )
}
