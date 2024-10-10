import Capa from "../../assets/card_imgs/capa1.svg";
import Code from "../../assets/card_imgs/code.svg";
import Chat from "../../assets/card_imgs/chat.svg";
import Share from "../../assets/card_imgs/share.svg";
import Icone from "../../assets/card_imgs/avatar.svg";

const Card = () => {
    return (
        <article className="card">
            <div className="cardImagem">
                <img src={Capa} alt="Imagem do post" />
            </div>
            <div className="cardConteudo">
                <div className="cardConteudoTexto">
                    <h3>Título do post</h3>
                    <p>Resumo do post</p>
                </div>
                <div>
                    <ul>
                        <li>
                            <img src={Code} alt="Códigos" />
                            100
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            12
                        </li>
                        <li>
                            <img src={Chat} alt="Comentários" />
                            10
                        </li>
                    </ul>
                    <div className="rodaUsuario">
                        <img src={Icone} alt="Imagem do usuario" />
                        @vini
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;