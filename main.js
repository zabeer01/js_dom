const test = document.getElementById('test_01');
test.innerHTML = 'test_seccessful';

const test_02 = document.querySelectorAll('p');
for(i=0; i<test_02.length; i++){
    test_02[i].style.color = '#e31010'; 
}

const test_03 = document.querySelector('a');
test_03.innerHTML = 'php with laravel';

// the major difference between 
const test_04 = document.querySelector('title');
test_04.innerHTML = 'php with laravel';
///
function click_button(){
   click_button =  document.getElementById('button_id').style.color = 'green';
   return click_button;
}