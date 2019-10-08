window.addEventListener('DOMContentLoaded', function() {
    let tab = document.getElementsByClassName('info-header-tab');
    let tabContent = document.getElementsByClassName('info-tabcontent');
    let info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');

        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if( tabContent[b].classList.contains('hide')) {
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(e) {
        let target = e.target;
        if(target.className == 'info-header-tab') {
            for(let i = 0; i < tab.length; i++) {
                if( target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //timer------------------------
    let deadline = '2019-11-25';
     
    function getTimeRemaining(endtime) {
        //получаем разницу а милисекундах
        let t = Date.parse(endtime) - Date.parse(new Date());
        ///1000 секунды
        let seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'totla' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    };

    function setClock(id, endtime) {

        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.hours');
        let seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if(t.totla <= 0) {
                clearInterval(timeInterval);
            }
        };
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);



    };

    setClock('timer', deadline);


    //MODAL-------------------------

    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        this.classList.add('more-slash');
        overlay.style.display = 'block';
        document.body.style.overflow ='hidden';

    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-slash');
        document.body.style.overflow ='';

    });


    //AJAX FORM
    let message = new Object();
    message.loading = "Loading ...";
    message.success = "Thanks we will call you..";
    message.failure = "Something gone wrong..";

    let form = document.getElementsByClassName('main-form')[0];
    let input = form.getElementsByTagName('input');
    let statusMess = document.createElement('div');
    statusMess.classList.add('status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.appendChild(statusMess);

        //AJAX
        let request =new XMLHttpRequest();
        request.open("POST","server.php");
        //кодировка данных
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //получаем данные из инпутов
        let formData = new FormData(form);
        request.send(formData);

        //статус готовности в данный момент
        request.onreadystatechange = function() {
                if(request.readyState < 4) {
                    statusMess.innerHTML = message.loading;
                } else if( request.readyState === 4) {
                    if(request.status == 200 && request.status < 300) {
                    statusMess.innerHTML = message.success;
                    //добавляем контект на страницу
                    } else {
                        statusMess.innerHTML = message.failure;
                    }
                }
        }
        //clear form input
        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    })






});