const dota2_button = document.getElementById('start_dota2');
const categories = document.getElementById('categories');
const h1 = document.getElementById('head_main');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quiz_box_Element = document.getElementById('quiz_box');
let i = 0;



const dota2questions = [
    {
        text: 'В каком году был оффициальный релиз дота 2?',
        answers: ['2012', '2013', '2010', '2015'],
        correct: 1,
    },
    {
        text: 'в каком году российская команда впервые выиграла The International по Dota 2?',
        answers: ['2017', '2015', '2023', '2021'],
        correct: 3,
    },
    
];



const topics = {
    dota2: {
        questions: [
            {
                text: 'В каком году был оффициальный релиз дота 2?',
                answers: ['2012', '2013', '2010', '2015'],
                correct: 1,
            },
            {
                text: 'в каком году российская команда впервые выиграла The International по Dota 2?',
                answers: ['2017', '2015', '2023', '2021'],
                correct: 3,
            },
        ]
    },
    anime: {
        questions: [
            {
                text: 'Какую анимацию создал Стивен Чо?',
                answers: ['Аватар', 'Матрицу', 'Спиди', 'Голубого месса'],
                correct: 2,
            },
        ]
    },
    english: {
        questions: [
            {
                text: 'Как на английском языке называется "я"?',
                answers: ['I', 'me', 'we', 'you'],
                correct: 0,
            },
        ]
    },
    math: {
        questions: [
            {
                text: 'Какой алфавит используется для записи японского языка?',
                answers: ['Кириллица', 'Латинка', 'Катаканы', 'Хирагана'],
                correct: 3,
            },
            
        ]
    },
};



btns = document.querySelectorAll('.main_btns');
btns.forEach(element => {
    element.addEventListener('click', start_quiz);
    
});
