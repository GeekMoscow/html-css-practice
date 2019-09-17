//load - только после всей загрузки //DOMContentLoaded срабатывает после загрузки DOM дерева
window.addEventListener("DOMContentLoaded",function() { 
    'use strct';
    let tab = document.querySelectorAll(".info-header-tab");
    let info =  document.querySelector(".info-header");
    let tabcontent = document.querySelectorAll(".info-tabcontent");

    //Cкрываем все элементы кроме 1
    function hideTabContent(a) {
        for(let i = a; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove('show');
            tabcontent[i].classList.add('hide');

        }
    };
    hideTabContent(1);

    function showTabContent(b) {
            //проверяем скрыт ли элемент и раскрыавем его
        if(tabcontent[b].classList.contains('hide')) {
            tabcontent[b].classList.remove('hide');
            tabcontent[b].classList.add('show');
        }
    };

    info.addEventListener('click',function(event) {
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i<tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer
    //задаем конечную. дату
    let deadLine = '2019-10-21';

    //узнать вермя сейчс и между дедлайном + вычесляем , часы, мин, сек
    function getTimeremaining(endTime) {
        //получаем милисикунды разницу дедлайн - сейчас
        let t = Date.parse(endTime) - Date.parse(new Date());
        //получаем данные из наших миллисекунд
        //получаем остаток от минут // t/1000 - кол-во секунд
        let seconds = Math.floor((t/1000) % 60);

        let minutes = Math.floor((t/1000/60) % 60);

        let hours = Math.floor(t / (1000*60*60));

        let days = Math.floor((t/1000/60/60) % 24);
        let CountDays =  Math.floor(t / (1000*60*60*24));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

        
    }
            //превращение стат верстки в динамическую
        //принимает два аргумента
        function setclock(id, endtime) {
            let timer = document.getElementById(id);
            let hour = timer.querySelector('.hours');
            let min = timer.querySelector('.minutes');
            let sec = timer.querySelector('.seconds');

            let timeinterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeremaining(endtime);
                hour.textContent = addZero(t.hours);
                
                min.textContent = addZero(t.minutes);
                
                sec.textContent = addZero(t.seconds);
                

                function addZero(time){
                    if(time < 10) {
                        return  '0' + time;
                    } else {
                        return time;
                    }
                }

                if(t.total <= 0) {
                    clearInterval(timeinterval);
                    hour.textContent = '00';
                     min.textContent = '00';
                    sec.textContent = '00';
                };
        }
    }
    //запускаем функцию
    setclock('timer', deadLine);

    //Modal window
    let more = document.querySelector('.more');
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');
    //клик на кнопку
    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
    //запрет пеермещения страницы когда открыта
        document.body.style.overflow = 'hidden';
    });
    //закрытие модального окна
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    let infoTab = document.querySelector
    
    //Form
    let message = {
        loading: "Закгрузка...",
        success: "Спасибо, скоро с вами свяжемся",
        failure: "Что-то пошло не так..."
    };
    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');
    let  statMes = document.createElement('div');
    statMes.classList.add('status');

    //вешаем обработчик событий на форму, не на кнопку
    form.addEventListener('submit', function(event) {
           //отменяем стандартное поведение браузера, перзагр страницы 
           event.preventDefault();
           form.appendChild(statMes);

           let request = new XMLHttpRequest();
           request.open('POST','server.php');
             //request.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
             //для json
            request.setRequestHeader('Content-Type','application/json; charset=utf-8');
          
            //получаем данные от пользователя
           let formData = new FormData(form);
           //в json формат - formData в Json
            let obj = {};
            formData.forEach(function(value , key) {
                obj[key] = value;
            })
            let json = JSON.stringify(obj);
            //отправляем json
           request.send(json);


        //    request.send(formData);

           request.addEventListener('readystatechange', function() {
               if(request.readyState < 4) {
                   statMes.innerHTML = message.loading;
               } else if(request.readyState === 4 && request.status == 200) {
                statMes.innerHTML = message.success;

               } else {
                statMes.innerHTML = message.failure;

               }
           });

           for(let i = 0; i < input.length; i++) {
               input[i].value = '';
           }
    })

});