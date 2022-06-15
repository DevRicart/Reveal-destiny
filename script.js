// Variaveis?
// Dados de entrada?
// Dados de saída?
const answerElement = document.querySelector('#answer')
const inputQuestion = document.querySelector('#inputQuestion')
const askButton = document.querySelector('#askButton')

const answers = ['Não', 'Provavelmente', 'Sim']

// Clicar em fazer pergunta
function makeQuestion() {
  if (inputQuestion.value == '') {
    alert('Digite sua pergunta primeiro!')
    return
  }

  askButton.setAttribute('disabled', true)

  const question = '<div>' + inputQuestion.value + '</div>'

  // Gerar um número aleatório
  const totalresponses = answers.length
  const randomNumber = Math.floor(Math.random() * totalresponses)

  console.log(answers[randomNumber])
  answerElement.innerHTML = question + answers[randomNumber]

  answerElement.style.opacity = 1

  // Sumir com a resposta depois de 3 seg
  setTimeout(function () {
    answerElement.style.opacity = 0
    askButton.removeAttribute('disabled')
  }, 2000)
}
