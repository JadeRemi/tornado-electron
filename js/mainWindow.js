document.getElementById('getItemsButton').addEventListener('click', () => {
    fetch(`http://localhost:8888/getData`)
        .then(res=> res.json()
            .then(obj => {
                fillItemList(obj.data)
            })
        )
})

function fillItemList(arr) {
    updateCount(arr.length)
    const ul = document.getElementById('item-list')
    ul.className='list collection '
    ul.innerHTML = ""
    for(let item of arr) {
        let li = document.createElement('li')
        li.className='collection-item'
        li.innerText = item
        ul.appendChild(li)
    }
}

function updateCount(num) {
    document.getElementById('item-count').innerHTML = num
}