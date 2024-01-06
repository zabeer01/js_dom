const title = document.querySelector('title');
title.innerHTML = 'form';

//////

function validationFrom() {

    const value = document.forms['jsform']['js_input_name'].value;
    const slug = value.toLowerCase().replace(/\s+/g, '');
    if (value.length > 10 ) {
        return false;
    }
}