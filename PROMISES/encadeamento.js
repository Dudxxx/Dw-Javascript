
function pedirPizza(tempo = 2000, saborDisponivel=true) {
    console.log("Iniciando o pedido")
    
    const promessa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (saborDisponivel){
                resolve("Pizza a caminho")
            } else {
                reject(new Error("Não pode ser realizado"))
            }
        }, tempo)
    })
    return promessa
}

function pedirUber(tempo = 2000, motoraDisponivel=true) {
    console.log("Pedindo Corrida")
    
    const promessa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (motoraDisponivel){
                resolve("Motora chegou")
            } else {
                reject(new Error("Motora indisponivel"))
            }
        }, tempo)
    })
    return promessa
}

function ir(){
    pedirPizza(1000)
        .then((resposta)=> {
            console.log(resposta)
            pedirUber()
                .then(resposta => {
                    console.log(resposta)
                })
        })

}

ir()

