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
        className="grid-item"
        key={"sin"}
        onClick={() => {
          caracteresCientificos("sin()");
        }}
      >
        sin
      </button>
      <button
        className="grid-item"
        key={"cos"}
        onClick={() => {
          caracteresCientificos("cos()");
        }}
      >
        cos
      </button>
      <button
        className="grid-item"
        key={"tan"}
        onClick={() => {
          caracteresCientificos("tan()");
        }}
      >
        tan
      </button>
      <button
        className="grid-item"
        key={"cosh"}
        onClick={() => {
          caracteresCientificos("cosh()");
        }}
      >
        cosh
      </button>
      <button
        className="grid-item"
        key={"sinh"}
        onClick={() => {
          caracteresCientificos("sinh()");
        }}
      >
        sinh
      </button>
      <button
        className="grid-item"
        key={"tanh"}
        onClick={() => {
          caracteresCientificos("tanh()");
        }}
      >
        tanh
      </button>
      <button
        className="grid-item"
        key={"e"}
        onClick={() => {
          caracteresCientificos("e");
        }}
      >
        e
      </button>
      <button
        className="grid-item"
        key={"ln"}
        onClick={() => {
          caracteresCientificos("ln()");
        }}
      >
        ln
      </button>
      <button
        className="grid-item"
        key={"log"}
        onClick={() => {
          caracteresCientificos("log()");
        }}
      >
        log
      </button>
      <button
        className="grid-item"
        key={"i"}
        onClick={() => {
          caracteresCientificos("i");
        }}
      >
        i
      </button>
      <button
        className="grid-item"
        key={"Re"}
        onClick={() => {
          caracteresCientificos("Re");
        }}
      >
        Re
      </button>
      <button
        className="grid-item"
        key={"x!"}
        onClick={() => {
          caracteresCientificos("x!");
        }}
      >
        x!
      </button>
      <button
        className="grid-item"
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
