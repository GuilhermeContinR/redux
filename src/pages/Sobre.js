import React from 'react';
import { useHistory } from 'react-router-dom';


 function Sobre() {

    let history = useHistory();

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/home');
        }, 2000)
    }


    return (
        <div>
            <h4>Página Sobre</h4>
            <button onClick={ e => handleButton()} > Ir Para página Home</button>
        </div>
    )


}

export default Sobre