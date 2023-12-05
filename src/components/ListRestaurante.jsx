import  { useState } from 'react';
import '../style/ListRestaurante.css';
import blogFetch from '../axios/config';
import DataTable from  'react-data-table-component';

const ListRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState([]); 
  const [restaurante, setRestaurante] = useState('');

  const buscarRest = () => {

    if(restaurante === '' ){
      alert('Preencha o campo do restaurante.');
    }else{
      
      blogFetch
        .get(`/avaliacao/restaurante/${restaurante}`)
        .then((response) => {
          console.log('Get request success:', response.data);
          if(response.data.listagem == null){
            alert('Esse restaurante não existe ou não tem entrega finalizada no momento!');
          }else{
            setRestaurantes(response.data.listagem);
          }
        })
        .catch((error) => {
          console.error('Get request error:', error);
          alert('Erro na requisição');
        });

    }
    
  };


  const data = restaurantes.map((restaurante) => ({
    
    name: {
      idDoPedido: restaurante.idPedido,
      nomeRest: restaurante.nomeRestaurante,
      avalidado: restaurante.tipoAvaliacao,
    },
    avaliacao: restaurante.qtdEstrelas,
  }));

  const columns =  [
      {
        name: "ID Pedido",
        selector: row => row.name.idDoPedido,
        sortable: true
      },
      {
        name: "Avaliado",
        selector: row => row.name.avalidado,
        sortable: true

      },
      {
        name: "Avaliacao",
        selector: row => row.avaliacao,
        sortable: true

      },
    ];
   
  return (
    <body className="fundoList">
      <form className='txtRestaurante'>
        <div className="input-group">
          <input type="name"className="form-control"id="exampleInputPassword1" onChange={(e) => setRestaurante(e.target.value)}
          ></input>
          <button
            className="btn btn-outline-secondary"type="button" onClick={(e) => {e.preventDefault(); buscarRest();
            }}
          >
            Pesquisar
          </button>
        </div>
      

        {restaurantes.length > 0 && (
        <h1 className="nomeRestaurante">{restaurantes[0].nomeRestaurante}</h1>
        )}
        
        <DataTable className='listTable'

          columns={columns}
          data={data}
          fixedHeader
          pagination

        ></DataTable>
      </form>
    </body>
  );
}

export default ListRestaurante;
