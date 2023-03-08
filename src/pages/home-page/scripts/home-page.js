/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

const questionsHolders = document.querySelectorAll('.faq-component__single-question-holder')
const answerElements = document.querySelectorAll('.faq-component__answer')

questionsHolders.forEach((questionHolder) => {
    questionHolder.querySelector('.faq-component__title').addEventListener('click', () => {
        if (questionHolder.querySelector('.faq-component__answer').getAttribute('class') === 'faq-component__answer active') {
            closeQuestionHolders()
        } else {
            closeQuestionHolders()
            questionHolder.querySelector('i').classList.remove('fa-plus')
            questionHolder.querySelector('i').classList.add('fa-minus')
            questionHolder.classList.add('active')
            questionHolder.querySelector('.faq-component__answer').classList.add('active')
        }
    })
})

function closeQuestionHolders() {
    questionsHolders.forEach((questionHolder) => {
        questionHolder.classList.remove('active')
    })
    answerElements.forEach((answer) => {
        answer.classList.remove('active')
    })
    document.querySelectorAll('i').forEach((icon) => {
        icon.classList.add('fa-plus')
        icon.classList.remove('fa-minus')
    })

}