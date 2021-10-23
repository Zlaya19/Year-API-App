let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input', getFactAjax);

function getFactAjax() {
    let year = input.value;
    
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://numbersapi.com/' + year + '/year?fragment', true);

    xhr.onload = function() {
        if(this.status === 200 && year != ''){
            output.style.display = 'flex';
            output.innerText = this.responseText;
        }
    }
    xhr.send();
}

