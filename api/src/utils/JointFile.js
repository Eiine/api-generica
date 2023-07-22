import fs from "fs";
import path from "path";
import {root,upload} from "../utils/alias.js"

const combineFileParts =async (archivoCombinado,carpeta) => {
  const archivoSalida = path.join(upload,`${carpeta}`, "precentacion.mp4");
  const carpetaBorrar=path.join(upload,`${carpeta}`,"temp");
  // Ordenar los archivos antes de combinarlos
  archivoCombinado.sort((a, b) => {
    // Extraer los números de secuencia del nombre de los archivos
    const numeroSecuenciaA = parseInt(a.match(/\d+/)[0]);
    const numeroSecuenciaB = parseInt(b.match(/\d+/)[0]);
    
    return numeroSecuenciaA - numeroSecuenciaB;
  });

  let result=archivoCombinado.map((archivo) => {
    const archivoPath = path.join(carpetaBorrar, archivo); 
   
    const contenido = fs.readFileSync(archivoPath);
    fs.appendFileSync(archivoSalida, contenido);
  });
  console.log("Finalizada la combinación de archivos");
  
  fs.rm(carpetaBorrar, { recursive: true }, (err) => {
    if (err) {
      console.error('Error al borrar la carpeta:', err);
    } else {
      console.log('Carpeta borrada exitosamente.');
    }
  });
};

const obtenerArchivos = (folderPath) => {
  const archivos = fs.readdirSync(folderPath);
  return archivos
  };
  
export {combineFileParts, obtenerArchivos}