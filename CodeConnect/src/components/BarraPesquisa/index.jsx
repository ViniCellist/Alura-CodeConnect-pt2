import "./BarraPesquisa.css";
import { useState } from 'react';

const BarraPesquisa = () => {

    const [termoPesquisa, setTermoPesquisa] = useState("");

    return (
        <input 
            type="search" 
            placeholder="Digite o que você procura"
            className="barraPesquisa"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
        />
    );
};

export default BarraPesquisa;