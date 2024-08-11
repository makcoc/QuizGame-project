const dota2_button = document.getElementById('start_dota2');
const categories = document.getElementById('categories');
const h1 = document.getElementById('head_main');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const quiz_box_Element = document.getElementById('quiz_box');
let i = 0;



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


function start_quiz(event) {
    categories.style.display = "none";
    h1.style.display = "none";
    quiz_box_Element.classList.remove('hide');
    
    let theme =  event.target.getAttribute('data-id');
    let answers = topics[theme].questions[i].answers;
    let body_answers = document.querySelector('.answers'); 
    // создаем кнопки 
    answers.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML=`<button class="answers_btn">${element}</button>`;
        body_answers.append(li);
        let correc = topics[theme].questions[i].correct;
        let answer = topics[theme].questions[i].answers;
        console.log(correc);
        console.log(answer);
    li.addEventListener('click', next_quest.bind(null, answer, correc));

    });
    let question_text = document.querySelector('#question_text');
    question_text.innerHTML = topics[theme].questions[i].text;

};

  function next_quest(e,answers, correct) {
        console.log(answers);
        console.log(correct);

    let btn_li = e.target;
    let correct_answer = topics[theme].questions[i].correct;
    let user_answer = btn_li.textContent;

    // сравнение на правильность
    
    if (user_answer === correct_answer) {
      console.log('Правильный ответ!');
      // показать надпись о правильности ответа
      let feedback_text = document.querySelector('#feedback_text');
      feedback_text.innerHTML = 'Правильный ответ!';
    } else {
      console.log('Неправильный ответ!');
      // показать надпись о неправильности ответа
      let feedback_text = document.querySelector('#feedback_text');
      feedback_text.innerHTML = 'Неправильный ответ!';
    }
    
    // показать следующий вопрос через 2 секунды
    setTimeout(() => {
      i++;
      let question_text = document.querySelector('#question_text');
      question_text.innerHTML = topics[theme].questions[i].text;
      let answers = topics[theme].questions[i].answers;
      let body_answers = document.querySelector('.answers');
      body_answers.innerHTML = '';
      answers.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = `<button class="answers_btn">${element}</button>`;
        body_answers.append(li);
        li.addEventListener('click', next_quest);
      });
    }, 2000);
  }