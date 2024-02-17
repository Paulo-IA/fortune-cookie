const messages = [
    {message: "Seja orgulhoso, porém tolerante e generoso."},
    {message: "Uma boa época para terminar tarefas antigas."},
    {message: "Você é jovem apenas uma vez. Depois precisa inventar outra desculpa."},
    {message: "Quando a coceira é dentro da bota, coçar o lado de fora não alivia muito."},
    {message: "As pessoas acham difícil resistir ao seu jeito persuasivo de ser."},
    {message: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."},
    {message: "Não tenha o olho maior do que o estômago."},
    {message: "Não aja como uma rã sentada no fundo do poço."},
    {message: "Pense antes de falar, mas não fale tudo o que pensar."},
    {message: "Amigos há muito distantes estarão retornando a você."},
    {message: "Aquele que ronca mais alto adormece primeiro."},
]

const cookie = document.querySelector("#closedCookie");
const showAnotherMessageBtn = document.querySelector("#showAnotherMessageBtn")
const closedScreen = document.querySelector(".closed");
const openedScreen = document.querySelector(".opened");
const messageElement = document.querySelector("#message")

cookie.addEventListener('click', handleShowMessage)
showAnotherMessageBtn.addEventListener('click', toggleScreen)

function handleShowMessage() {
    messageElement.textContent = choseMessage();
    toggleScreen();
}

function toggleScreen() {
    closedScreen.classList.toggle("invisible") 
    openedScreen.classList.toggle("invisible") 
}

function choseMessage() {
    return messages[(Math.random() * 10).toFixed(0)].message;
}