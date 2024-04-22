import "./calculadoraCientifica.css";
interface CalculadoraCientifica {
  eliminarDato: () => void;
  ingresarNumeros: (num: string | number) => void;
  guardadoEnN: () => void;
  ingresarResultado: () => void;
  caracteresCientificos: (num: string | number) => void;
}

const TeclasTrigonometria: React.FC<CalculadoraCientifica> = ({
  eliminarDato,
  ingresarNumeros,
  guardadoEnN,
  ingresarResultado,
  caracteresCientificos,
}) => {
  return (
    <section className="tecladoCientifico">
      <button
        className="grid-item cientificButton"
        key={"sin"}
        onClick={() => {
          caracteresCientificos("sin()");
        }}
      >
        sin
      </button>
      <button
        className="grid-item cientificButton"
        key={"cos"}
        onClick={() => {
          caracteresCientificos("cos()");
        }}
      >
        cos
      </button>
      <button
        className="grid-item cientificButton"
        key={"tan"}
        onClick={() => {
          caracteresCientificos("tan()");
        }}
      >
        tan
      </button>
      <button
        className="grid-item cientificButton"
        key={"cosh"}
        onClick={() => {
          caracteresCientificos("cosh()");
        }}
      >
        cosh
      </button>
      <button
        className="grid-item cientificButton"
        key={"sinh"}
        onClick={() => {
          caracteresCientificos("sinh()");
        }}
      >
        sinh
      </button>
      <button
        className="grid-item cientificButton"
        key={"tanh"}
        onClick={() => {
          caracteresCientificos("tanh()");
        }}
      >
        tanh
      </button>
      <button
        className="grid-item cientificButton"
        key={"e"}
        onClick={() => {
          caracteresCientificos("e");
        }}
      >
        e
      </button>
      <button
        className="grid-item cientificButton"
        key={"ln"}
        onClick={() => {
          caracteresCientificos("ln()");
        }}
      >
        ln
      </button>
      <button
        className="grid-item cientificButton"
        key={"log"}
        onClick={() => {
          caracteresCientificos("log()");
        }}
      >
        log
      </button>
      <button
        className="grid-item cientificButton"
        key={"i"}
        onClick={() => {
          caracteresCientificos("i");
        }}
      >
        i
      </button>
      <button
        className="grid-item cientificButton"
        key={"Re"}
        onClick={() => {
          caracteresCientificos("Re");
        }}
      >
        Re
      </button>
      <button
        className="grid-item cientificButton"
        key={"x!"}
        onClick={() => {
          caracteresCientificos("x!");
        }}
      >
        x!
      </button>
      <button
        className="grid-item cientificButton"
        key={"|x|"}
        onClick={() => {
          caracteresCientificos("|x|");
        }}
      >
        |x|
      </button>
    </section>
  );
};

export default TeclasTrigonometria;
