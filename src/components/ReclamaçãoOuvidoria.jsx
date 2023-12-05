import "../style/ReclamacaoOuvidoria.css"
import { useState } from "react";
import blogFetch from "../axios/config";
const ReclamaçãoOuvidoria = () => {

    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const PostarAvaliacao = () => {

        const data = {
            email,
            nome,
            descricao
        };

        blogFetch.post("ouvidoria", data)
            .then((response) => {
                console.log("POST request success:", response.data);
            })
            .catch((error) => {
                console.error("POST request error:", error);
            });

        console.log(data)
    };


    return (
        <div className='input-text'>


            <h1> Pede aí </h1>

            <div className="mb-3">
                <label form="exampleFormControlInput1" className="form-label">Digite seu Email </label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label form="exampleFormControlInput1" className="form-label">Digite seu nome</label>
                <input type="Name" className="form-control" id="exampleFormControlInput1" placeholder="name" onChange={(e) => setNome(e.target.value)}/>
            </div>

            <h2>Qual o motivo da sua reclamação ?</h2>

            <div className="form-floating">

                <div className="mb-3">
                    <label form="exampleFormControlTextarea1" className="form-label"></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setDescricao(e.target.value)}></textarea>
                </div>


            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" onClick={PostarAvaliacao} >Enviar</button>
            </div>

            <h1> Pede aí </h1>
            <h2>Agradece sua compreensão</h2>
            <h2>Retornaremos o mais breve possível</h2>

        </div>
    )
}

export default ReclamaçãoOuvidoria