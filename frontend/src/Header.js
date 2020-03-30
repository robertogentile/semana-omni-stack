import React from 'react';

// pode usar props para pegar todas as propriedades ou
// trabalhar com chaves {} para buscar uma propriedade específica
// "desestruturando" o código

export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

