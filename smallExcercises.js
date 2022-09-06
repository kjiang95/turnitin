// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved')
        }, ms)
    })
} 



// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
    el.style.position = 'relative'
    !el.style.left && (el.style.left = '0px')

    let pixelCounter = 0

    let intervalId = null

    const moveElByTenPx = () => {
        if (pixelCounter == 100) {
            clearTimeout(intervalId)
        } else {
            el.style.left = parseInt(el.style.left, 10) + 1 + 'px'
            pixelCounter ++
        }
    }

    intervalId = setInterval(moveElByTenPx, 10)
}



// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
    return [...new Set(xs)]
} 
