import React from 'react'
import { Body } from './styles'
import imgCadastro from '../../image/undraw_Preferences_re_49in.svg';
import imgCarrinho from '../../image/carrinho.svg';
import imgEstoque from '../../image/estoque.svg';
import imgCliente from '../../image/clientes.svg';
import imgProduto from '../../image/produto.svg';
import imgRelatorio from '../../image/relatorio.svg';

import enfeite from '../../image/melhores-tecnologias.svg';

import logomarca from '../../image/logomarca.png';

const DashBoard: React.FC = () => {

    const cartoes = [
        {
            href: "/cadastro",
            src: imgCadastro,
            altimg: "Cadastros",
            p: "Telas de Cadastros"
        },
        {
            href: "/PDV",
            src: imgCarrinho,
            altimg: "PDV",
            p: "Fazer Vendas"
        },
        {
            href: "/clientes",
            src: imgCliente,
            altimg: "Clientes",
            p: "Clientes Cadastrados"
        },
        {
            href: "/produto",
            src: imgProduto,
            altimg: "Produtos",
            p: "Produtos Cadastrados"
        },
        {
            href: "/estoque",
            src: imgEstoque,
            altimg: "Estoque",
            p: "Gerencia de Estoque"
        },
        {
            href: "/relatorio",
            src: imgRelatorio,
            altimg: "relatorio",
            p: "Diversos Relatórios"
        },

    ]

    return (
        <Body>

            <header>
                <div className="container">
                    <img
                        src={logomarca}
                        alt="CRT Sistemas"
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
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Suporte</a>
                                </li>
                                <li>
                                    <a href="#">Financeiro</a>
                                </li>
                                <li>
                                    <a href="#">Comercial</a>
                                </li>
                                <li>
                                    <a href="#">Minha Conta</a>
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
                            A melhor tecnologia em sistema de automação comercial, direto ao ponto e do jeito
                            certo.
                         </h2>
                        <p>
                            Suporte Fortaleza:
                        </p>
                        <p>
                            (85)98220 5730
                            (85)98169 2891
                            (85)99695 5644
                            (85)98956 0209
                            (85)98601 8630
                        </p>
                        <p>
                            Suporte Interior:
                        </p>
                        <p>
                            (88)99710 6823
                            (88)99349 9184

                        </p>
                        <h4>ESCOLHA UMA DAS OPÇÕES ABAIXO PARA MEXER NO SISTEMA:</h4>
                    </div>
                    <img
                        src={enfeite}
                        alt=""
                    />

                </div>




            </section>

            <main>
                <section className="cards">
                    {cartoes.map(cartao => (
                        <a id="linkCard" href={cartao.href}>
                            <div className="card">
                                <div className="image">
                                    <img src={cartao.src} alt={cartao.altimg} />

                                </div>
                                <div className="content">
                                    <p className="title text--medium">{cartao.p}</p>

                                </div>
                            </div>
                        </a>
                    ))}


                </section>

            </main>
            <script src="./scripts.js"></script>
        </Body>
    )
}
export default DashBoard

