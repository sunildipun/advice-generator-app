const adviceTextDom = document.querySelector('.card__advice');
const adviceIdDom = document.querySelector('.advice-id');

const dice = document.querySelector('.dice');

const desktopImage = document.getElementById('desktop');
const mobileImage = document.getElementById('mobile');



dice.addEventListener('click', event => {
    fetchAdvice();
});

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (response.ok) {
            const randomAdvice = await response.json(); // Get JSON value from the response body
            console.log(randomAdvice);
            let {id, advice } = randomAdvice.slip;
            adviceIdDom.textContent = id;
            adviceTextDom.textContent = advice;
        } else {
            throw('Error');
        }
    } catch (error) {
        console.log('Error Response',error)   
    }
}

fetchAdvice();