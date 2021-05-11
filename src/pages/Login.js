import React,{useState} from 'react';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';


function Login(props) {

    const [usuario,setUsuario] = useState();
    
    const handleLogin = () => {

        props.setName(usuario);
       
    }

    return (
        <div>
            <h4>Página Login</h4>
            <h5>{usuario}</h5>
            <input type='text' onChange={ (e) => setUsuario(e.target.value)} />
            <button onClick={handleLogin}>Change</button>
        </div>
    )


}

const mapStateToProps = (state) => {

    return {
        name:state.usuario.name,
        contador:state.usuario.contador
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setName:newValue => dispatch({
            type:'SET_NAME',
            payload: { name : newValue }
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)