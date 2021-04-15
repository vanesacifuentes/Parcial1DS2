//Leidy Vanesa Cifuentes Cod 1629458

import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

const Contador = ({valor1, valor2, nombre})=>{

    const [resultado, setResultado] = useState(0)

    return(
        <Fragment>

           <h1>Señor(a) {nombre} la suma o resta de {valor1} y {valor2} es: </h1>
           <h1>Valor total: </h1>
           <h2>{resultado}</h2>
           <button onClick={() => setResultado(valor1 + valor2) }> Sumar </button> 
           <button onClick= {() => setResultado(valor1 - valor2)}> Restar </button>
            
            
        </Fragment>
    )

}

Contador.propTypes={
    contador: PropTypes.number.isRequired

}

export default Contador