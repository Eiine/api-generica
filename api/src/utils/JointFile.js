import fs from "fs";
import path from "path";
import {root,upload} from "../utils/alias.js"

const combineFileParts = (archivoCombinado) => {
  const archivoSalida = path.join(upload,"juancho", "precentacion.mp4");
  const carpetaBorrar=path.join(upload,"juancho","temp");
  // Ordenar los archivos antes de combinarlos
  archivoCombinado.sort((a, b) => {
    // Extraer los números de secuencia del nombre de los archivos
    const numeroSecuenciaA = parseInt(a.match(/\d+/)[0]);
    const numeroSecuenciaB = parseInt(b.match(/\d+/)[0]);
    
    return numeroSecuenciaA - numeroSecuenciaB;
  });

  archivoCombinado.forEach((archivo) => {
    const archivoPath = path.join(upload, "juancho","temp", archivo); 
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