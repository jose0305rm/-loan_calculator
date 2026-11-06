const formatearDinero = (valor) => {
    const formatter =  new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {

    let total;

    // mientras mayor es la cantidad solicitada, menor es el interes
    if(cantidad < 5000){
        total = cantidad * 1.5;
    }
    else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    }
    else if(cantidad >= 10000 && cantidad < 15000){
        total = cantidad * 1.3;
    }
    else{
        total = cantidad * 1.2;
    }

    // calculamos el plazo (mas plazo, mayor interes)
    if(plazo <= 6){
        total *= 1.1;
    }
    else if(plazo <= 12){
        total *= 1.2;
    }
    else if(plazo <= 24){
        total *= 1.3;
    }
    else if(plazo <= 36){
        total *= 1.4;
    }
    else{
        total *= 1.5;
    }

    return total;
}

// calcula el total a pagar con una tasa definida por el usuario
// config = { tasa, periodo: 'anual' | 'mensual' | 'total', metodo: 'simple' | 'frances' }
const calcularTotalPersonalizado = (cantidad, plazo, { tasa, periodo, metodo }) => {

    const tasaDecimal = tasa / 100;

    // la tasa se aplica una sola vez sobre todo el prestamo
    if(periodo === 'total'){
        return cantidad * (1 + tasaDecimal);
    }

    // convertimos la tasa a mensual
    const tasaMensual = periodo === 'anual' ? tasaDecimal / 12 : tasaDecimal;

    // cuota fija (amortizacion francesa): cada mes se paga lo mismo,
    // el interes se calcula sobre el saldo pendiente
    if(metodo === 'frances' && tasaMensual > 0){
        const cuota = cantidad * tasaMensual / (1 - Math.pow(1 + tasaMensual, -plazo));
        return cuota * plazo;
    }

    // interes simple: el interes se calcula siempre sobre la cantidad inicial
    return cantidad * (1 + tasaMensual * plazo);
}

// decide que calculo usar segun la configuracion de interes
const calcularPrestamo = (cantidad, plazo, config) => {
    if(config.modo === 'personalizado'){
        return calcularTotalPersonalizado(cantidad, plazo, config);
    }
    return calcularTotalPagar(cantidad, plazo);
}


export {
    formatearDinero,
    calcularTotalPagar,
    calcularTotalPersonalizado,
    calcularPrestamo
}