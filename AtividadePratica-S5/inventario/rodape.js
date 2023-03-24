/*Curso de Engenharia de Software - UniEVANGÉLICA 
  Disciplina de Programação Web 
  Dev: Carlos Eduardo Cunha Ribeiro
  DATA  23/03/2023*/
import './rodape.css';
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Sobre Nós</h3>
                        <p>
                            Somos a Family Empire, uma empresa que ajuda famílias a protegerem
                            seus bens e patrimônios através do inventário familiar.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Links Úteis</h3>
                        <ul>
                            <li>
                                <a href="/AtividadePratica-S2/Site/Index/Pagina_Inicial.html">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/AtividadePratica-S2/Site/Sobre/index.html">Sobre</a>
                            </li>
                            <li>
                                <a href="/AtividadePratica-S2/Site/inventario/index.html">
                                    Monte seu Inventário
                                </a>
                            </li>
                            <li>
                                <a href="/AtividadePratica-S2/Site/login/login.html">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Contato</h3>
                        <p>Entre em contato conosco através dos seguintes meios:</p>
                        <ul>
                            <li>Telefone: (62) 9643-8765</li>
                            <li>E-mail: contato@familyempire.com.br</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="credits">
                <p>© 2023 Family Empire - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;