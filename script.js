// Calculator
const total = document.querySelector('h3');

const calculateTotal = obj => {
    let pushed = obj.innerHTML;
    
    if (pushed == '=') {
        total.innerHTML = eval(total.innerHTML);
    
    } else if (pushed == 'C') {
        total.innerHTML = '0';
    
    } else {
        if (total.innerHTML == '0') {
            total.innerHTML = pushed;
    
        } else {
            total.innerHTML += pushed;
        }
    }
}