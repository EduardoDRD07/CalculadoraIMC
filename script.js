function getValues(){
    const massa = document.querySelector("#massa")
    const massaValue = massa.value.replace(",",".")
    const altura = document.querySelector("#altura")
    const alturaValue = altura.value.replace(",",".")
    const tratarAltura = Math.pow(alturaValue, 2)
    const imc = (massaValue/tratarAltura).toFixed(2)
    document.querySelector("#imc").innerHTML = imc 
    if(imc < 18.5){
        const abaixoIdeal = `Você está abaixo do seu peso ideal`
        document.querySelector("#resultado").innerHTML = abaixoIdeal
    }if(imc > 18.5 && imc < 25){
       const pesoIdeal = `você está no seu peso ideal`
       document.querySelector("#resultado").innerHTML = pesoIdeal
    }if(imc > 25 && imc < 30){
        const acimaIdeal = `Você está acima do seu peso ideal`
        document.querySelector("#resultado").innerHTML = acimaIdeal
    }if(imc > 30 && imc < 40){
        const obsidadeI = `Você está em nível de obesidade de grau 1`
        document.querySelector("resultado").innerHTML = obsidadeI
    }if(imc > 40){
        const obesidade2 = `Você está em um nível de obesidade de grau 2`
        document.querySelector("#resultado").innerHTML = obesidade2
    }else{
        document.querySelector("#resultado").innerHTML = `Você está muito abaixo do seu peso ideal`
    }
}
