import * as math from "mathjs";

function evaluacionCientifica(texto: string): number {
  try {
    let resultado = math.evaluate(texto);
    return resultado;
  } catch (error) {
    return 0;
  }
}

export default evaluacionCientifica;
