// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
 placeholderEl: document.querySelector('input'),
 spanTextEl: document.querySelector('span')
}

refs.placeholderEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    // У event = (SubmitEvent) есть currentTarget(текушая цель)
    // свойство currentTarget на обекте события (event) ссылаеться на тот елемент 
    // который прослушивает событие (refs.placeholderEl)
    // value собераеть значение с инпута
    console.log(event.currentTarget.value);
    // С помошью textContent передаем.....
    refs.spanTextEl.textContent = event.currentTarget.value
    
};

