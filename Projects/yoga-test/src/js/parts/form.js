function form() {
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
    });
}

module.exports = form;