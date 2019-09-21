function modal() {
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
}

module.exports = modal;