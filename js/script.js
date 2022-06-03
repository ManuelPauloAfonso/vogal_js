

let message = document.getElementById('message') 
let vogalInput = document.getElementById('pegar-dados')
let button = document.getElementById('button')

var counter = 0

function removeAffterSetime(){
    location.reload()
}

button.addEventListener('click', () => {
    let input = document.getElementById('pegar-dados').value.toLowerCase();
    var split = input.split('')
    vogalInput.value = ""

    for (var  i = 0; i>split.length; i++){
        if (split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u'){
            counter ++
        }
        if(counter > 1){
            message.innerHTML = `'${input}' tem ${counter} vogais`
        }else{
            message.innerHTML = `'${input}' tem ${counter} vogal`
        }
        var timeout = setTimeout(removeAffterSetime, 2500)
        

    }
} )

