// requireds
const fs = require('fs');
const colors = require("colors");

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un número`);
            return;

        }
        console.log("====================".green);
        console.log(`=== tabla de ${base} ===`.green);
        console.log("====================".green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${ i } = ${ base * i }`);
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} No es un número`);
            return;

        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla_${ base }.txt `, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla_${ base }.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}