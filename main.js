const unorderedLIst = document.querySelector('.list');

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li')

    unorderedLIst.appendChild(listItem)

    listItem.innerHTML = i
    
    if(i % 3 == 0 && i % 5 == 0) {
        listItem.innerHTML = 'FizzBuzz'
    }
    else if (i % 3 == 0) {
        listItem.innerHTML = 'Fizz'
    }

    else if (i % 5 == 0) {
        listItem.innerHTML = 'Buzz'
    }

    console.log(listItem.innerHTML)
}