const input = document.querySelector('input')
const h2 = document.querySelector('h2')

// put it here bcoz javascript willl read from top to bottom

h2.innerHTML = localStorage.getItem("value")


input.addEventListener("keyup", display)

function display() {
    localStorage.setItem('value', input.value)
    h2.innerHTML = localStorage.getItem("value")
}
// localStorage.removeItem("value")
// localStorage.clear("value")