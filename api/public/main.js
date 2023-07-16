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
                url: 'http://localhost:3000/inputvideo',
                data:  formData
              };
            
              axios(options)
              partNum++
              offset += chunkSize;
        }
    }
}