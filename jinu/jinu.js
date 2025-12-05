

let btn = document.querySelector("#submit")

btn.addEventListener('click', (e) => {
    let pii = 3.1416
    let len = document.querySelector('#length').value
    let ang = document.querySelector('#angle').value
    let red = document.querySelector('#radius').value
    console.log(len, ang, red);

    let result = pii * red
    let res1 = document.querySelector("#res1").innerText = `${red} * ${pii} = ${result}`

    let result2 = (result * ang) / 360
    let res2 = document.querySelector("#res2").innerText = `(${result} * ${ang}) / 360 = ${result2}`

    let result3 = result2 + (len * 1)
    let res3 = document.querySelector("#res3").innerText = `${result2} + ${len} = ${result3}`

    let final = document.querySelector("#final").innerText = `Final Result = ${result3}`
})