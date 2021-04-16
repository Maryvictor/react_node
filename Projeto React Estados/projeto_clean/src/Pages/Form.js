import React, { useEffect, useState } from "react";

import axios from "axios";

function Form() {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    axios.get("http://localhost:3030/estados").then((response) => {
      setEstados(response.data);
    });
  }, []);

  return (
    <div>
      <form>
        <fieldset>
          <legend>
            <h2>Dados de Cadastro</h2>
          </legend>

          <div>
            <label>
              Nome:
              <input type="text" name="txtNome" id="txtNome" />
            </label>
          </div>

          <div>
            <label>
              Idade:
              <input type="number" name="txtIdade" id="txtIdade" />
            </label>
          </div>

          <div>
            <label>
              UF:
              <select name="cmbUF" id="cmbUF">
                <option value="0">Selecione uma opção</option>
                {estados.map((estado) => (
                  <option key={estado.id} value={estado.id}>
                    {estado.uf}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <input type="submit" value="Salvar" />
        </fieldset>
      </form>
    </div>
  );
}

export default Form;
