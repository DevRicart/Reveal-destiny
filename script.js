// Variaveis?
// Dados de entrada?
// Dados de saída?
const answerElement = document.querySelector('#answer')
const inputQuestion = document.querySelector('#inputQuestion')
const askButton = document.querySelector('#askButton')

const answers = ['Não', 
                 'Provavelmente', 
                 'Sim',
                 'Se concentre e pergunte novamente',
                 'Não quero estragar a surpresa',
                 'Pode ter certeza que sim!',
                 'Pode ter certeza que não!',
                 'É mais fácil um porco criar asas',
                 'Nem sonhando...',
                 'Vejo até coisa melhor no seu futuro',
                 'Essa está muito difícil de descobrir...',
                 'Talvez em 2034',
                 'Isso nem mesmo eu consigo saber']

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
  }, 3000)
}
