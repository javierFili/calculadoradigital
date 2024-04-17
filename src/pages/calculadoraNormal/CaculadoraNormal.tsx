import "./calculadoraNormal.css";
import { useState } from "react";
import evaluacionNormal from "./evaluacion";

function CalculadoraNormal() {
  let [ingresado, setIngresado] = useState<string>("");
  const [resultado, setResultado] = useState<number>(0);
  let [n, setN] = useState<number>(0);

  const ingresarNumeros = (dato: number | string) => {
    setIngresado(ingresado + dato.toString());
  };

  const ingresarResultado = () => {
    // aqui debemos que sustituir el n que tiene un valor numerico
    const resultadoCalculo = evaluacionNormal(ingresado, n);
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
        <section>
          <section className="normalVista">
            <section>
              <input
                className="normalEntrada"
                type="text"
                value={resultado}
                readOnly
              />
            </section>
            <section>
              <input
                className="normalSalida"
                type="text"
                value={ingresado}
                onChange={handleInputChange}
                placeholder="Ingrese solo numeros y simbolos"
              />
            </section>
          </section>

          <section className="normalTeclado">
            <button
              className="del-item "
              key={"del"}
              onClick={() => eliminarDato()}
            >
              del
            </button>
            <button
              className="grid-item"
              key="mod"
              onClick={() => ingresarNumeros("mod")}
            >
              mod
            </button>
            <button
              className="grid-item"
              key={"("}
              onClick={() => ingresarNumeros("(")}
            >
              (
            </button>
            <button
              className="grid-item"
              key={")"}
              onClick={() => ingresarNumeros(")")}
            >
              )
            </button>
            <button
              className="grid-item"
              key={"n"}
              onClick={() => guardadoEnN()}
            >
              n
            </button>
            <button
              className="grid-item"
              key={9}
              onClick={() => ingresarNumeros(9)}
            >
              9
            </button>
            <button
              className="grid-item"
              key={8}
              onClick={() => ingresarNumeros(8)}
            >
              8
            </button>
            <button
              className="grid-item"
              key={7}
              onClick={() => ingresarNumeros(7)}
            >
              7
            </button>
            <button
              className="grid-item"
              key={6}
              onClick={() => ingresarNumeros(6)}
            >
              6
            </button>
            <button
              className="grid-item"
              key={5}
              onClick={() => ingresarNumeros(5)}
            >
              5
            </button>
            <button
              className="grid-item"
              key={4}
              onClick={() => ingresarNumeros(4)}
            >
              4
            </button>
            <button
              className="grid-item"
              key={3}
              onClick={() => ingresarNumeros(3)}
            >
              3
            </button>
            <button
              className="grid-item"
              key={2}
              onClick={() => ingresarNumeros(2)}
            >
              2
            </button>
            <button
              className="grid-item"
              key={1}
              onClick={() => ingresarNumeros(1)}
            >
              1
            </button>
            <button
              className="grid-item"
              key={0}
              onClick={() => ingresarNumeros(0)}
            >
              0
            </button>
            <button
              className="grid-item"
              key={"+"}
              onClick={() => ingresarNumeros("+")}
            >
              +
            </button>
            <button
              className="grid-item"
              key={"-"}
              onClick={() => ingresarNumeros("-")}
            >
              -
            </button>
            <button
              className="grid-item"
              key={"/"}
              onClick={() => ingresarNumeros("/")}
            >
              /
            </button>
            <button
              className="grid-item"
              key={"*"}
              onClick={() => ingresarNumeros("*")}
            >
              *
            </button>
            <button
              className="grid-itemS"
              key={"="}
              onClick={() => ingresarResultado()}
            >
              =
            </button>
            <button
              className="grid-item"
              key={","}
              onClick={() => ingresarNumeros(",")}
            >
              ,
            </button>
          </section>
        </section>
      </div>
      <a href="/cientifica">Ir ala calculadora cientifica</a>
    </div>
  );
}

export default CalculadoraNormal;

/**!SECTION
 * tendremos cuatro tipos de datos
 * el de borrar
 * el de igual
 * los numeros
 * los simbolos
 * el n deberias poder dar .
 */
