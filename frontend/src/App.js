//import React, { useState } from 'react';
import React from 'react';
//import Header from './Header';
import './global.css';

//import Logon from './pages/Logon';
import Routes from './routes';

// Conceito JSX >> JavaScript + XML

// Sobre PROPRIEDADES
// pode passar propriedade como elemento que vai ser utlizado no elemento
// como {nomedoprametro} ou props.nomedoelemento.
// elementos como children, para quando, no exemplo <header>teste</header>
// é possível pegar como {children} ou props.children no elemento destino

// Sobre ESTADO
// 


// no react todos os elementos devem estar sempre dentro de uma tag pai
// como se fosse o root do xml
function App() {
  //const [count, setCounter] = useState(0);

 /* 
 Exemplo de funcao no React usando o conceito de imutabilidade
 function increment(){
    setCounter(count+1);

    // UseState [valor, funcaoDeAtualizacao]

    console.log("App.increment called " + count);

     <div>
    <Header title="Teste de titulo">
      Semana OmniStack - contador {count}
    </Header>
    <button onClick={increment}>Incrementar</button>
    </div>
  }*/

  return (
   <Routes/>
  );
}

export default App;
