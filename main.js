const fiftyBudget = document.querySelector('#fiftyBudget')
const seventyBudget = document.querySelector('#seventyBudget')
const thirtyBudget = document.querySelector('#thirtyBudget')

function changeEvent() {
    const dropDown = document.getElementById("dropDown")

    if (dropDown.value === "fiftyThirtyTwenty"){
        fiftyBudget.style.display = 'block'
	    seventyBudget.style.display = 'none'
	    thirtyBudget.style.display = 'none'
     } else if (dropDown.value === "seventyTwentyTen"){
        fiftyBudget.style.display = 'none'
	    seventyBudget.style.display = 'block'
	    thirtyBudget.style.display = 'none'
     } else if (dropDown.value === "thirtyTen"){
        fiftyBudget.style.display = 'none'
	    seventyBudget.style.display = 'none'
	    thirtyBudget.style.display = 'block'
    }
}

let total = 0

document.querySelector('input').addEventListener('keyup', function() {
    fiftyPercent()
    thirtyPercent()
    twentyPercent()
    tenPercent()
    seventyPercent()
})

function fiftyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    const fifty = document.querySelectorAll('.fifty')
    for(let i = 0; i < fifty.length; i++) {
        total = income * .5
        fifty[i].innerText = "$" + total
    } 
}

function thirtyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    const thirty = document.querySelectorAll('.thirty')
    for(let i = 0; i < thirty.length; i++) {
        total = income * .3
        thirty[i].innerText = "$" + total
    } 
}

function twentyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    const twenty = document.querySelectorAll('.twenty')
    for(let i = 0; i < twenty.length; i++) {
        total = income * .2
        twenty[i].innerText = "$" + total
    } 
}

function tenPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    const ten = document.querySelectorAll('.ten')
    for(let i = 0; i < ten.length; i++) {
        total = income * .1
        ten[i].innerText = "$" + total
    } 
}

function seventyPercent() {
    const income = document.querySelector('#afterTaxIncome').value
    const seventy = document.querySelectorAll('.seventy')
    for(let i = 0; i < seventy.length; i++) {
        total = income * .7
        seventy[i].innerText = "$" + total
    } 
}
