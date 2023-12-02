import '../style/PerguntasAvaliacao.css';
import { useState } from 'react';
import { useLocation  } from 'react-router-dom';
import Star from './Star';
import blogFetch from '../axios/config';

const items = [...(new Array(5).keys())].map(index => index + 1);
const items1 = [...(new Array(5).keys())].map(index => index + 1);
const items2 = [...(new Array(5).keys())].map(index => index + 1);


const PerguntasAvaliacao = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idDoPedido = params.get('idCliente');
  const idDoRestaurante = params.get('idRestaurante');
  const nomeRestaurante = params.get('nomeRestaurante');
  
  const [avalEntregador, setAvalEntregador] = useState('');
  const [avalPedido, setAvalPedido] = useState('');
  const [avalRestaurante, setAvalRestaurante] = useState('');
  const [avalEntregadorStay, setAvalEntregadorStay] = useState('');
  const [avalPedidoStay, setAvalPedidoStay] = useState('');
  const [avalRestauranteStay, setAvalRestauranteStay] = useState('');

  const [activeIndex, setActiveIndex] = useState();
  const [activeIndex1, setActiveIndex1] = useState();
  const [activeIndex2 ,setActiveIndex2] = useState();

  const onClickStar1 = (index) => {
    setActiveIndex(index);
    setAvalEntregadorStay(index);
  };
  
  const onClickStar2 = (index) => {
    setActiveIndex1(index);
    setAvalPedidoStay(index);
  };
  
  const onClickStar3 = (index) => {
    setActiveIndex2(index);
    setAvalRestauranteStay(index);
  };

  const dataAvaliacao = {
    idDoPedido,
    idDoRestaurante,
    nomeRestaurante,
    avaliacaoDoEntregador: {
      comentario: avalEntregador,
      estrelas: avalEntregadorStay,
    },
    avaliacaoDoPedido: {
      comentario: avalPedido,
      estrelas: avalPedidoStay,
    },
    avaliacaoDoRestaurante: {
      comentario: avalRestaurante,
      estrelas: avalRestauranteStay,
    },
  };

  const PostarAvaliacao = () => {
    blogFetch.post("avaliacao", dataAvaliacao)
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
      <h2>numero no pedido: {idDoPedido}</h2>
      <h2>Como gostaria de avaliar nosso entregador ?</h2>

      <div className="form-floating">

        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setAvalEntregador(e.target.value)}></textarea>
        <label htmlFor="floatingTextarea" >Comments</label>

        <div className="container">
          {items.map((index) => (
            <Star
              onClick={() => onClickStar1(index)}
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
              onClick={() => onClickStar2(index)}
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
              onClick={() => onClickStar3(index)}
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