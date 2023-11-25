import '../style/PerguntasAvaliacao.css';
import { useState } from 'react';
import { useLocation  } from 'react-router-dom';
import Star from './Star';
import axios from 'axios';

const items = [...(new Array(5).keys())];
const items1 = [...(new Array(5).keys())];
const items2 = [...(new Array(5).keys())];

const PerguntasAvaliacao = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idCliente = params.get('idCliente');
  
  const dataHoraAtual = new Date();

  const [avalEntregador, setAvalEntregador] = useState('');
  const [avalEntregadorStay] = useState('');
  const [avalPedido, setAvalPedido] = useState('');
  const [avalPedidoStay] = useState('');
  const [avalRestaurante, setAvalRestaurante] = useState('');
  const [avalRestauranteStay] = useState('');

  const [activeIndex, setActiveIndex] = useState();
  const [activeIndex1] = useState();
  const [activeIndex2] = useState();

  const onClickStar = (index, setAvalStay) => {
    setActiveIndex(index);
    setAvalStay(index);
  };

  const dataAvaliacao = {
    idCliente,
    dataHoraAtual,
    entregador: {
      comentario: avalEntregador,
      avaliacao: avalEntregadorStay,
    },
    pedido: {
      comentario: avalPedido,
      avaliacao: avalPedidoStay,
    },
    restaurante: {
      comentario: avalRestaurante,
      avaliacao: avalRestauranteStay,
    },
  };

  const PostarAvaliacao = () => {
    axios.post("avaliacao", dataAvaliacao)
      .then((response) => {
        console.log("POST request success:", response.data);
      })
      .catch((error) => {
        console.error("POST request error:", error);
      });
  };

  return (

    
    <div className='input-text'>


      <h1> Pede aí </h1>
      <h2>numero no pedido: {idCliente}</h2>
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
              onClick={() => onClickStar(index)}
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
              onClick={() => onClickStar(index)}
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