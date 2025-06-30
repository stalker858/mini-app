// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Получение данных о пользователе
const initData = tg.initDataUnsafe;
console.log("Initialization data:", initData);

// Обработка кнопки "Добавить в корзину"
document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', () => {
        const product = { name: '3шт udn bar', price: 1400 };
        tg.sendData(JSON.stringify(product));
    });
});

// Обработка кнопки "Корзина"
document.getElementById('cart-button').addEventListener('click', () => {
    alert("Открытие корзины...");
    // Здесь можно перенаправить пользователя в корзину
});

// Уведомление Telegram, что Mini App готов к отображению
tg.ready();