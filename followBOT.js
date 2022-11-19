//Bunny - Cute Bunny Bot

let contador = 0;
let arr = document.querySelectorAll('._acas');
arr.forEach((v, i) => {
    setTimeout(() => {
        if (!v.classList.contains('_aade')) {
            v.click();
            contador++;
            console.log(`Bunny seguiu:  ${contador} `);
        } else {
            console.log('Você já segue.');
        }
    }, i * 10000)
});