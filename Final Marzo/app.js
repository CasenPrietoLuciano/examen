const lista = []

const numerosAleatorios = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const generarNumeros = (event) => {
    event.preventDefault()
    let desde = document.getElementById("desde")
    let hasta = document.getElementById("hasta")
    let cantidad = document.getElementById("cantidad")
    let min = desde.valueAsNumber
    let max = hasta.valueAsNumber


for(let i=0; i< cantidad.valueAsNumber; i++){
    let numero = numerosAleatorios(min,max)
    lista.push(numero)
}

mostrarTabla()
}

const mostrarTabla = ()=>{
    let salida = document.getElementById("salida")
    salida.innerHTML+= ``
    lista.map((element,indice)=>{
        salida.innerHTML+=`
     <tr>
        <td>${indice}</td>
        <td>${element}</td></
        <td><button onclick="borrarElemento(${indice})">Borrar Fila</button></td> 
    </tr> `
})
}



