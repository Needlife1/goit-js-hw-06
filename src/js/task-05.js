

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
    
    // С помошью textContent передаем.....
    refs.spanTextEl.textContent = event.currentTarget.value || 'Anonymous';
    
};

