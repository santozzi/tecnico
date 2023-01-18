export const DateMask = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    let dia: string = day + "";
    let mes: string = month + "";
    let anio: string = year + "";
    if (day < 10) {
      dia = `0${day}`;
    }
    if (month < 10) {
      mes = `0${month}`;
    }
    if (year < 10) {
      anio = `0${year}`;
    }
    return `${dia}/${mes}/${anio.charAt(2)}${anio.charAt(3)}`;
  };
 