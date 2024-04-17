function evaluacionNormal(texto: string, valorN: number): number {
  texto = texto.replaceAll("n", valorN + "");
  texto = texto.replace(/mod/g, "%");
  let resultado;
  resultado = eval(texto);
  return resultado;
}

export default evaluacionNormal;
