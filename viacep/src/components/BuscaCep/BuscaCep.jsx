import React from 'react'
import { useState } from 'react'

const BuscaCep = () => {

  const [cepInput, setCepInput] = useState('01001000')
  const [endereco, setEndereco] = useState()

  function handleSetInput(target) {
    setCepInput(target.value)
  }

  async function handleBuscaCep() {

    const url = 'https://viacep.com.br/ws/' + cepInput + '/json/'
    const response = await fetch(url)
    const json = response.json()
    console.log(json);

    const resposta = {
      bairro: json.bairro,
      cep: json.cep,
      localidade: json.localidade,
      logradouro: json.logradouro,
      uf: json.uf
    }
    console.log(resposta);
    setEndereco(resposta)
    setCepInput('')

  }

  return (
    <div>
      <input
          type="text"
          // className={S.input}
          placeholder='Digite o CEP'
          value={cepInput}
          onChange={({ target }) => handleSetInput(target)}
        />
      <button onClick={handleBuscaCep}>Enviar</button>

        <section>
            <p>{!! endereco && endereco.bairro}</p>
        </section>

    </div>
  )
}

export default BuscaCep