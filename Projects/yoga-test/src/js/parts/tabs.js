function tabs() {
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
}

module.exports = tabs;