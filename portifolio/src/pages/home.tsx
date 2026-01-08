import './Home.css'
import { Techs } from '../components/techs/techs'
import { Contact } from '../components/contact/contact'

export function Home() {
  return (
    <main className="home">
      <section className="home">
        <div className="container home-grid">
          <div className="home-text">
            <span className="tag">Desenvolvedor Full Stack</span>

            <h1>
              Kauã <strong>Valladares</strong>
            </h1>

            <p>
              Desenvolvo soluções web modernas, com foco em
              clareza, performance e resultado.
            </p>

            <div className="home-buttons">
              <a className="primary" href="#projects">Projetos</a>
              <a className="secondary" href="#contact">Contato</a>
            </div>
          </div>

          <div className="home-visual" />
        </div>
      </section>

      <section className="section">
        <Techs />
      </section>

      <section className="section">
        <Contact />
      </section>
      
    </main>
  )
}
