const unorderedLIst = document.querySelector('.list');

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li')

    unorderedLIst.appendChild(listItem)

    listItem.innerHTML = `<span>${i}</span>`

    if(i % 3 == 0 && i % 5 == 0) {
        listItem.innerHTML = `<span>FizzBuzz</span>`
        listItem.style.backgroundColor = "#f0466f"
    }
    else if (i % 3 == 0) {
        listItem.innerHTML = `<span>Fizz</span>`
        listItem.style.backgroundColor = "#0ad6a1"
    }

    else if (i % 5 == 0) {
        listItem.innerHTML = `<span>Buzz</span>`
        listItem.style.backgroundColor = "#ffd166"
    }

    console.log(listItem.innerHTML)
}