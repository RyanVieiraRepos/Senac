document.getElementById("btn")
let num = 0

document.getElementById("contador").innerHTML=`

`

btn.addEventListener("click",()=>{
    
    setInterval(()=>{
        document.getElementById('contador').innerHTML=`
        ${num+1}
        `
    },100)
})