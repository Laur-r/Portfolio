import "../styles/Hero.css"

export default function Hero() {

    return(
        <section className="hero">
            <div className="hero__glow"/>
            <div className="hero__content">
                <p className="hero__subtitle">FRONTEND DEVELOPER - UX/UI</p>

                <h1 className="hero__title">
                    <span className="hero__name">Laura Sofía</span>
                    <span className="hero__lastname">López</span>
                </h1>
                <div className="hero__buttons">
                <a
                    href="https://github.com/Laur-r"
                    target="_blank"
                    rel="noreferrer"
                    className="hero__btn hero__btn--primary">
                    Github
                </a>

                <a
                    href="/CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="hero__btn hero__btn--secondary">
                    CV
                </a>
                </div>
            </div>
        </section>
    )

}