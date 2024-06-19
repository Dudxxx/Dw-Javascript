function funcaoAssincrona(sucesso = true) {
    //console.log("função Assincrona")
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            if (sucesso)
                resolve("Operação concluida com sucesso")
           else 
                reject("erro na operação")
        }, 4000)

        
    }); 
}

funcaoAssincrona(true)
    .then(resposta => {
        console.log(resposta)
    })
    .catch((erro)=>{
        console.log("fudeo")
        console.log("resultado:" + erro)
    })


console.log("Iniciando...")