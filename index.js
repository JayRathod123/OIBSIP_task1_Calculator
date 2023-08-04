let input = document.getElementById('inp');
let button = document.querySelectorAll('button');
let screenvalue = '';


for (const item of button) {
      item.addEventListener('click' , (element) =>{
        output = element.target.innerText;
        console.log(output);

        if(output == 'AC'){
            input.value = '';
        }

        else if(output == 'Delete'){
            input.value = (input.value).toString().slice(0,-1);
        }

        else if(output == '='){
            input.value = eval(input.value);
        }

        else{
            input.value += output;
        }
    })
    
}

































































