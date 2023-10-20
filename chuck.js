let text = document.getElementById('jokeText')

//async

async function getJoke() {
    try {
        url = 'https://api.chucknorris.io/jokes/random'
        let mannaG = await fetch(url)

        mannaG = await mannaG.json()
        return mannaG.value
    } catch (error) {
        console.log(error, 'Ошибка!');
}
}
async function Norris() {
    let fun = await getJoke()
    console.log(fun);
    jokeText.innerHTML = fun
    
    
} 

