import {useState} from "react"
import '../styles/Navbar.css'

const navLinks =[
    { label: "Inicio", href: "#hero"},
    { label: "Sobre mi", href: "#about"},
    { label: "Proyectos", href: "#projects"},
    { label: "Contacto", href: "#contact"}
]

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
          <header className="navbar">
            <a className="navbar_logo" href="#">
                <img src="logo-lsl.png" alt="LSL" className="navbarLogo-img"/>
            </a>
              <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
              ))}
            </nav>
            <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
              >
                {menuOpen ? "✕" : "☰"}
            </button>
          </header>

    )
}