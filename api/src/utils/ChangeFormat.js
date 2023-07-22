// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
// import { install } from 'file-loader-js';
// import path from 'path';
// import { upload } from './alias.js';

// const formatConverter = async (routeVideo) => {
//   const outputFilePath = path.join(upload, 'juancho', 'presentacion.webm'); // Ruta donde se guardará el video convertido a WebM
//   const targetWidth = 640; // Ancho deseado del video
//   const targetHeight = 360; // Altura deseada del video

//   // Instalar el archivo wasm utilizando file-loader-js
//   await install();

//   // Configurar "fetch" para que ffmpeg.wasm pueda cargar sus recursos
//   globalThis.fetch = fetch;

//   // Crear una instancia de ffmpeg.wasm
//   const ffmpegInstance = createFFmpeg({ log: true });

//   // Cargar el binario de ffmpeg.wasm
//   await ffmpegInstance.load();

//   // Obtener el nombre del archivo de entrada
//   const inputFileName = path.basename(routeVideo);

//   // Montar el archivo en memoria usando fetchFile
//   ffmpegInstance.FS('writeFile', inputFileName, await fetchFile(routeVideo));

//   // Ejecutar la conversión con ffmpeg.wasm
//   await ffmpegInstance.run('-i', inputFileName, '-vf', `scale=${targetWidth}:${targetHeight}`, '-f', 'webm', outputFilePath);

//   console.log('Conversión a WebM finalizada');
// };

// export { formatConverter };

