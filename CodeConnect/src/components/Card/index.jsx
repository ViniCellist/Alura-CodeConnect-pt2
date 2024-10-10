import Code from "../../assets/card_imgs/code.svg";
import Chat from "../../assets/card_imgs/chat.svg";
import Share from "../../assets/card_imgs/share.svg";
import "./Card.css";

const Card = ({
    id, 
    imagemUrl, 
    titulo, 
    resumo, 
    linhasDeCodigo, 
    compartilhamentos, 
    comentarios, 
    usuario
}) => {

    return (
        <article className="card">
            <div className="cardImagem">
                <img src={imagemUrl} alt="Imagem do post" />
            </div>
            <div className="cardConteudo">
                <div className="cardConteudoTexto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>
                <div className="conteudoRodape">
                    <ul>
                        <li>
                            <img src={Code} alt="Códigos" />
                            {linhasDeCodigo}
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            {compartilhamentos}
                        </li>
                        <li>
                            <img src={Chat} alt="Comentários" />
                            {comentarios}
                        </li>
                    </ul>
                    <div className="rodaUsuario">
                        <img src={usuario.imagem} alt="Imagem do usuario" />
                        {usuario.nome}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Card;