document.getElementById('button').addEventListener('click', () => {
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let hexText = document.getElementById('color')
    let hexOne = ''
    let hexTwo = ''

    for (let i = 0; i < 6; i++) {
        let element = Math.floor(Math.random() * hex.length);
        hexOne += hex[element]

        element = Math.floor(Math.random() * hex.length);
        hexTwo += hex[element]
    }

    document.body.style.background = `linear-gradient(60deg, #${hexOne}, #${hexTwo})`
    hexText.innerHTML = hexOne + ' and #' + hexTwo
    
    function copyText(){
        let style = `background: linear-gradient(60deg, #${hexOne}, #${hexTwo});`
        navigator.clipboard.writeText(style)
    }
    
    document.getElementById('copy').addEventListener('click', copyText, false)
})

