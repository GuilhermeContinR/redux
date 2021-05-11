import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Home() {

    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        setTimeout(() => {
            history.replace('/sobre');
        }, 2000)
    }

    const handleChange = () => {
        // props.setName('Guilherme')
        dispatch({
            type:'SET_NAME',
            payload: { name:'Guilherme'}
        })
    }
    const handleIncrement = () => {
        // props.setIncrement()
        dispatch({
            type:'SET_INCREMENT'
        })
    }
    return (
        <div>
            <h4>Página Home</h4>


            Nome: {name}
            <br />
            <br />
            Contagem: {contador}
            <br /><button onClick={handleChange}>Change name</button> <br />
            <button onClick={handleButton} > Ir Para página Sobre</button><br />
            <button onClick={handleIncrement}>+1</button> <br />
        </div>
    )


}
export default Home
// const mapStateToProps = (state) => {
//     return {
//         name : state.usuario.name,
//         contador: state.usuario.contador
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setName: (newName) => dispatch({
//             type:'SET_NAME',
//             payload: { name:newName }
//         }) ,
//         setIncrement: () => dispatch({
//             type:'SET_INCREMENT'
//         })
//     }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Home);
