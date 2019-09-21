/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//load - только после всей загрузки //DOMContentLoaded срабатывает после загрузки DOM дерева
window.addEventListener("DOMContentLoaded",function() { 
    'use strct';
    let calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");
    let form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");
    let slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js");
    let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");
    let timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");
    let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");
    
    calc();
    form();
    slider();
    tabs();
    timer();
    modal();


});

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    //Calc
    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');

    let personsSum = 0;
    let daysSum = 0;
    let total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = ( daysSum + personsSum)*4000;

        if(restDays.value == '' || personsSum == 0) {
            totalValue.innerHTML = 0;
        }else {
            
            totalValue.innerHTML = total;
        }
    });
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = ( daysSum + personsSum)*4000;

         if( daysSum == 0 || persons.value == '' ) {
            totalValue.innerHTML = 0;
        }else {
            
            totalValue.innerHTML = total;
        }
    });

    place.addEventListener('change', function() {
        if(restDays.value == "" || persons.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    })
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    
    //slider
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
    
    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }
        //скрываем слайды и точки
        slides.forEach((item) => item.style.display = 'none');
        // for(let i = 0; i < slides.length; i++) { //аналог
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));
        //показ
        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('dot-active');
    };

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    //переход по стрелкам
    prev.addEventListener('click' , function() {
        plusSlides(-1);
    })
    next.addEventListener('click' , function() {
        plusSlides(1);
    })

    //точки
    dotsWrap.addEventListener('click', function(event) {
        for(let i = 0; i < dots.length  ; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i]) {
                currentSlide(i+1);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map