const dota2_button = document.getElementById('start_dota2');
const categories = document.getElementById('quiz_window');
const h1 = document.getElementById('head_main');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quiz_box_Element = document.getElementById('quiz_box');
let i = 0;
https://github.com/makcoc/QuizGame-project/blob/main/js/index.js


const dota2questions = [
    {https://github.com/makcoc/QuizGame-project/blob/main/js/index.js
        text: 'В каком году был оффициальный релиз Dota 2?',
        answers: ['2012', '2013', '2010', '2015'],
        correct: 1,
    },
    {
        text: 'в каком году российская команда впервые выиграла The International по Dota 2?',
        answers: ['2017', '2015', '2023', '2021'],
        correct: 3,
    },
    {
        text: 'Какой предмет из перечисленных является самым дорогим?',
        answers: ['Divine Rapier', 'Bloodthorn', 'Scythe of Vyse', 'Overwhelming Blink'],
        correct: 3,
    },
    {
        text: 'Какой нейтральный крип имеет способность Purge',
        answers: ['Сатир-колдун', 'Сатир-мучитель', 'Сатир-душекрад', 'Призрак'],
        correct: 0,
    },

    {
        text: 'Сколько маны воссстанавливает один заряд Magic Stick?',
        answers: ['10', '15', '18', '20'],
        correct: 1,
    },
];

dota2_button.addEventListener('click', function() {
  categories.classList.add('hide')}
                             );
        


