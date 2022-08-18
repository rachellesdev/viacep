import React from 'react'
import { useState } from 'react'

const BuscaCep = () => {

    // const [cepInput, setCepInput] = useState(01001000)

    async function handleBuscaCep(){

        const cepInput = '01001000'

        const url = 'https://viacep.com.br/ws/' + cepInput + '/json/'
        const response = await fetch(url)
        const json = response.json()
        console.log(json);
        
    }

  return (
    <div><button onClick={handleBuscaCep}></button></div>
  )
}

export default BuscaCep