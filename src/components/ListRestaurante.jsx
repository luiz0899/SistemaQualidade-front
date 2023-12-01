import { useState } from 'react';
import '../style/ListRestaurante.css';
import blogFetch from '../axios/config';


const listRestaurante = () => {

  const [restaurante,setRestaurante ] = useState('');
  const [posts, setTodos] = useState([]);

  const buscarRest = ( ) =>{
    
      const data = {
        restaurante,
      };
  
      blogFetch.get("auth", data)
          .then((response) => {

              console.log("POST request success:", response.data);
              setTodos(data);
          })
          .catch((error) => {
              console.error("POST request error:", error);
          });
     
  };
    
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
                    {posts.length === 0 ? <p> Não a poster no momento  </p> : (
                      posts.map((post) => (
                        <div className="post" key = {post.id}>

                          <h2>
                            {post.titulo} 
                          </h2>
                          <p>{post.conteudo} </p>                     

                        </div>
                      ))
                    ) }         
                </form> 

    </body>
    
  );
}

export default listRestaurante;
