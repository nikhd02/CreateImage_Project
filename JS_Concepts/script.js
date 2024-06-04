let timeoutId;

function useDebounce(fn, time) {
    return function () {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(fn, time)
    }
}

async function getProducts(text) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${text}'`)
    const data = await res.json();

    console.log(data)

}

const getDebouncedProducts = useDebounce(getProducts, 1000)

const input = document.getElementById('search-box')

input.addEventListener('keyup', (e) => {
    getDebouncedProducts(e.target.value);
})
