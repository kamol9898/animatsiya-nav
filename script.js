let nums = document.querySelectorAll('#num')
let vaqt = 1000


nums.forEach((item, index) => {
    let star = 0
    let end = parseInt(item.getAttribute("data-val"))
    let duration = Math.floor(vaqt / end)
    console.log(duration);
    let count = setInterval(function(){
        star += 1 
        item.textContent = star
        if(star == end){
            clearInterval(count)
        }
    })
})


let ser = document.querySelector('#search')
ser.addEventListener('input', () => {
    
    let filter = ser.value.toLowerCase()
    let list = document.querySelectorAll('.list-group-item')
    list.forEach(item => {
        let text = item.textContent
        if(text.toLowerCase().includes(filter.toLowerCase())){
            item.style.display = ''
        }else{
            item.style.display = 'none'
        }
    })
})

