const input = document.querySelector('input');


document.querySelectorAll('.digitos_individuais').forEach(
    elmnt => {
        elmnt.onclick = () => input.value = input.value === '0' ? elmnt.innerHTML : input.value + elmnt.innerHTML ;
        }
)

function calc(buffer1,buffer2, operator){
        switch (operator){
                case 'add':
                        return buffer1 + buffer2;
                case 'subt':
                        return buffer1 - buffer2;
                case 'mult':
                        return buffer1 * buffer2;
                case 'div':
                        return buffer1 / buffer2;
                }
}


let buffer = [] //irá armazenar o primeiro valor

const opCallBack = opName => (vazio) => {//guardando um evento no mouse?
        let currentValue = parseFloat(input.value);
        console.log(opName);
        if(opName == 'mod'){
                currentValue *= 0.01;
                input.value = currentValue
        }else{
                if(opName == 'clear'){
                input.value = "";
                buffer = [];
                return 0;
                }
                if(buffer.length){
                        buffer.push(currentValue);
                        if(opName == "equal"){
                        input.value  = calc(buffer[0], buffer[2], buffer[1]);
                        console.log(buffer);
                        buffer = []

                        }  
                }else{
                buffer.push(currentValue);
                buffer.push(opName);
                input.value = "";
                }
        }
}

const operador = ['subt', 'add', 'mult', 'div', 'mod', 'equal', 'clear'];

for (const opName of operador) {
        document.querySelector(`.op_key[op=${opName}]`).onclick = opCallBack(opName)
    }


