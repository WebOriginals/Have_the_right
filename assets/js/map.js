var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [50.808856, 37.185720], // Cтаромышастовская
        controls: [ ],  // Массив для навигации карты
        zoom: 8
    }, {
        searchControlProvider: 'yandex#search'
    });

// Создание геообъекта с типом точка (метка).
    //Переменная myGeoObject


// Создание геообъекта со cвоим изображением.
    //Переменная myPlacemark
    var myPlacemark = new ymaps.Placemark([50.607083, 36.581339], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -40]
    });

    // Создание геообъекта со cвоим изображением.
    //Переменная  myUly
    var myUly = new ymaps.Placemark([50.945946, 37.806659], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map.png',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -40]
    });

// Размещение геообъекта на карте.
    myMap.geoObjects

        .add(myUly)
        .add(myPlacemark);

// Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
    myMap.behaviors.disable(['scrollZoom' , 'multiTouch' , 'drag']);
}



