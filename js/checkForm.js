function checkForm() {
    if (!marked) {
        document.querySelector('#contact #zustimmung').style.color = 'rgb(104, 1, 0)';
        document.querySelector('#contact #zustimmung').style.textDecoration = 'underline';
        sessionStorage.success = false;
        return false;
    } else {
        sessionStorage.success = true;
    }
}

$(window).on('load', () => {

    if (sessionStorage.success === 'true') {
        document.querySelector('#contact #msg').style.opacity = 1;
    }
    sessionStorage.success = false;
    if (window.location.href.endsWith('contact')) {
        document.querySelector('#contact #x-icon').style.zIndex = 10;
        document.querySelector('#contact>h1').style.display = 'none';
        document.querySelector('#contact #form-container').style.display = 'block';
    }
});

$('#contact #msg').delay(3000).animate({ opacity: 0 });
