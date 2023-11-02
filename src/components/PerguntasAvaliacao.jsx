import '../style/PerguntasAvaliacao.css';
import { useState } from 'react';

import Star from './Star';
import axios from 'axios';

const items = [...(new Array(5).keys())];
const items1 = [...(new Array(5).keys())];
const items2 = [...(new Array(5).keys())];



const PerguntasAvaliacao = () => {

  const [avalEntregador, setAvalEntregador] = useState('');
  const [avalEntregadorStay, setAvalEntregadorStay] = useState('');
  const [avalPedido, setAvalPedido] = useState('');
  const [avalPedidoStay, setAvalPedidoStay] = useState('');
  const [avalRestaurante, setAvalRestaurante] = useState('');
  const [avalRestauranteStay, setAvalRestauranteStay] = useState('');

  const [activeIndex, setActiveIndex] = useState();
  const [activeIndex1, setActiveIndex1] = useState();
  const [activeIndex2, setActiveIndex2] = useState();

  const onClickStar = (index) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
    setAvalEntregadorStay(index)
    console.log(index);
  };
  const onClickStar1 = (index) => {
    setActiveIndex1((oldState) => (oldState === index ? undefined : index));
    setAvalPedidoStay(index)
  };
  const onClickStar2 = (index) => {
    setActiveIndex2((oldState) => (oldState === index ? undefined : index));
    setAvalRestauranteStay(index)
  };

  const PostarAvaliacao = () => {

    const data = {
      avalEntregador,
      avalEntregadorStay,
      avalPedido,
      avalPedidoStay,
      avalRestaurante,
      avalRestauranteStay,
    };

    axios.post("avaliacao", data)
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

      <h2>Como gostaria de avaliar nosso entregador ?</h2>

      <div className="form-floating">

        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setAvalEntregador(e.target.value)}></textarea>
        <label htmlFor="floatingTextarea" >Comments</label>

        <div className="container">
          {items.map((index) => (
            <Star
              onClick={() => onClickStar(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex}
            />
          ))}
        </div>

      </div>

      <h2>Como estava o seu pedido ?</h2>

      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setAvalPedido(e.target.value)}></textarea>
        <label htmlFor="floatingTextarea" >Comments</label>

        <div className="container">
          {items1.map((index) => (
            <Star
              onClick={() => onClickStar1(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex1}
            />
          ))}
        </div>

      </div>

      <h2>Como gostaria de avaliar nosso Restaurante ?</h2>

      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setAvalRestaurante(e.target.value)}></textarea>
        <label htmlFor="floatingTextarea"  >Comments</label>

        <div className="container">
          {items2.map((index) => (
            <Star
              onClick={() => onClickStar2(index)}
              key={`star_${index}`}
              isActive={index <= activeIndex2}
            />
          ))}
        </div>

      </div>

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={PostarAvaliacao}>Enviar</button>
      </div>

      <h1> Pede aí </h1>
      <h2>Agradece sua Avalição e Preferencia</h2>
      <h2>Volte sempre</h2>

      <a href="/ouvidoria" className='script-Ouvidoria'>Envie uma mensagem para ouvidoria.</a>


    </div>
  )
}

export default PerguntasAvaliacao