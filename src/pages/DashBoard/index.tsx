import React from 'react'
import { Body } from './styles'
import imgCadastro from '../../image/undraw_Add_files_re_v09g.svg';


const DashBoard: React.FC = () => {
    return (
        <Body>

            <header>
                <div className="container">
                    <img
                        src={require("../../image/cadastro.jpg")}
                        alt="Rocketseat"
                    />
                    <div className="menu-section">
                        <div className="menu-toggle">
                            <div className="one"></div>
                            <div className="two"></div>
                            <div className="three"></div>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">Starter</a>
                                </li>
                                <li>
                                    <a href="#">Bootcamp</a>
                                </li>
                                <li>
                                    <a href="#">Comunidade</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <section className="hero">
                <div className="container">
                    <div>
                        <h2>
                            As melhores tecnologias em programação, direto ao ponto e do jeito
                            certo.
                        </h2>
                        <p>
                            No meio de tanta informação e da quantidade de ferramentas que
                            surgem todos os dias, você precisa de alguém que te leve na direção
                            certa.
                        </p>
                        <a href="#" className="button">Quero embarcar neste foguete!</a>
                    </div>
                    <img
                        src="../../images/melhores-tecnologias.svg"
                        alt=""
                    />
                </div>
            </section>

            <main>
                <section className="cards">
                    <div className="card">
                        <div className="image">
                            <img src={imgCadastro} alt="Teste" />
                        </div>
                        <div className="content">
                            <p className="title text--medium">

                            </p>
                            <h1>TELA DE CADASTROS</h1>

                        </div>
                    </div>
                </section>

            </main>
        </Body>
    )
}
export default DashBoard

