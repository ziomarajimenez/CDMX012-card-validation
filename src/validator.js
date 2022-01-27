// Create an object with the functions is Valid and Maskify
const validator = {
  isValid: (creditCardNumber) => {
    let data = creditCardNumber.split("").map(Number);
    console.log(data);

    let imp = [];
    for (let i = 0; i < data.length; i++) {
      if (i % 2 === 0) {
        imp.push(data[i]);
      }
    }
    console.log(imp);

    let multiplicado = [];
    function mult() {
      for (let i = 0; i < imp.length; i++) {
        multiplicado[i] = imp[i] * 2;
      }
    }
    mult();

    let mayores = [];
    let menores = 0;
    let iguales = 0;
    let arreglo = [];
    let arregloSuma = 0;

    for (let i = 0; i < multiplicado.length; i++) {
      if (multiplicado[i] > 10) {
        mayores += multiplicado[i];
      } else if (multiplicado[i] < 10) {
        menores += multiplicado[i];
      } else if (multiplicado[i] === 10) {
        iguales++;
      }
    }

    arreglo = mayores.split("").map(Number);
    for (let i = 0; i < arreglo.length; i++) {
      arregloSuma += arreglo[i];
    }

    let sumado = 0;
    function suma() {
      for (let i = 0; i < data.length; i++) {
        sumado += data[i];
      }
    }
    suma();

    let sumado1 = 0;
    function suma1() {
      for (let i = 0; i < imp.length; i++) {
        sumado1 += imp[i];
      }
    }
    suma1();

    let diferencia = sumado - sumado1;
    let sumaTotal = diferencia + arregloSuma + menores + iguales;

    return sumaTotal % 10 === 0 ? true : false;
  },

  maskify: (creditCardNumber) => {
    // const number1 = creditCardNumber.slice(creditCardNumber.length - 4);
    // // const number2 = creditCardNumber.slice(0, creditCardNumber.length - 4);

    // let maskify1 = `############${number1}`;
    // return maskify1;
    let newMaskify = "";
    for (let i = 0; i < creditCardNumber.length; i++) {
      if (i < creditCardNumber.length - 4) {
        newMaskify += "#";
      } else {
        newMaskify += creditCardNumber[i];
      }
    }
    return newMaskify;
  },
};

export default validator;
