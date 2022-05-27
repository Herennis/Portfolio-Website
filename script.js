var logo2 = document.getElementById('logo2');
const message = document.getElementById('message');

logo2.onclick = function() {
    var test = document.getElementById('message');
    if (test.style.display !== 'none') {
        test.style.display = 'none';
    }
    else{
        test.style.display = 'block';
        test.style.visibility = 'visible';
    }
}

const btn = document.getElementById('logo');

btn.addEventListener('click', ()=> {
message.style.display = 'none';

const box = document.getElementById('message');
box.style.display = 'block';
});

//document.getElementById('logo').remove('message');