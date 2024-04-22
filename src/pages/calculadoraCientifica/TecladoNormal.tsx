import "./calculadoraCientifica.css";

interface TeclasNormal {
  eliminarDato: () => void;
  ingresarNumeros: (num: string | number) => void;
  guardadoEnN: () => void;
  ingresarResultado: () => void;
}

const TecladoNormal: React.FC<TeclasNormal> = ({
  eliminarDato,
  ingresarNumeros,
  guardadoEnN,
  ingresarResultado,
}) => {
  return (
    <section className="normalTeclado">
      <button className="del-item " key={"del"} onClick={() => eliminarDato()}>
        del
      </button>
      <button
        className="grid-item "
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
      <button className="grid-item" key={"n"} onClick={() => guardadoEnN()}>
        n
      </button>
      <button className="grid-item" key={9} onClick={() => ingresarNumeros(9)}>
        9
      </button>
      <button className="grid-item" key={8} onClick={() => ingresarNumeros(8)}>
        8
      </button>
      <button className="grid-item" key={7} onClick={() => ingresarNumeros(7)}>
        7
      </button>
      <button className="grid-item" key={6} onClick={() => ingresarNumeros(6)}>
        6
      </button>
      <button className="grid-item" key={5} onClick={() => ingresarNumeros(5)}>
        5
      </button>
      <button className="grid-item" key={4} onClick={() => ingresarNumeros(4)}>
        4
      </button>
      <button className="grid-item" key={3} onClick={() => ingresarNumeros(3)}>
        3
      </button>
      <button className="grid-item" key={2} onClick={() => ingresarNumeros(2)}>
        2
      </button>
      <button className="grid-item" key={1} onClick={() => ingresarNumeros(1)}>
        1
      </button>
      <button className="grid-item" key={0} onClick={() => ingresarNumeros(0)}>
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
  );
};
export default TecladoNormal;
