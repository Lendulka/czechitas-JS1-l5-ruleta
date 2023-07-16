console.log('funguju!');

// RULETA

const spinRoulette = (e) => {
    e.preventDefault()

    const figureInput = document.querySelector('#figure')
    let figureValue = Number(figureInput.value)
    const figureResultElm = document.querySelector('.ruleta__figure')

    if (figureValue === 0) {
        figureResultElm.innerHTML = `<p class="ruleta__figure--zelena">Na ruletě padlo číslo ${figureValue}</p>`
    } else if (figureValue % 2 === 0) {
        if ((figureValue >= 1 && figureValue <= 10) || (figureValue >= 19 && figureValue <= 28)) {
            figureResultElm.innerHTML = `<p class="ruleta__figure--cerna">Na ruletě padlo sudé černé číslo</p>`
        } else {
            figureResultElm.innerHTML = `<p class="ruleta__figure--cervena">Na ruletě padlo sudé červené číslo</p>`
        }
    } else if (figureValue % 2 !== 0) {
        if ((figureValue >= 1 && figureValue <= 10) || (figureValue >= 19 && figureValue <= 28)) {
            figureResultElm.innerHTML = `<p class="ruleta__figure--cervena">Na ruletě padlo liché červené číslo</p>`
        } else {
            figureResultElm.innerHTML = `<p class="ruleta__figure--cerna">Na ruletě padlo liché černé číslo</p>`
        }
    }
}

const ruletaFormElm = document.querySelector('#ruleta__form')
ruletaFormElm.addEventListener('submit', spinRoulette)



