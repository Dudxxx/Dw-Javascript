function funcaoAssincrona(sucesso = true) {
    //console.log("função Assincrona")
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            if (sucesso)
                resolve("Operação concluida com sucesso")
           else 
                reject("erro na operação")
        }, 200)

        
    }); 
}

async function executa(){
    const resposta = await funcaoAssincrona(false)
    console.log(resposta)
    }





console.log("Iniciando...")