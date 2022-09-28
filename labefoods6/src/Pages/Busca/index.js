import React, { useState, useEffect } from 'react';
import { Title, Rectangle,Text } from "./styled"

export const BuscarPage=()=>{
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
    });
    return(
        <>
            <Title>Buscar</Title>
            <Rectangle >Buscar</Rectangle >
            <Text>Busque por nome de restaurante</Text>
        </>
    )
}

