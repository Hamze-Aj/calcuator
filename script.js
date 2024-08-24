const num = document.querySelectorAll('.num')
const secondOperand = document.querySelector('.second-operand')
const firstOperand = document.querySelector('.first-operand')
const del = document.querySelector('.del')
const clear = document.querySelector('.clear')
const divide = document.querySelector('.divide')
const add = document.querySelector('.add')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const dot = document.getElementById('dot')
const equal = document.querySelector('.equal')
const dec = '.'

let operator = ''
let operand = ''
let result
let num1 = 0
let num2 = 0

del.addEventListener('click', () => {
operand = operand.slice(0, -1)
secondOperand.textContent = operand
})


clear.addEventListener('click', () => {
        
        firstOperand.textContent = ''
        secondOperand.textContent = ''
        operand = ''
        operator= ''
        num1 = 0
        num1 = 0
    })

num.forEach(btn => btn.addEventListener('click', () => {
    if(!operator) {
    
        dot.disabled = false;
            operand += btn.textContent
            secondOperand.textContent = operand
            if(operand.includes(dec) ) {
                dot.disabled = true;
            }
            num1 = parseFloat(operand)

    } else {
        dot.disabled = false;
            
            operand += btn.textContent  
            secondOperand.textContent = operand
            if(operand.includes(dec)) {
                dot.disabled = true;
            }
            num2 = parseFloat(operand)
               
    }       
 }))

    

divide.addEventListener('click', () => {
    if(operand){
        firstOperand.textContent = `${operand} /`
        secondOperand.textContent = ''
        operator = '/'
        operand = '';        
        
    }
})

add.addEventListener('click', () => {
    if(operand){
        firstOperand.textContent = `${operand} +`
        secondOperand.textContent = ''
        operator = '+'
        operand = '';        
        
    }
})

multiply.addEventListener('click', () => {
    if(operand){
        firstOperand.textContent = `${operand} *`
        secondOperand.textContent = ''
        
        operator = '*'
        operand = '';        
        
    }
})

minus.addEventListener('click', () => {
    if(operand){
        firstOperand.textContent = `${operand} -`
        secondOperand.textContent = ''
        operator = '-'
        operand = '';        
        
    }
})

equal.addEventListener('click', () => {
    secondOperand.textContent = ''

   
        if(operator == '/') {
             result = div(num1,num2)
            firstOperand.textContent = ''
            secondOperand.textContent = result
            operand = result
            num1 = result
            
        }
        else if(operator == '+') {
            const result = plus(num1,num2)
            firstOperand.textContent = ''
            secondOperand.textContent = result
            operand = result
            num1 = result


        }
        else if(operator == '*') {
            
            const result = mult(num1,num2)
            firstOperand.textContent = ''
            secondOperand.textContent = result
            operand = result
            num1 = result


            
        }
        else if(operator == '-') {
            const result = subs(num1,num2)
            firstOperand.textContent = ''
            secondOperand.textContent = result
            operand = result
            num1 = result


        }
        
        operator = ''
})


function plus(num1,num2) {
    return num1 + num2   
}

function subs(num1,num2) {
    return num1 - num2   
}

function mult(num1,num2) {
    return num1 * num2   
}

function div(num1,num2) {
    if(num2 === 0) {
        return 'ERROR'
    }
    else {

        return num1 / num2   
    }
}







