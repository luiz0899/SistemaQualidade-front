import { useState, useMemo } from 'react';
import '../style/ListRestaurante.css';
import blogFetch from '../axios/config';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const ListRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState([]);
 
  const [restaurante, setRestaurante] = useState('');

  const buscarRest = () => {
   

   blogFetch
      .get(`/avaliacao/restaurante/${restaurante}`)
      .then((response) => {
        console.log('Get request success:', response.data);
        setRestaurantes(response.data.listagem);
      })
      .catch((error) => {
        console.error('Get request error:', error);
      });
  };

  type Person = {
    name: {
      idDoPedido: Integer;
      nomeRest: string;
      avalidado: string;
    };
    Avaliacao: Integer;
    
  };

  const listagemData :Person[] = restaurantes.map((restaurante) => ({
    name: {
      idDoPedido: restaurante.idPedido,
      nomeRest: restaurante.nomeRestaurante,
      avalidado: restaurante.tipoAvaliacao,
    },
    Avaliacao: restaurante.qtdEstrelas,
  }));

  const data = [...listagemData];  

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      
      {
        accessorKey: 'name.idDoPedido',
        header: 'Id Pedido',
        size: 150,
      },
      {
        accessorKey: 'name.avalidado',
        header: 'Avaliado',
        size: 150,
      },
      {
        accessorKey: 'Avaliacao',
        header: 'Avaliação',
        size: 20,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    
    <body className="fundoList">
                
                <form className='txtRestaurante'>

                    <div className="input-group">
                      <input type="name" className="form-control" id="exampleInputPassword1"
                            onChange={(e) => setRestaurante(e.target.value)}></input>
                      <button className="btn btn-outline-secondary" type="button"  onClick={(e) => {
                        e.preventDefault()
                        buscarRest() }}  >Button</button>
                    
                    </div>
                       
                </form> 

              <h1 className='nomeRestaurante'> {restaurante} </h1>          

             <MaterialReactTable table={table} />
    </body>
    
  );
}

export default ListRestaurante;