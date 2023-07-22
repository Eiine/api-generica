let files=document.getElementById("send-files")


let sendFiles=()=>{
    let files=document.getElementById("send-files").files[0]
    
    if(files){

        let chunkSize= 20 * 1024*1024 // si el archivo supera los 200mb chunks 50 mb 
        let partNum=0
        let offset=0
        let chunksPart=files.size /chunkSize;//tengo que sacar la cantidad de chunks antes de enviarlo
        let numeroRedondeado = Math.ceil(chunksPart);
        while(offset < files.size){
            let chunks=files.slice(offset, offset + chunkSize)
            let formData= new FormData()
            formData.append("video",chunks,`${files.name}.part${partNum}`)
            formData.append("totalPart",numeroRedondeado)
            const options = {
                method: 'POST',
                url: 'http://localhost:3000/inputvideo/64bb41d0d8e29e9003876f35',
                data:  formData
              };
            
              axios(options)
              partNum++
              offset += chunkSize;
        }
    }
}
 
// main.js
const videoElement = document.getElementById('videoPlayer');
const videoElement2 = document.getElementById('videoPlayer2');

// Función para reproducir el video
const playVideo=()=> {
    videoElement.play();
    // Deshabilita el evento 'play' después de reproducir el video
    videoElement.removeEventListener('play', playVideo);
}

const catchVideo = async () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/inputvideo/64bb41d0d8e29e9003876f35',
    };

    const response = await fetch(options.url);
    const stream = response.body;
    const videoBlob = await new Response(stream).blob();
    const videoURL = URL.createObjectURL(videoBlob);

    // Establece la URL del video en la etiqueta de video
    videoElement.src = videoURL;

    // Escucha el evento 'play' en el elemento de video
    videoElement.addEventListener('play', playVideo);
};

const catchVideohover = async () => {
    const options = {
        method: 'GET',
        url: 'http://localhost:3000/inputvideo/64bb41d0d8e29e9003876f35',
    };

    const response = await fetch(options.url);
    const stream = response.body;
    const videoBlob = await new Response(stream).blob();
    const videoURL = URL.createObjectURL(videoBlob);

    // Establece la URL del video en la etiqueta de video
    videoElement2.src = videoURL;

    // Escucha el evento 'play' en el elemento de video
    videoElement2.addEventListener('mouseover', () => {
        
        videoElement2.play();
        
    });
    videoElement2.addEventListener('mouseout', () => {
        videoElement2.pause();
    });
};

catchVideohover();
catchVideo()
