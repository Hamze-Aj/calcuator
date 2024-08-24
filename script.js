const num = document.querySelectorAll('.num')
const secondOperand = document.querySelector('.second-operand')
const firstOperand = document.querySelector('.first-operand')
const del = document.querySelector('.del')
const clear = document.querySelector('.clear')
const divide = document.querySelector('.divide')
const add = document.querySelector('.add')
const multiply = document.querySelector('.multiply')
const minus = document.querySelector('.minus')
const equal = document.querySelector('.equal')

let operator = ''
let operand = ''
let num1
let num2

del.addEventListener('click', () => {
operand = operand.slice(0, -1)
secondOperand.textContent = operand
})


clear.addEventListener('click', () => {
        
        firstOperand.textContent = ''
        secondOperand.textContent = ''
        operand = ''
        operator= ''
    })

num.forEach(btn => btn.addEventListener('click', () => {
    if(!operator) {

        operand += btn.textContent
        secondOperand.textContent = operand
        num1 = parseInt(operand)

    } else {

            operand += btn.textContent  
            firstOperand.textContent = operand
            num2 = parseInt(operand)
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
    if(operator == '/') {
        const result = div(num1,num2)
        
        firstOperand.textContent = ''
        secondOperand.textContent = result
    }
    else if(operator == '+') {
        const result = plus(num1,num2)
        firstOperand.textContent = ''
        secondOperand.textContent = result
    }
    else if(operator == '*') {
        const result = mult(num1,num2)
        firstOperand.textContent = ''
        secondOperand.textContent = result
    }
    else if(operator == '-') {
        const result = subs(num1,num2)
        firstOperand.textContent = ''
        secondOperand.textContent = result
    }

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
    return num1 / num2   
}







