import { useState } from 'react';
import blogFetchAuth from '../axios/configAuth';
import { useNavigate } from 'react-router-dom';
import '../style/LoginAuth.css';

const LoginAuth = () => {
   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const entrar = () => {
    
        const data = {
            email,
            senha,
        };
    
        blogFetchAuth.post("auth", data)
            .then((response) => {

                console.log("POST request success:", response.data.token);
                navigate('/restaurante');
            })
            .catch((error) => {
                console.error("POST request error:", error);
                alert("Senha ou email incorreta");
            });
    
       
    };


  return (
   
            <div className="corpoLogin">

                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={(e) => setSenha(e.target.value)}></input>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => {
                        e.preventDefault()
                        entrar() }} >Entrar</button>
                </form> 

            </div>
    
    
  );
}

export default LoginAuth;
