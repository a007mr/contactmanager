import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'; // подключаем стили
import App from './App'; // основной компонент, который рендерим ниже
import * as serviceWorker from './serviceWorker'; // метод вызываем ниже

ReactDOM.render(<App />, document.getElementById('root')); // метод рендер - отрисовывает основной компонент - здесь App, который будет доступен в одноименном js файле. Этот компонент мы рендерим в наш хтмл #root. То есть то, что мы видим в Доме - отрисовывается из App.js.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); // метод для создания Прогрессив веб приложений

// index.js - точка входа для реакт приложений
