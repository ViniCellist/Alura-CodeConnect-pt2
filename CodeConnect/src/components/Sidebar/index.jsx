import './Sidebar.css';
import Logo from '../../assets/sidebar_imgs/Logo.svg';
import Feed from '../../assets/sidebar_imgs/feed.svg';
import Info from '../../assets/sidebar_imgs/info.svg';
import Logout from '../../assets/sidebar_imgs/logout.svg';
import Account from '../../assets/sidebar_imgs/account_circle.svg';

const Sidebar = () => {
    return (
        <aside className="barraLateral">
            <img src={Logo} alt="Logo do CodeConnect" />
            <nav>
                <ul className="ListaBarraLateral">
                    <li>
                        <a href="#" className="BotaoPublicaBarraLateral">Publicar</a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Feed} alt='Icone de feed, redireciona para o feed' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Account} alt='Icone de Perfil, redireciona para o perfil' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Info} alt='Icone de informação, clique para saber mais sobre nós' />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Logout} alt='Icone de logout, clique para deslogar' />
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;