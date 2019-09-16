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
                hour.textContent = t.hours;
                min.textContent = t.minutes;
                sec.textContent = t.seconds;

                if(t.total <= 0) {
                    clearInterval(timeinterval);
                }
        }
    }
    //запускаем функцию
    setclock('timer', deadLine);


});