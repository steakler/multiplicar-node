//requireds

const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {


    return new Promise((resolve, reject) => {

        console.log('==========================='.green);
        console.log(`TABLA DE ${base}`.red);
        console.log('==========================='.green);

        if (!Number(base) && !Number(limite)) {
            reject(`El valor introducido de ${ base } o de ${limite } no es un numero`)
            return;

        }

        let data = '';

        if (limite > 1) {

            for (let i = 1; i <= limite; i++) {

                data += `${base} * ${i} = ${base*i} \n`;

            }

            resolve(data);

        } else {
            reject(`El valor de limite: ${limite } debe ser mayor que 1 `)
            return;
        }


    })
}




let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor instroducido ${base} no es un numero`);
            return;
        }


        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i} \n`;

        }


        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`)

        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla


}