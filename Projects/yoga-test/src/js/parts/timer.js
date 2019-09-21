function timer() {
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
}

module.exports = timer;