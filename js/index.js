const dota2_button = document.getElementById('dota2');
const categories = document.getElementById('quiz_window');
const h1 = document.getElementById('head_main');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quiz_box_Element = document.getElementById('quiz_box');
let i = 0;



const dota2questions = [
    {
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
let step = 0;

dota2_button.addEventListener('click', function () {

    deliteBtns();
    changeTitle(step);
    addBtns(step);
    step++;
}
);


// 1 задача удалятять прошлые кнопки после нажатия на выбор темы
function deliteBtns() {
    let btns = document.querySelectorAll('.main_btns');
    btns.forEach(element => {
        element.remove();
    });

}
// меняем тему в TITLE 

function changeTitle(step) {
    let title = document.querySelector('.header_main');
    title.innerHTML = dota2questions[step].text;

}
// 2 задача вывод новых кнопок с вопросами и тему
function addBtns(pos) {
    let body = document.querySelector('.categories');

    let arrAnswer = dota2questions[pos].answers;

    arrAnswer.forEach(element => {
        let btn = document.createElement('button');
        btn.classList.add('main_btns');
        btn.innerHTML = element;
        btn.addEventListener('click', function () {
            deliteBtns();
            changeTitle(step);
            addBtns(step);
            step++;

        }
        );
        body.append(btn);
    });

}



// 3 проверять правильность ответа
//  менять вопрос с ответами ( если выбрали правильный вариант вопроса) 