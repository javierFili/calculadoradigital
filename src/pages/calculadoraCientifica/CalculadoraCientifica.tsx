import "./calculadoraCientifica.css";
import { useState } from "react";
import evaluacionCientifica from "./evaluacionCientifica";
import TeclasTrigonometria from "./TeclasTrigonometria";
import TecladoNormal from "./TecladoNormal";

function CalculadoraCientifica() {
  let [ingresado, setIngresado] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);
  let [n, setN] = useState<number>(0);

  const ingresarNumeros = (dato: number | string) => {
    setIngresado(ingresado + dato.toString());
  };

  const ingresarResultado = () => {
    // aqui debemos que sustituir el n que tiene un valor numerico
    const resultadoCalculo = evaluacionCientifica(ingresado);
    setResultado(resultadoCalculo);
    setN(resultadoCalculo);
  };

  const eliminarDato = () => {
    setIngresado("");
  };

  const guardadoEnN = () => {
    setIngresado(ingresado + "" + n);
    console.log(ingresado);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngresado(event.target.value);
  };

  const caracteresCientificos = (text: string | number) => {
    setIngresado(ingresado + text.toString());
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <section className="calculadoraCientifica">
          <section className="cientificaVista">
            <input
              className="cientificaEntrada"
              type="text"
              value={resultado}
              readOnly
            />
          </section>
          <section className="cientificaVista">
            <input
              className="normalSalida"
              type="text"
              value={ingresado}
              onChange={handleInputChange}
              placeholder="Ingrese solo numeros y simbolos"
            />
          </section>

          <section className="tecladoCientificaNormal">
            <TecladoNormal
              ingresarNumeros={ingresarNumeros}
              ingresarResultado={ingresarResultado}
              eliminarDato={eliminarDato}
              guardadoEnN={guardadoEnN}
            />
            <TeclasTrigonometria
              ingresarNumeros={ingresarNumeros}
              ingresarResultado={ingresarResultado}
              eliminarDato={eliminarDato}
              guardadoEnN={guardadoEnN}
              caracteresCientificos={caracteresCientificos}
            />
          </section>
        </section>
      </div>
      <a href="/cientifica">Ir ala calculadora cientifica</a>
    </div>
  );
}

export default CalculadoraCientifica;
/**!
 * tenemos que sacrificar el tamanio de las teclas del basico ojito
 */
