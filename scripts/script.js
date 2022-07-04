window.onload = function () {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    $(function () {
        $("#accordion").accordion({
            heightStyle: "content"
        });
    });

    let button = document.getElementById('button'),
        inputName = document.getElementById('input-name'),
        inputSurname = document.getElementById('input-surname'),
        inputNumber = document.getElementById('input-number'),
        inputCountry = document.getElementById('input-country'),
        inputIndex = document.getElementById('input-index'),
        inputAddress = document.getElementById('input-address'),
        window = document.getElementById('window'),
        void1 = document.getElementById('void');


    button.onclick = function () {
        if (!inputName.value) {
            alert('Введите Имя');
            return;
        }
        if (!inputSurname.value) {
            alert('Введите свою фамилию');
            return;
        }
        if (!inputNumber.value) {
            alert('Заполните поле "Телефон"');
            return;
        }
        if (!inputCountry.value) {
            alert('Введите свою страну');
            return;
        }
        if (!inputIndex.value) {
            alert('Введите свой индекс (индекс должен содержать 6 символов)');
            return;
        }
        if (inputIndex.value.length !== 6) {
            alert('Ошибка: индекс должен содержать 6 символов');
            return;
        }
        if (!inputAddress.value) {
            alert('Введите свой адрес');
            return;
        }

        void1.remove();
        window.style.display = 'flex';
    };


    // Только цифры

    inputIndex.onkeypress = (e) => {
        if (isNaN(parseInt(e.key))) {
            return false;
        }
    };

// Увеличить размер фото
    $('.image').magnificPopup({
        type:'image',
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    // Маска телефона
    let phoneInput = $('#input-number');
    phoneInput.inputmask({"mask": "(+999) 99-999-99-99"});

}


