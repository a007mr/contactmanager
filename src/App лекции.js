import React, { Component } from 'react'; // здесь подключаем Компонент
import './App.css';
import { setPriority } from 'os';

class App extends Component {
  // наши сабклассы из ЕС6 (родитель - Компонент)
  render() {
    const name = 'Larry'; // создаем переменную
    const showHello = true; // вторая
    const showMath = true;
    const num1 = 40;
    const num2 = 23;

    let math;
    if (showMath) {
      // если вернем в ретурне {math}, то он будет зависеть от этого условия и значения шоуМатс
      math = (
        <h4>
          {num1} + {num2} = {num1 + num2}
        </h4>
      );
    } else {
      math = null;
    }

    return (
      // внутри return нельзя создавать переменные
      // ниже то, что мы видим в браузере
      <div className="App">
        <h1>The App Component</h1>
        {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        <h4>Hello {name.toUpperCase()}</h4>
        <h4>1 + 1 = {1 + 1}</h4>
        {math}
      </div> // вывод переменной в скобках + может считать
      // на 14 строчке условие Если тру, то покажем заголовок, если нет, то ничего.
    );
  }
}

export default App;






// КАК УСТАНОВИТЬ РЕАКТ

// ===================== Раздел 3: Компоненты, JSX и пропсы =================

// === 3.1 Thinking in Components === 
// Реакт основывается на компонентах (state or props). Смарт компонент - который может изменяться. Dumb компонент - одинаков для всех (типа блок в регистрацией в сервисе одников всегда у всех). Для Smart компонентов нужны будут классы. Для дамб - можно использовать просто функцию.
// Контекст API позволяет обмениваться данными между компонентами
// На примере нашего сервиса контактов. У нас будет State showContactInfo, где мы сможем менять статус (тру и фолс) при клике. И если бдет тру, то мы покажем данные, иначе скроем.


// === 3.2 What is JSX? === 
// JSX is a JS extension that allows us to put HTML inside of our JS
// Couple of rules in JSX:
// 1. We use className instead class attribute in HTML
// 2. We use htmlFor instead of "for" attribute
// 3. if we use single tags like <input>, <br> we should use / in the end. Like <input type="text" />
// 4. you can return only one single element:
{
  /* <div>
<h1>Hello</h1>
</div>
но так нельзя: 
<div>
<h1>Hello</h1>
</div>
<div> 
the world
</div> */
}
// если мы хотим вернуть много элементов, нам просто надо будет завернуть все в 1 родительский элемент. Например
{
  /* <section> 
<div>
<h1>Hello</h1>
</div>
<div> 
the world
</div> 
</section> */
}

// JSX - синтаксический сахар, который упрощает создание объектов. На чистом JS то, что мы написали на строках 33-35 выглядело бы так:
// return React.createElement(
//   'div',
//   { className: 'App' },
//   React.createElement('h1', null, 'The title of h1')
// );


// === 3.3 JSX Expressions ===
// разобрал на строках 7-23 и плюс в ретурне есть условия


// === 3.4 Создание первого компонента ===
// 1. Создаем папку components
// 2. создаем файл Component.js (название компонентов с большой буквы идут)
// 3. Создаем сам компонент
// - дальше можем подсмотреть в нашем плагине ES7 React/Redux/... список сниппетов для создания компонентов. Для компонента есть class-based сниппет rcc.
// - то есть идем в файл component.js and печатаем rcc, жмем таб и получает шаблон.
// - выносим вниз export default Contact; (это не криминально, но ему так больше нравится)
// - создаем див с ли
// 4. Идем в Апп.жс
// - делаем импорт Компонента
// - и помещаем Компонент в ретурн, чтобы он отрендерил на странице


// === 3.5 Functional Components === 
// Создаем компонент Хедер (аналогично тому, как выше)
// - только используем шаблон rfc для функционального компонента
// - делаем заголовок h1 в этом компоненте и также импортируем в Апп.жс
// - делаем из функци теперь переменную в виде стрелковой функци

// === 3.6 Working with Props ===
// Props - properties
// мы можем использовать их в компонентах, как атрибуты
// то есть в вызове компонента в Апп.жс мы создаем пропс с каким-то значением (например, Наш заголовок). Идем в сам компонент, вставляем в виде параметра - props и его же повторяем в самой функции. И теперь мы можем делать значения компонента динамическими. То есть назначать их в момента вызова, а не создания функции.
// - сделал в Апп.жс <Header branding="Contact Manager333" />
// - в Хедер сделал параметр props и значение в функции {props.branding}
// делаем также Пропсы для Контакт: имя, мыло и телефон
// в Классе (а Contact.js у нас класс) - пропсы не указываются в параметре функции, тк это класс, а не функция. Поэтому в классе они прописываются через this. For instance, {this.props.name}, {this.props.email}, {this.props.phone}
// create second contact component in App.js
// и делаем деструктуризацию в компонентах:
// - const { name, email, phone } = this.props;  // перед возвратом
// - и в самом возврате тогда меняем {this.props.name}, на просто {name}
// - аналогично в Хедере, там только без зис


// === 3.7 Typechecking with PropTypes ===
// default props - пропс который будет по умолчанию отображаться, если что-то не загрузится.
// Делаем его в Хедаре, где все статичное
// создаем объект Header.defaultProps под функцией, где ключом будет branding, тк в эту переменную в JSX  должно передаваться значение. Если уберем в вызове брендинг, то теперь у нас будет показываться наш defaultProps

// PropTypes -  валидация данных в пропсе. Наш плагин может создать его с помощью impt таб.
// или вот как это делается import PropTypes from 'prop-types';  // где в скобках указывается метод его.
// дальше создаем объект:
// Header.propTypes = {
//   branding: PropTypes.string.isRequired
//  };
// Теперь если мы замени PropTypes.string.isRequired на PropTypes.object.isRequired то в консоли выйдет ошибка. Это способ проверки данных.
// делаем такуую проверке также в Контакте
// в классе эту проверку также можно сделать внутри класса (но автор предпочитает снаружи). Если внутри, то делаем метод статик сразу вначале класса перед рендером:
// static propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

// === 3.8 CSS in React === 
// - стили можно задавать в JSX прямо внутри тегов. Только значения прописываются в двойных фигурных скобках {{}}
// пример: <h1 style={{ color: 'red', fontSize: '50px' }}>{branding}</h1>
// верблюжий стиль поэтому fontSize, а не font-size

// другой способ создания стилей - прописать их в переменной после компонента и вставить уже в самом компоненте переменную
// в функции:  <h1 style={headingStyles}>{branding}</h1>
// за функцией:
// const headingStyles = {
//   color: 'red',
//   fontSize: '50px'
// };

// другой способ создания стилей - создаем отдельный css файл для каждого компонента в папке components. Например, для контакта создаем файл contact.css и прописываем там стиле
// и делаем импорт внутри Contact.js - import './contact.css'

// он больше предпочитает делать глобальные стили в app.css и не создавать отдельные css файлы для каждого компонента, но это хороший способ, чтобы была сразу видна логика в каждом компоненте - вот компонент, вот стили. Мне нравится идея.

// === 3.9 Adding Bootstrap ===
// 1. устанавливаем бутстрам в терминале npm install bootstrap
// 2. прописываем в Апп жс импорт import 'bootstrap/dist/css/bootstrap.min.css'

// начинаем работать с бутстрапом. Он прописывает стили в Хедере прямо в месте, где мы возвращаем.



// ================== Раздел 4: State&The context API =================

// === 4.1 Creating State === 

// Стейты - это компоненты внутри компонента
// то есть нам создать компонент Contacts (во множественном)
// а внутри него разместить Стейт, который будет хранить все контакты разных людей
// и внутри Стейта мы создадим цикл, который будет перебирать контакты и выводить в нужном порядке
// Если мы делаем State, то компонент должен быть Классом

// - создаем файл contacts.js
// - делаем компонент rcc
// - делаем конструктор
// - в нем прописываем super() - метод наследования от родителя
// - создаем стейт => в конструкторе он создается так:
// this.state = { ... }  => в объекте указываем наши данные контактов. При этом ключ будет массив объектов contacts

// пример стейта внутри конструктора
// constructor() {
//   super();
//   this.state = {
//     contacts: [
//       {
//         id: 1,
//         name: 'John Doe',
//         email: 'jdoe@gmail.com',
//         phone: '555-555-5555'
//       },
//       {
//         id: 2,
//         name: 'Karreen Williams',
//         email: 'karren@gmail.com',
//         phone: '222-222-2222'
//       },
//       {
//         id: 3,
//         name: 'Henry Johnson',
//         email: 'henry@gmail.com',
//         phone: '111-111-1111'
//       }
//     ]
//   };
// }

// - дальше делаем в ретурне цикл, где перебираем каждый объект стейта
// в Реакте мы используем цикл map!
// - в Апп.жс отключаем компонент Контакт и меняем на контакты. Теперь используем только контакты. И убираем в вызове тоже этот компонент.

// теперь вставляем компонент Контакт в самих Контактах уже
// и указываем пропсы в вызове Контакта
// добавляем в вызове только еще пропс id - как уникальный ключ, чтобы он мог находить нужный объект

// ВТОРОЙ СПОСОБ создания стейта - если нам не нужен конструктор особо (только для создания стейта), то тогда создаем стейт без конструктора и this. Просто пишем:
// state = {...} и внутри наши контакты

// сокращаем в вызове - вместо того, чтобы обращаться к каждому свойству отдельно, можно в цикле перебирать весь объект и он сам расставит все по местам, тк понимает по ключам в Контакте пропсы. Для этого только в Контакте будем возвращать contact.name и тд + в переменной просто запишем contact, а не точно каждое свойство.
// То есть было в Контактах:
// name={contact.name}
// email={contact.email}
// phone={contact.phone}

// стало:
// contact={contact}

// также в Контакте мы можем сделать деструктуризацию и передавать все-таки не contact.name, а просто name, как было раньше. Но тогда переменную надо прописать так const { name, email, phone } = this.props.contact;, а не так const { contact } = this.props;
// то есть мы указываем в переменной, что забираем конкретные данные не просто из пропса, а из его свойства contact, ведь контакт теперь находится внутри объекта Стейт:
// state = {
//   contacts: [{...}]
// }

// в этом случае надо только проверку пропТайпс заменить на проверку объекта, а не строк - contact: PropTypes.object.isRequired


// === 4.2 Events in React=== 

// Делаем открытие контента при клике на иконку
// вначале вставляем иконку в Контакте рядом с именем юзера
// обработчик прописываем в том месте, где хотим отслеживать событие, очень похоже на инлайновое прописание JS в HTML
// Пример: <i onClick={this.onShowClick} className="fas fa-sort-down" />  // this - потому что функция будет относиться к этому классу. onClick - потому в JSX кэмел написание не onclick

// дальше создаем эту ф онШоуКлик
// ВАЖНЫЙ момент
// Для того, чтобы в функции мы могли получить доступ к this (чтобы в итоге в ней читалась информация), то мы должны использовать один из 2 способов (иначе ф работать не будет):
// 1. Сделать стрелковую функцию типа
//  onShowClick = () => {
//   console.log(this.state);
// }
// 2. Или прописать bind() в обработчике.
// <i onClick={this.onShowClick.bind(this)} className="fas fa-sort-down" />

// он не видет this - потому что это кастомный метод, а не встроенный в реакт. Поэтому выдает ошибку, если не делать как выше.

// также можно при клике передавать какой-то параметр или любое значение. Для этого в обработчике после this, указываем, что именно надо. А в самое функции первым параметро указываем, что надо забирать.
// Здесь мы выдаем в консоль имя человека, по которому кликнули
{
  /* <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down" />

onShowClick = (name, e) => {
  console.log(name);
}; */
}


// === 4.3 Changing State ===
// будем менять статус у контакта при клике на него

// оффтоп - есть элементы, которые мы не используем. Например, пустые дивы. В консоли Реакта он будет виден серым цветом.
// Если он нам не нужен, например, в контактах нам не нужен этот див:

{
  /* <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div> */
}

// То мы просто меняем его на React.Fragment. И теперь в ДОМе не будет отображаться лишний элемент. Итоговый вариант:

{
  /* <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment> */
}

// в Контакте делаем переключатль Стейта:
state = {
  showContactInfo: true // указываем значение по дефолту
};

onShowClick = e => {
  // функция при клике
  this.setState({ showContactInfo: !this.state.showContactInfo }); // мы не можем напрямую обратиться к this.state, так как кастомный метод и он не видит this. Поэтому мы используем метод setState(), чтобы обратиться к showContactInfo внутри.     // !this.showContactInfo - означает переключить на противоположны статус. Если тру, то включит фолс. И наоборот.
}; // также можно прописать this.setState({ showContactInfo: !this.state.showContactInfo });  сразу в обработчике, если мы делаем такую простую вещь и отдельная ф необязательна

то есть вот как будет выглядеть обработчик и функция сразу 

      <h4>
          {name} <i 
          onClick={() => 
            this.setState({ showContactInfo: !this.state.showContactInfo })
          } 
          className="fas fa-sort-down" />
        </h4>

// теперь отрисовываем изменения в ЮИ при смене статуса:
// 1. Создаем переменную шоуКонтакт равную нашему стейту
// 2. в Рендере прописываем условие, если тру у шоуКонтакт, то отрисовывем в скобках то, что было. Иначу нулл

// {showContactInfo ? (
//   <ul className="list-group">
//     <li className="list-group-item">Email: {email}</li>
//     <li className="list-group-item">Phone: {phone}</li>
//   </ul>
// ) : null}


// === 4.4 Changing State from Another Component ===
// как удалять данные из другого компонента

// создаем иконку удаления (попутно прописав курсор поинтер у иконки скрытия)
// <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} />


// Теперь делаем обработчик для иконки и вызываем ф онДилитКлик
{/* <i
    className="fas fa-times"
    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
    onClick={this.onDeleteClick}
  /> */}

  // в онДилитКлик мы обращаемся к пропсу deleteClickHandler
          // onDeleteClick = e => {
          //   this.props.deleteClickHandler();
          // };

// Теперь идем в Контакты и прописываем пропс у Контакта с вызовом ф deleteContact
{/* <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact}/> */}

// - при этом нам надо взять id  элемента, на котором был клик, чтобы понимать, что удалять
//     - используем метод bind
//       <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)}/>

// Идем делать здесь ф deleteContact

// deleteContact = id => {       // параметр айди, который забираем из bind
//   const { contacts } = this.state;      // делаем деструктуризацию для доступа к контактам из стейта

//   const newContacts = contacts.filter(contact => contact.id !== id);    // используем фильтр, чтобы удалить элемент. Возвращаем массив с элементами айди которых не равен тому айди, по которому кликнули удалить

//   this.setState({     // тк это кастомный метод и мы не можем обратиться напрямую к this.state, то мы используем метод setState(), в котором перезаписываем наши новые контакты
//     contacts: newContacts
//   });
// };


// === 4.5 Using the Context API & Provider State ===

Context API is a single place or we can have our app to get access to any component in one place. It works better than previous solution for deleting data from another component. 
With context API we will have access to contact from any component, for example.

1 step. Create a file context.js in common folder, not components folder
2 step. Create класс Provider that we wrap our entire app. All othere components wil be wrapped by this component. 
  - create Context = React.createContext();
3 step. Переносим туда наш Стейт Контакты из контактов. 
  - в контактах все удаляем, теперь он нам не нужен будет
  - тк в Провайдере будет глобальный Стейт с контактами
4 step. Делаем в классе рендер

render() {
  return (
    <Context.Provider value={this.state}>   // в value показываем то, что хотим сделать публичным в любом месте приложения. Можно сделать this.state.contacts, но он предпочитает делать общий стейт
      {this.props.children}   // здесь отрисовывем детей пропса
    </Context.Provider>
  )
}

5. Экспортируем оттуда Консьюмера, которого мы будем использовать из любого компонента, если захотим получить доступ к этому стейту
export const Consumer = Context.Consumer;

- некоторые делают экспорт просто export const Consumer, но тогда при вызове надо будет обращаться Context.Consumer, а мы будем писать просто Consumer

- как я понял, Консьюмер нужен для того, чтобы давать доступ только к Рендеру (отрисовки контактов). А Провайдер - это весь класс вместе с данными (базой данных). То есть самому Аппу.жс мы дадим доступ к базе данных, а контактам доступ к отрисовке. 

6. Импортируем Провайдер в Апп.жс
- делаем импорт
- оборачиваем весь рендер в Провайдера

render() {
  return (    // обернули ниже в <Provider> 
    <Provider>    
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

7. Импортируем Консьюмера в Контактах
- делаем импорт
- меняем рендер (то, что было вставляем в новый ретурн) {
  return (
    <Consumer>
      {value => {   // value - это доступ к нашему стейту (по моему, это что-то типа пропса)
        const { contacts } = value;   // делаем деструктуризацию, чтобы обратиться к самим контактам внутри стейта
        return (    // остальное не меняем
          <React.Fragment>  
            {contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
              />
            ))}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}


// === 4.6 Adding a Context Reducer for Actions ===

Делаем правильное удаление, потому что в Context API оно не работает, тк было прописано без него. 
- удаляем в контактах ф дилитКонтакт. 
- удаляем пропс с удалением в контактах - вот это: (deleteClickHandler={this.deleteContact.bind(this, contact.id)})
в Контакте
- удаляем вызов пропса из контактов в ф onDeleteClick
- удаляем проверку ПропТайпс на дилитКликХендлер
Идем в Контекст файл
- и делаем редюсер

const reducer = (state, action) => {    // на вход принимаем стейт (наш массив) и действие, которое приходит
  switch(action.type) {   // делаем проверку свитч, если действие УдалитьКонтакт
    case 'DELETE_CONTACT':    
      return {        // то мы делаем сприд у стейта (чтобы перебрать любой массив даже без длины - как мне кажется для этого здесь сприд) 
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)    // и в контактах делаем фильтр по каждому контакту, если айди контакта равно айди, которое пришло вместе с действием, но удаляем из объекта. При этом айди записано как пейлоад, потому что делаем так, чтобы передавалась информция не только с айди, но и любая другая. Для других кейсов. Редюсер позволит тогда ее обрабатывать 
      }
    default:
      return state;   // иначе возвращаем просто стейт
  }
}

- теперь чтобы вызвать это действие, нам надо создать в стейте диспатч (сразу после массива)

dispatch: action => this.setState(state => reducer(state, action))    // диспатч равен действию с функциейв, в котором вызывается редюсер с теми же аргументами, что и в параметре (стейт, действие). Как я понял, он делается для того, чтобы сделать публичным запуск этого редюсера из нашего глобального стейта. То есть мы будем обращатсья к диспатчу, а он будет вызывать наш редюсер с определенным действием. 
// То есть суть в том, что в рендере мы передаем наш пропс Value, который равен стейту. то есть мы вызываем наш стейт и в самом стейте мы запускаем редюсер с помощью диспатча. В такой схеме мы всегда будем иметь доступ к редюсеру. Для этого и сделали диспатч внутри стейта. 

- теперь идем в Контакт
- делаем тут импорт import { Consumer } from '../context';
- снова оборачиваем весь возврат в Консьюмера
- в обработчике клика удаления мы передаем айди и диспатч
  - также мы делаем деструктуризацию из валью, чтобы показать откуда берется диспатч
  - а деструктуризации самих контактов, мы добавляем айди, чтобы показать, откуда берется айди
- делаем саму ф онДилитКлик 
  - в ней у нас будут 2 параметра: айди и диспатч
  - в самой ф мы вызываем метод диспатч, где передаем объект с типом Удалить Контакт и пейлоадом равным айди. Эти данные в редьюсере обработаются и запуститься сценарий удаления с нашим айди. То есть мы вызываем метод диспатч, который запускает редьюсер, который получает наши данные и запускает сценарий удаления.
  - при этом отсюда мы уже имеем доступ к диспатчу, тк раньше сделали деструктуризацию и диспатч - составляющая валью из Консьюмера

- как выглядит теперь наш компонент

onDeleteClick = (id, dispatch) => {   // наши параметры айди и диспатч
  dispatch({type: 'DELETE_CONTACT', payload: id});     // есть доступ к диспатчу, тк это составляющая валью (те стейта), которая находится в Консьюмере. И в нем мы передаем объект с типом Удалить контакт и пейлоадом равным айди
};

render() {
  const { id, name, email, phone } = this.props.contact;    // добавляем айди (для обработчика удаления)
  const { showContactInfo } = this.state;

  return (
    <Consumer>    // оборачиваем все в Консьюмер
      {value => {   // добавляем только, что действие происходит в валью, то есть нашем стейте (то есть мы отрисовку карточек здесь обернули)
        const { dispatch } = value;   // делаем деструктуризацию, чтобы показать диспатч (нужно для обработчика удаления)
        return (
          <div className="card card-body mb-3">
            <h4>
              {name}{' '}
              <i
                onClick={this.onShowClick}
                className="fas fa-sort-down"
                style={{ cursor: 'pointer' }}
              />
              <i
                className="fas fa-times"
                style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}   // добавляем в байнде пердачу айди и диспатча
              />
            </h4>
            {showContactInfo ? (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </div>
        );
      }}
    </Consumer>
  );
}


// =========================== Раздел 5. Working with Forms ====================

// === 5.1 Creating a form with State ===

Вначале делаем структуру в наших файлах, чтобы было понятней:
- создаем папку layot в компонентах для компонентов ЮИ (сайдбары, хедеры и тд)
- переносим в нее Хедер
- делаем также папку contacts для контактов и перемещаем два файла Контакты и Контакт 
- меняем везде ссылки импорта, а то поломалось

1) Теперь создаем в контакта новый файл AddContact.js - компонент для добавления контактов. Это будет класс бейсд компонент
- Создаем компонент
  - rcc
  - добавляем в нем заголовок h1 - Add Contact

2) Делаем импорт в Апп.жс
- добавлем этот компонент в рендеринг перед Контактами

3) Идем делать АддКонтакт
- обычно каждый инпут - это стейт в форме
  - создаем стейт c именем, почтой и телефоном
  - идем отрисовывать это в рендер вместо нашего заголовка Адд Контакт 
    - делаем карту из бутстрапа с формой
    - в нем 3 инпута
    - и кнопка
    - записываем value в наш стейт (используем деструктуризацию для удобства, чтобы в JSX просто указывать value={name})

Код компонента
class AddContact extends Component {
  state = {     // стейт, где будет храниться значения инпутов
    name: '',
    email: '',
    phone: ''
  };

  render() {
    const { name, email, phone } = this.state;  // деструкт чтобы забирать валью вот так value={name} в JSX
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">            // делаем первый инпут 
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}                // забираем валью из инпута и записываем в стейт. Ниже у других инпутов аналогично
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}


// === 5.2 Controlled Component & onChange ===

Сейчас если мы начнем забивать что-то в инпутах, то ничего не произодет. Поэтому делаем работающую форму. 
Для этого создадим Controlled component - он позволит печатать в форме. Сейчас нельзя. 

1. Делаем onChange в каждом инпуте
  - при этом делаем 1 ончейндж для всех. То есть так onChange={this.onChange}
    - Бред сказал, что раньше поначалу он делал для каждого инпута уникальный ончейндж типа onChange={this.onNameChange} и потом шел создавать 3 функции. Гораздо лучше сделать все в одном общем {this.onChange}
2. Создаем ф onChange: 
    - onChange = e => this.setState({ [e.target.name]: e.target.value }); // то есть мы забираем из того аттрибуту name у каждого инпута то, что в нем напечатали. И нам не надо создавать 3 разные ф. у каждого инпута свой name = name, email, phone. 
3. Делаем в форме запууск ф онСабмит при подтверждении формы
// {/* <form onSubmit={this.onSubmit}> */}
4. Создаем онСабмит
  - пока просто предотвращаем дефолт
  - сейчас мы уже заберем данные при отправке формы, но пока они нигде не сохраняются, видно только в консоли
  
  onSubmit = e => {
    e.preventDefuult();
  }


// === 5.3 Uncontrolled Component & Refs ===

временно переименуем AddContact.js и создадим его копию с названием AddContact.js, чтобы показать как работает Uncontrolled Component. Этот метод забора данных часто используется в Редаксе, где есть неконтроллируемые компоненты.  
- в новый файл копируем все из старого AddContact
- удаляем там стейт, ончейндж ф и сам ончейндж

Редактируем новый компонент
- создаем здесь статичный Пропс с захардкоренными данными 
  - имя, мыло, телефон
  - это объект
  - здесь мы имитируем пропс - типа данные приходят/уходят к нам откуда-то 
- меняем в деструктуризации стейт на пропс

меняем value in input to defaultValue, because now it/''s default value in inputs. 
- после этог можно будет вводить что-то в инпутах

Захватываем данные из инпута
- теперь нам надо забрать введенные данные из инпута. Раньше мы сохраняли их в стейте. Но стейта сейчас нет. Здесь мы используем дополнительный аттрибут ref.  Прописываем его в каждом инпута типа ref={this.nameInput} и идем создавать конструктор

Делаем конструктор
- на входе мы забираем пропсы
- также в методе наследования от родителя (супер) принимаем пропсы
- прописываем значения к каждому инпуту this.nameInput равное в реакте методу создатьРеф. 

Идем в ф онСабмит и делаем в ней забор данных
- создаем объект контакт, где наши имя, мыло и тел будут свойствами
- присваиваем им значения текущего валью каждого инпута типа this.nameInput.current.value

Пример кода 
constructor(props) {      // наш конструктор, который показывает, что значат неймИнпут и тд
  super(props);
  this.nameInput = React.createRef();
  this.emailInput = React.createRef();
  this.phoneInput = React.createRef();
}

onSubmit = e => {
  e.preventDefuult();
  const contact = {   // забираем данные и сохраняем в объекте
    name: this.nameInput.current.value,
    email: this.emailInput.current.value,
    phone: this.phoneInput.current.value
  };
  console.log(contact);
};

static defaultProps = {   // пропс по дефолту
  name: 'Fred Jo',
  email: 'frod@uy.com',
  phone: '888-888-8888'
};

<div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}    // пример атрибута в инпуте в рендере
              />
            </div>

Меняем обратно названияя файлов и возвращаем старый метод. В этом проекте мы используем контроллируемый компонент. 
Файл с неконтроллируемым компонентом теперь называется AddContact_ref.


// === 5.4 Form submit action to context ===

1) Делаем добавление контакта в объект в нашем Контексте
- для этого идем в редусер и создаем сценарий добавления контакта по аналогии с удалением
- только здесь мы не запускаем фильтр, а сразу записываем новый контакт в массив

case 'ADD_CONTACT':   // сообщение, которое будет в диспатче для запуска сценария
return {
  ...state,   // также делаем сприд
  contacts: [action.payload, ...state.contacts]   // записываем в контакты: action.payload - то передадим в диспатче и там будут наши данные. ...state.contacts - продлеваем наш массив 
};

2) импортируем консьюмера в АддКонтакт, чтобы запустить диспатч, как я понял
- идем в рендер и оборачиваем там все в консьюмера
- при этом вставляем expression с value, в котором наш стейте
- потом делаем деструктуризацию, чтобы взять диспатч
- и возвращаем все остальное, что уже там было

3) Теперь там где происходит запись, вызываем диспатч
- в онСабмит добавляем байнд(зис, диспатч)

4) Идем ф онСабмит
- делаем деструктр из Стейта, чтобы получить наши контакты по отдельности
- создаем НьюКонтакт объект, куда записываем эти данные
- нам не хватает только айди. Его мы создадим с помощью плагины в npm.
  - открываем терминал и печатаем npm i uuid
  - теперь делаем импорт  uuid в АддКонтакт
- и добавляем айди в НьюКонтакт равный uuid(). Эта функция будет сама генерировать айди
- после создания нового контакта мы вызываем диспатч с нашими данными (сообщение и новый контакт)

5) Теперь данные будут записываться. Осталось сделать очистку инпута после внесения данных. 
- в конце в онСабмит просто устанавливаем значения стейта на ''  у всех инпутов

Вот наш код в Адд Контакт: 

onSubmit = (dispatch, e) => {   // параметры у ф
  e.preventDefault();

  const { name, email, phone } = this.state;    // разбиваем на переменные то, что находится в стейте

  const newContact = {    // записываем эти переменные в Новый контакт
    id: uuid(),   // здесь генерируем айди
    name,     // это запись в стиле ЕС6, то есть аналогично name: name и тд
    email,
    phone
  };

  dispatch({ type: 'ADD_CONTACT', payload: newContact });   // вызываем диспатч с кейсом, который создали в Контекст (передаем сообщение и пейлоад, который новый контакт)

  // Clear State    // очищаем инпуты после ввода
  this.setState({
    name: '',
    email: '',
    phone: ''
  })
};

onChange = e => this.setState({ [e.target.name]: e.target.value });

render() {
  const { name, email, phone } = this.state;

  return (
    <Consumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>    // вызываем диспатч при отправке формы
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Add Contact"
                  className="btn btn-light btn-block"
                />
              </form>
            </div>
          </div>
        );
      }}
    </Consumer>
  );


  // === 5.5 TextInputGroup Component For DRY Code ===
  
Сейчас у нас есть код, где много повторяется одного и того же (при создании контакта этот код в инпутах). Когда встречается такая ситуация, лучше создать под него отдельный компонент и передавать уникальные данные в пропсах. Этим мы займемся в этом уроке. 
Мы будем переделывать этот повторящийся код (пример для одного инпута):
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onChange}
                    />
                  </div>

1. Создаем в папке Слоев новый файл ТекстИнпутГрупп.жс
2. Делаем компонент там
- rfc
- import proptypes
- называем переменную по названию файла и делаем экспорт дефолт внизу
- там, где пропс делаем сразу деструктуризацию в самых первых скобках функции
      - то есть можно было просто в параметер написать пропс и потом везде в тексте вставлять пропс.нейм и тд. А можно сделать, как мы сделали сразу с деструктр
- вставляем сюда первый форм групп из АддКонтакт
- делаем все данные динамичными с теми переменными, что мы получим в пропсе (сдедали деструктуризацию)
- делаем проверку propTypes
- делаем defaultProps у типа, тк по дефолту там текст всегда

3. Делаем импорт TextInputGroup в Аддконтакт. Без скобок, тк там экспорт по дефолту
- теперь вместо тех частей кода с формой мы вставляем компонент и передаем в нем пропсы.
      - вот как это выглядит
    <TextInputGroup
      label="name"
      name="name"
      placeholder="Enter Name"
      value={name}
      onChange={this.onChange}
    />
    <TextInputGroup
      label="Email"
      name="email"
      type="email"      // здесь добавили тайп, тк он отличается от дефолта
      placeholder="Enter Email"
      value={email}
      onChange={this.onChange}
    />
    <TextInputGroup
      label="Phone"
      name="phone"
      placeholder="Enter Phone"
      value={phone}
      onChange={this.onChange}
    />

Вот текст компонента ТекстИнпут

import React from 'react';
import PropTypes from 'prop-types';

const TextInputGroup = ({   // здесь разбиваем пропс сразу на переменные (деструктр)
  label,
  name,
  value,
  placeholder,
  type,
  onChange
}) => {
  return (
    <div className="form-group">    // отрывок из нашего инпута из АддКонтакт, но динамичный
      <label htmlFor={name}>{label}</label>   // в скобках переменные, которые передали в пропсе
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextInputGroup.propTypes = {      // здесь делаем проверку, все строки кроме ончейндж
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {     // здесь по дефолту задали значение
  type: 'text'
};

export default TextInputGroup;

// === 5.6 Error Checking & Display ===

Делаем красивые алерты и валидацию, а не то, что есть по умолчанию. 
1. Добавляем в стейте АддКонтакта пустой объект еррорс. 
2. В ф онСабмит добавляем проверку 3 раза
- если имя пусто, то записываем в объект еррорс "имя необходимо" и тд
- только там обязательно должен быть возврат в каждой проверке, чтобы остановить онСабмит и показать ошибку. Вот так: 
if (name === '') {
  this.setState({ errors: { name: 'Name is required ' } });
  return;
}
3. Добавляем в дестр в рендере еррорс
4. Добавляем в компонентах с инпутами пропс еррор, который равен объекту еррорс.имя или почта или тел
- если ошибки нет, то ничего не передастся. Если есть, то передастся в пропсе в ТекстИнпутГрупп. 
                  <TextInputGroup
                    label="name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}     // добавили ошибку
                  />

5. Идем в ТекстИнпутГрупп
- добавляем еррор в пропсах, там где деструктуризацию сделали
- теперь нам надо сделать в JSX проверку на то, есть ошибка или нет. И если ошибка есть, то надо добавить класс ошибки бутрстраппа (invalid)
    - это реакт сделать не может, поэтому используется специальный модуль classnames. Для его установки открываем терминал и вводим npm i classnames
    - после уствновки делаем импорт из classnames
    - теперь наш класс будет равен методу classnames:
    className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}   // где первый параметр - это классы по умолчанию, а второй параметр объект, который делает проверку - если есть еррор, то добавим класс 

- также внизу нашего дива с формированием карточки, добавляем див с классом invalid-feedback, где пишем, что "это неправильно". Это сообщение будет показываться у неправильного дива. 
        - только потом мы улучшаем это и делаем также проверку, если есть еррор, то показываем этот див, где на месте захардкоренного сообщения будет еррор:
        {error && <div className="invalid-feedback">{error}</div>}

- делаем проверку тайппропсов на еррор
        - но необязательную, те  error: PropTypes.string

Наш ТекстИнпутГрупп:
const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error     // добавили
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {   // проверка на класс и добавление, если есть ошибка
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}    // если есть ошибка, то показ текста из еррор
    </div>
  );
};


// =========================== Раздел 6. React Router v 4 ====================

// === 6.1 React Router Setup ===

Реакт Роутер нужен, чтобы делать сайты с несколькими страницами, а не только индекс.хтмл, как я понял. 

1) Установка в терминале: npm i react-router-dom
2) делаем импорт в Апп.жс
  - import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter главный компонент, остальные указываем его аллиасы. Свитч позволяет устанавливать типа дефолт страниц или 404 ошибки. 
3) в рендере все что внутри Провайдера оборачиваем в Роутер

4) теперь мы сделаем так, что хедер будет один на всех страницах
- устанавливаем дефолтную страницу
  - для этого удаляем вызов компонентов АддКонтакт и Контактс. 
  - делаем Свитч и внутри него Роут, у которого устанавливаем параметр экзакт с путем / - это наша домашнаяя страница. И компонентом у нее будут Контакты. Это один маршрут. Вот, что получается:
  <Provider>
        <Router>    // добавили
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} /> // путь дефолтной страницы, покажем Контакты
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>

5) Создаем в компонентах папку Пейджс - там будут статичный страницы
6) И первым файлом делаем страницу Абоут.жс
- Создаем в ней компонент
  - rfc
  - наполняем компонент заголовком и текстом описания этой страницы      
  <h1 className="display-4">About Contact Manager</h1>
  <p className="lead">Simple app to manage contacts</p>
  <p className="text-secondary">Version 1.0.0</p>
- делаем импорт в Апп.жс
- и в рендере создаем второй маршрут для этой страницы
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
              </Switch>

7) Делаем маршрут для АддКонтакт страницы (вынесем на отдельную страницу)

              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
              </Switch>
Теперь у нас есть 3 страницы: site.com, site.com/contact/add, site.com/about
8) Добавляем на домашней странице, те в Контактах заголовок Контакт Лист. 
- прямо перед циклом
  - слово Контакт выделили в красный цвет, поэтому обернули в спан с классом дейнджер

  <h1 className="display-4 mb-2">
                <span className="text-dander">Contact</span> List</h1>


// === 6.2 Links, Params & Redirect ===

Подключаем ссылки
1. Идем в Хедер, чтобы сделать там ссылки
- делаем импорт ссылок из Роутера
  - import { Link } from 'react-router-dom';
2. Меняем в хедере ссылки <a> на Link
  - href меняем на to
  - добавляем иконки к этим ссылкам

2* можно также сделать ссылку уникальной с разным номером айди
- для этого в Апп.жс надо прописать в конце пути айди <Route exact path="/about/:id" component={About} />
   - теперь будут открываться ссылки about/1 или 55 и тд. Любые. 
   -при этом можно сделать заголовок динамичным и показывать номер id в заголовке. Для этого в Эбоут.жс надо прописать у заголовка динамичный контент:
    <h1 className="display-4">{props.match.params.id}</h1>  == там ссылочная функция (и передать пропс с функции). Если бы был класс, то {this.props.match.params.id}. 
    Соответственно тогда в заголовке будет всегда показываться айди из урла. Он может быть любым. 

    - айди - это переменная. Это можно назвать name или как угодно. И выводить также текстовые контент в урле. 

3. Делаем редирект на домашнюю страницу после добавления контакта
- в АддКонтакт
  - в самом конце ф онСабмит после очистки полей добавляем метод редиретка хистори.пуш:
  this.props.history.push('/');   // (в скобках урл для редиректа). Это редирект в Реакте. То есть мы не обновляем страницу, а автоматически показываем в реакте новую страницу без перезагрузки страницы. 



// === 6.3 404 Not Found Page ===

Делаем страницы Not Found
а) делаем в папке пейдс файл НотФаунд.жс
б) создаем в нем функциональный компонент
в) делаем в нем заголовок 404 страницы и текст, что страницы не существует
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist</p>
    </div>
  );
}
г) подключаем страницу в Апп.жс 
  - делаем импорт
  - прописываем Роут без пути и все! теперь любые ссылки не из наших путей, будет показывать 404 Not Found. Как прописывается роут:
  <Route component={NotFound} />


// =========================== Раздел 7. Lifecycle, HTTP & Deployment ====================

// === 7.1 Lifecycle Methods === //

render - основный метод в реакте. Но есть также и разные лайфсайкл методы, которые вы возможно будем использовать. В этом уроке про это. 

1. Делаем в компонентах папку Тест и такой же файл, где разберем, как работают лайфсайкл методы
- классовый компонент c заголовком любым
2. Делаем импорт в Апп.жс и делаем путь для него /тест
3. Смотрим на разные методы 
-  создаем компонент DidMount - второй по популярности компонент. Он помогает в работе с хттп реквестами. Это что-то типа первоначального реквеста. 
- при этом в этих компонентах не надо указывать стрелковые функции, тк они зашиты по дефолту в Реакт. 
- делаем также componentWillMount (он будет работать раньше дидМоунт)

список компонентов
componentDidMount() {
    console.log('componentDidMount...');
  }

  componentWillMount() {
    console.log('componentWillMount...');
  }

  componentDidUpdate() {    // показываем, что был апдейте
    console.log('componentDidUpdate...');
  }

  componentWillUpdate() {   // показывает, что будет (раньше дид появится)
    console.log('componentWillUpdate...');
  }

  componentWillReceiveProps(nextProps, nextState) {   // использется в Редаксе. Может перебрать стейты, как пропсы в цикле    // тк это deprecated function, то в Реакт 17 придется прописывать UNSAFE_componentWillReceiveProps(nextProps, nextState)
    console.log('componentWillReceiveProps...');
  }

// === 7.2 GET Requests === //

Пример того, как можно взять данные по АПИ и отрисовать в Реакте их. 

1. Берем тестовые данные из jsonplaceholder

кода от jsonplaceholder
fetch('https://jsonplaceholder.typicode.com/todos/1')  // забирает данные по ссылке
  .then(response => response.json())         // получаем промис и запускаем map, чтобы преобразовать данные в json
  .then(json => console.log(json))    // и выводим их в консоль

2. В фетче делаем формулу, чтобы выводить данные на странице, а не просто в консоль выдавать
3. В рендере делаем деструктуризацию и указываем переменные с заголовком и телом прописать

все, теперь данные на странице. 

class Test extends Component {
  state = {       // делаем стейт с нашими данными
    title: '',
    body: ''
  };

  componentDidMount() {   // при этом все в компоненете componentDidMount, чтобы это работало без вызовов, как я понимаю
    fetch('https://jsonplaceholder.typicode.com/posts/2') // забираем данные
      .then(response => response.json())
      .then(data =>
        this.setState({     // не просто выводим в консоль, а меняем значения нашего стейта, вставляю туда дату, которую мы получили
          title: data.title,
          body: data.body
        })
      );
  }

  render() {
    const { title, body } = this.state; // отрисовываем на странице ниже

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;


Теперь идем делать тоже с нашим приложением. 
1. Идем в контекст
- удаляем захардкоренные данные из стейта, оставляем пустой массив
2. Ставим модуль axios вместо фетча: npm i axios
- делаем импорт axios
3. Ловим данные с сервера
- использем аксос вместо фетча
- в промисе запускаем ф, которая записывает данные в наши контакты
- все делаем в компоненте дид маунт

componentDidMount() {     //
  axios   
    .get('https://jsonplaceholder.typicode.com/users')    // ловим данные
    .then(res => this.setState({ contacts: res.data }));    // res - он же response, просто сокращено. То есть в этом промисе мы берем респонс и запускаем ф, где записываем рес.дата (это наши данные из ответа) в контактс.
}

// === 7.3 POST & DELETE Requests === //

Делаем удаление из АПИ
а) делаем импорт в Контакте
б) меняем ф онДилитКлик
- делаем тут аксиос удаления (тоже, что и фетч) с айди
- и сам диспатч мы записываем в промис. Если из Апи удаляется объект, то мы запускаем диспатч удаления. 

Посмотреть request можно в консоли в разделе Нетворк. При релоаде и удалении возникнет запрос новый. Метод - делит. 

onDeleteClick = (id, dispatch) => {   
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)    // прописываем аксиос, указыва айди
    .then(dispatch({ type: 'DELETE_CONTACT', payload: id }))        // после запускаем диспатч
};

Делаем добавление пользователя в АПИ
а) Идем в АддКонтакт
б) Делаем импорт аксиос
в) удаляем ююайди (тк теперь айди мы будет получать из АПИ) - из импорта и из объекта нового контакта. Большинство АПИ сами создают айди
г) в ф создания контакта перед очисткой инпута делаем аксиос
- с методом публикации в АПИ
  - после ссылки мы должны указать, ЧТО туда отправляем, т.е. наш контакт
- после этого делаем промис, где запускаем диспатч (наш старый)
  - но только в результате в стейте мы будем отправлять теперь не новй контакт, а данные из ответа по АПИ

axios
      .post('https://jsonplaceholder.typicode.com/users/', newContact)    // отправляем новый контакт
      .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));   // промис запускает диспатч с данными из ответа



// === 7.4 Using Async/Await === //

Делаем рефакторинг кода наших аксиосов, чтобы он был более современным с помощью асинхронного программирования. 

а) Вначале улучшаем компонент при заборе данных из АПИ
- идем в контекст
- делаем компонент асинхронным
- записываем ответ в переменную с ожиданием ответа. Пока не получим ответ - не запишем
- теперь просто меняем контакты с данными из нашего ответа

Результат:
async componentDidMount() {   // делаем асинхрон
    const res = await axios     // записываем ответ в переменную. При этом ждем ответ от АПИ и только, когда дожидаемся (получаем) ответ, то записываем его переменную. Такое ожидание делает await.
      .get('https://jsonplaceholder.typicode.com/users');   // удалили промис

    this.setState({contacts: res.data});    // теперь просто меняем контакты с данными из нашего ответа
  }

б)  улучшаем удаление в Контакт
- в стрелковой ф асинхрон прописываем перед параметрами
- здесь в переменную не сохраняем, тк мы делаем удаление объекта и не используем данные для записи
- но не забываем сделать ожидание
- запускаем диспатч после удаление по АПИ 

 onDeleteClick = async (id, dispatch) => {    // асинх вот где стоит
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);   // не забываем ожидание

    dispatch({ type: 'DELETE_CONTACT', payload: id });    // после пуск диспатча
  };

  в) улучшаем добавление контакта в АддКонтакт
  - делаем ф асинх
  - записываем ответ от АПИ с ожиданием в переменную рес
  - выносим диспатч из промиса и остаток промиса удаляем

  const res = await axios     // записали в переменную ответ от АПИ
  .post('https://jsonplaceholder.typicode.com/users/', newContact);

  dispatch({ type: 'ADD_CONTACT', payload: res.data });   // запустили диспатч после ответа


  г) сделали трай и кетч для удаления новых объектов. ТК их нет в АПИ на самом деле и нам выдается ошибка, что мы не можем это удалить. В проектах с реальным сервером и базой данных - это делат ьне надо. Но чтобы заработало удаление здес6 мы ловим эту ошибку и все равно выполняем удалениее. 

  onDeleteClick = async (id, dispatch) => {
    try {   // пробуем выполнить
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {   // и все равно запускаем при ошибке
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };



// === 7.5 EditContact Component & Fetch Contact === //

Делаем редактирование
а) создаем компонент ЕдитКонтакт.жс
б) наполняем его
- копируем в него компонент АддКонтакт
- меняем только заголовок вместо адд на едит, текст кнопки на Апдейт и само название компонента
- удаляем в ф все после проверки и до очистки инпутов (асинх, диспатч и тд)
в) идем в Апп.жс
- делаем импорт
- прописываем маршрут под добавит ькомпонент
  - ссылка должна быть едит/айди (уникальное у всех)
<Route exact path="/contact/edit/:id" component={EditContact} />
г) Идем в Контакт и добавляем там иконку
- делаем импорт Линк, тк будет вести на нашу страницу
- делаем под удалением линк и внутри иконка с бутрстрап классами
  - прописываем стили: цвет, флоат справа, курсор поинтер, марджин справа. 
Теперь должно работать. 
е) идем делать захват данных контактов в инпутах редактирвоания
- идем в едит компонент
- над ф онСабмит делаем наш асинхронный компонент дид маунт
  - делаем дестр айди 
    - чтобы взять айди из параметра надо использовать матч параметры
  - вызываем АПИ с нашим айди, дожидаемся ответа и записываем ответ в переменную
  - присваиваем переменную контакт данным  из ответа
  - делаем перезапись в стейте, где имя, мыло и тел равны данным из контакта

  async componentDidMount() {   // асинх
    const { id } = this.props.match.params;   // так забираем айди - матч парамс
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);    // записываем ответ с ожиданием в переменную (дождавшись ответа то есть)

    const contact = res.data;   // сразу запишем данные в переменную контакт, чтобы потом короче было

    this.setState({   // перезаписываем стейт
      name: contact.name,     // данные будут равны данным из ответа по АПИ
      email: contact.email,
      phone: contact.phone
    })
  }




// === 7.6 PUT Request & Update Action === //

Сохраняем обновление данных при апдейте
a) в ЕдитКонтент в ф онСабмит перед очисткой инпутов мы вносим логику записывания обновленных данных на серверс через АПИ
- делаем объект апдКонтакт с новым именем, мылом и фоном
- делаем деструктуризацию чтобы получить айди 
  - через матч парамс
- записываем в переменную отправку в АПИ нашего запроса с обновленным контактом
- запускаем диспатч для сценария АПДЕЙТ_КОНТАКТ и отправляем данные из нашего ответа

const updContact = {    // обновленный объект
  name,
  email,
  phone
}

const { id } = this.props.match.params;     // выбрали айди 

const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);    // записали в переменную, дождавшись ответа от АПИ    // реквест делаем с айди этого контакта

dispatch({type: 'UPDATE_CONTACT', payload: res.data});    // запустили диспатч

б) идем править диспатч
- делаем новый сценарий для обновления
- возвращаем как обычно наследованынй стейт
- и записываем в контакты массив, который мы перебрали в мапе
  - при этом в мапе делаем проверку
    - если айди контакта равен айди который пришел в пейлоад, 
      - то тогда записываем в этот контакт наш новый обновленный контакт из пейлоада
    - если нет, то просто оставляем контакт


case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>   // перебираем в мапе
          contact.id === action.payload.id      // если айди равны
            ? (contact = action.payload)    // то записываем в контакт наш обновленный контакт, его мы получаем при ответе сервера по айдишнику в реквесте
            : contact     // иначе ничего не делаем
        )
      };


// === 7.7 Deploy to Github Pages === //

Делаем деплой реактовского приложения на гит
- заводим файл .gitignore
- меняем в Апп.жс 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
на 
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

на гит не работает браузероутер

не буду подробно все расписывать, лучше посмотреть урок 7.7. Там деплой через терминал. 



// ==================================== АЛГОРИТМ СОЗДАНИЯ ПРИЛОЖЕНИЯ  =======================//
1. Сделали предподготовку. Почистили стили, убрали жс (видео 2.11)
2. Делаем первый Компонент Контакт
- файл
- rcc
- импорт в основном
3. Делаем второй компонент Хедер
- файл
- функцию (не класс)
- импорт
3.5 Делаем проверку PropTypes в Контакте
4. Подключаем Бутстрап и прописываем стили
- навигации в Хедере
- внешний вид карточек в Контакт и Апп
5. Делаем Стейт контактов
- создаем новый компонент Контакты
- в нем делаем стейт 
- в котором создаем массив объектов контактов 
- делаем публичный цикл map, который перебирает и отрисовывает объекты
- не забываем в Апп поменять отрисовку контактов
6. Делаем обработчик при клике на иконку открыть Контакты
- в Контакте делаем иконку
- у нее прописываем обработчик при клике и вызов ф онШоуКлик
7. Делаем ф онШоуКлик
- прописываем в Контакте стейт (объект), который показываем инфу (тру или фолс)
- в ф онШоуКлик делаем переключение этого стейта
  - доступ к this происходит через this.setState()
8. Делаем удаление
- делаем иконку Х в Контакте
  - можно прописать стили типа курсор поинтер, цвет и расположить ее справа
- Теперь делаем обработчик для иконки и вызываем ф онДилитКлик
- в онДилитКлик мы обращаемся к пропсу deleteClickHandler
- Теперь идем в Контакты и прописываем пропс у Контакта с вызовом ф deleteContact
  - при этом нам надо взять id  элемента, на котором был клик, чтобы понимать, что удалять
    - используем метод bind
- Идем делать здесь ф deleteContact
  - в параметре айди, котрый забрали с места клика
  - делаем деструктуризацию для доступа к контактам из стейта
  - используем фильтр, чтобы удалить элемент. Возвращаем массив с элементами айти которых не равен тому айди, по которому кликнули удалить
  - тк это кастомный метод и мы не можем обратиться напрямую к this.state, то мы используем метод setState(), в котором перезаписываем наши новые контакты
9. Делаем Context API, глобальный стейт, который позволит управлять приложением проще. Например, удалять станет легче, не как в прошлом шаге.  (урок 4.5)
- шаг 1 для этого создаем context.js (это теперь глобальный стейт, который обернет все компоненты)
- шаг 2 Create класс Provider that we wrap our entire app. All othere components wil be wrapped by this component. 
  - create Context = React.createContext();
- 3 step. Переносим туда наш Стейт Контакты из контактов. 
  - в контактах все удаляем, теперь он нам не нужен будет
  - тк в Провайдере будет глобальный Стейт с контактами
- 4 step. Делаем в классе Провайдера рендер
  - в value показываем то, что хотим сделать публичным в любом месте приложения. 
  - внутри отрисовываем детей пропса
- шаг 5. Экспортируем оттуда Консьюмера, которого мы будем использовать из любого компонента, если захотим получить доступ к этому стейту
- шаг 6. Импортируем Провайдер в Апп.жс
  - делаем импорт
  - оборачиваем весь рендер в Провайдера
- шаг 7. Импортируем Консьюмера в Контактах
  - делаем импорт
  - меняем рендер (то, что было вставляем в новый ретурн)
    - делаем только деструктуризацию, чтобы показать значение контактов
  
10. Улучшаем наш Context API и делаем удаление (урок 4.6)
- Импортируем Консьюмера в Контакте
- меняем рендер
  - оборачиваем все в Консьюмер
  - добавляем только, что действие происходит в валью, то есть нашем стейте (по моему, это что-то типа пропса) - то есть делаем деструктуризацию
    - в обработчике клика удаления мы передаем айди и диспатч
      - также мы делаем деструктуризацию из валью, чтобы показать откуда берется диспатч
      - а деструктуризации самих контактов, мы добавляем айди, чтобы показать, откуда берется айди
  - делаем саму ф онДилитКлик 
    - в ней у нас будут 2 параметра: айди и диспатч
    - в самой ф мы вызываем метод диспатч, где передаем объект с типом Удалить Контакт и пейлоадом равным айди. Эти данные в редьюсере обработаются и запуститься сценарий удаления с нашим айди
    - при этом отсюда мы уже имеем доступ к диспатчу, тк раньше сделали деструктуризацию
    
= сейчас механика будет при удалении: клик на иконку => обработчик в Контакте запускает ф онДилитКлик, передавая айди и диспатч => в ф онДилитКлик запускается диспатч из валью с данными: тип Удалить Контакт, пейлоад - айди => диспатч в Контексте запускает сценарий удаления

11. Создание компонента добавления контакта (урок 5.1)

Вначале делаем структуру в наших файлах, чтобы было понятней:
- создаем папку layot в компонентах для компонентов ЮИ (сайдбары, хедеры и тд)
- переносим в нее Хедер
- делаем также папку contacts для контактов и перемещаем два файла Контакты и Контакт 
- меняем везде ссылки импорта, а то поломалось

а) Создаем компонент AddContact
  - rcc
  - добавляем в нем заголовок h1 - Add Contact

б) Делаем импорт в Апп.жс
- добавлем этот компонент в рендеринг перед Контактами

в) Идем делать АддКонтакт
  - создаем стейт c именем, почтой и телефоном
  - идем отрисовывать это в рендер вместо нашего заголовка Адд Контакт 
    - делаем карту из бутстрапа с формой
    - в нем 3 инпута
    - и кнопка
    - записываем value в наш стейт (используем деструктуризацию для удобства, чтобы в JSX просто указывать value={name})

12. Делаем onChange, чтобы в форме можно было печатать и забирать данные (урок 5.2)
а). Делаем onChange в каждом инпуте
  - при этом делаем 1 ончейндж для всех. 
б) Создаем ф onChange: 
    - то есть мы забираем из того аттрибуту name у каждого инпута то, что в нем напечатали. И нам не надо создавать 3 разные ф. 
в). Делаем в форме запууск ф онСабмит при подтверждении формы
г) Создаем онСабмит
  - пока просто предотвращаем дефолт
  - сейчас мы уже заберем данные при отправке формы, но пока они нигде не сохраняются, видно только в консоли

13) Делаем добавление контакта в объект в нашем Контексте (урок 5.4)
- для этого идем в редусер и создаем сценарий добавления контакта по аналогии с удалением
- только здесь мы не запускаем фильтр, а сразу записываем новый контакт в массив

б) импортируем консьюмера в АддКонтакт, чтобы запустить диспатч, как я понял
- идем в рендер и оборачиваем там все в консьюмера
- при этом вставляем expression с value, в котором наш стейте
- потом делаем деструктуризацию, чтобы взять диспатч
- и возвращаем все остальное, что уже там было

в) Теперь там где происходит запись, вызываем диспатч
- в онСабмит добавляем байнд

г) Идем ф онСабмит
- делаем деструктр из Стейта, чтобы получить наши контакты по отдельности
- создаем НьюКонтакт объект, куда записываем эти данные
- нам не хватает только айди. Его мы создадим с помощью плагины в npm.
  - открываем терминал и печатаем npm i uuid
  - теперь делаем импорт  uuid в АддКонтакт
- и добавляем айди в НьюКонтакт равный uuid(). Эта функция будет сама генерировать айди
- после создания нового контакта мы вызываем диспатч с нашими данными (сообщение и новый контакт)

е) Теперь данные будут записываться. Осталось сделать очистку инпута после внесения данных. 
- в конце в онСабмит просто устанавливаем значения стейта на нулевые

14. Переносим повторящийся код при создании контакта в отдельный компонент для чистоты кода (урок 5.5)
а) Создаем в папке Слоев новый файл ТекстИнпутГрупп.жс 
б) Делаем компонент там
- rfc
- import proptypes
- называем переменную по названию файла и делаем экспорт дефолт внизу
- там, где пропс делаем сразу деструктуризацию в самых первых скобках функции
- вставляем сюда первый форм групп из АддКонтакт
- делаем все данные динамичными с теми переменными, что мы получим в пропсе (сдедали деструктуризацию для этого)
- делаем проверку propTypes
- делаем defaultProps у типа, тк по дефолту там текст всегда

в) Делаем импорт TextInputGroup в Аддконтакт. Без скобок, тк там экспорт по дефолту
- теперь вместо тех частей кода с формой мы вставляем компонент и передаем в нем пропсы.

15. Делаем красивые алерты и валидацию, а не то, что есть по умолчанию. (урок 5.6)
1. Добавляем в стейте АддКонтакта пустой объект еррорс. 
2. В ф онСабмит добавляем проверку 3 раза
- если имя пусто, то записываем в объект еррорс "имя необходимо" и тд
- только там обязательно должен быть возврат в каждой проверке, чтобы остановить онСабмит и показать ошибку. 
3. Добавляем в дестр в рендере еррорс
4. Добавляем в компонентах с инпутами пропс еррор, который равен объекту еррорс.имя или почта или тел
- если ошибки нет, то ничего не передастся. Если есть, то передастся в пропсе в ТекстИнпутГрупп. 

5. Идем в ТекстИнпутГрупп
- добавляем еррор в пропсах, там где деструктуризацию сделали
- теперь нам надо сделать в JSX проверку на то, есть ошибка или нет. И если ошибка есть, то надо добавить класс ошибки бутрстраппа (invalid)
    - это реакт сделать не может, поэтому используется специальный модуль classnames. Для его установки открываем терминал и вводим npm i classnames
    - после уствновки делаем импорт из classnames
    - теперь наш класс будет равен методу classnames

- также внизу нашего дива с формированием карточки, добавляем див с классом invalid-feedback, где пишем, что "это неправильно". Это сообщение будет показываться у неправильного дива. 
        - только потом мы улучшаем это и делаем также проверку, если есть еррор, то показываем этот див, где на месте захардкоренного сообщения будет еррор.

- делаем проверку тайппропсов на еррор

16. Устанавливаем Роутер и делаем несколько страниц на сайте (урок 6.1)

а) Установка в терминале: npm i react-router-dom
б) делаем импорт в Апп.жс
  - import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
в) в рендере все что внутри Провайдера оборачиваем в Роутер

г) теперь мы сделаем так, что хедер будет один на всех страницах
- устанавливаем дефолтную страницу
  - для этого удаляем вызов компонентов АддКонтакт и Контактс. 
  - делаем Свитч и внутри него Роут, у которого устанавливаем параметр экзакт с путем / - это наша домашнаяя страница. И компонентом у нее будут Контакты. Это один маршрут.

д) Создаем в компонентах папку Пейджс - там будут статичный страницы
е) И первым файлом делаем страницу Абоут.жс
- Создаем в ней компонент
  - rfc
  - наполняем компонент заголовком и текстом описания этой страницы      
- делаем импорт в Апп.жс
- и в рендере создаем второй маршрут для этой страницы
          
ж) Делаем маршрут для АддКонтакт страницы (вынесем на отдельную страницу)

Теперь у нас есть 3 страницы: site.com, site.com/contact/add, site.com/about
и) Добавляем на домашней странице, те в Контактах заголовок Контакт Лист. 
- прямо перед циклом
  - слово Контакт выделили в красный цвет, поэтому обернули в спан с классом дейнджер


17. Подключаем ссылки (урок 6.2)
а) Идем в Хедер, чтобы сделать там ссылки
- делаем импорт ссылок из Роутера

б). Меняем в хедере ссылки <a> на Link
  - href меняем на to
  - добавляем иконки к этим ссылкам

в) Делаем редирект на домашнюю страницу после добавления контакта
- в АддКонтакт
  - в самом конце ф онСабмит после очистки полей добавляем метод редиретка хистори.пуш


18. Делаем страницы Not Found (урок 6.3)
а) делаем в папке пейдс файл НотФаунд.жс
б) создаем в нем функциональный компонент
в) делаем в нем заголовок 404 страницы и текст, что страницы не существует

г) подключаем страницу в Апп.жс 
  - делаем импорт
  - прописываем Роут без пути и все! теперь любые ссылки не из наших путей, будет показывать 404 Not Found. 


19. Ловим данные из фейкового АПИ (урок 7.2)
а. Идем в контекст
- удаляем захардкоренные данные из стейта, оставляем пустой массив
б. Ставим модуль axios вместо фетча: npm i axios
- делаем импорт axios
в. Ловим данные с сервера
- использем аксос вместо фетча
- в промисе запускаем ф, которая записывает данные в наши контакты
- все делаем в компоненте дид маунт


20. Делаем удаление из АПИ (урок 7.3)
а) делаем импорт в Контакте
б) меняем ф онДилитКлик
- делаем тут аксиос удаления (тоже, что и фетч) с айди
- и сам диспатч мы записываем в промис. Если из Апи удаляется объект, то мы запускаем диспатч удаления. 

Посмотреть request можно в консоли в разделе Нетворк. При релоаде и удалении возникнет запрос новый. Метод - делит. 

Делаем добавление пользователя в АПИ
а) Идем в АддКонтакт
б) Делаем импорт аксиос
в) удаляем ююайди (тк теперь айди мы будет получать из АПИ) - из импорта и из объекта нового контакта. Большинство АПИ сами создают айди
г) в ф создания контакта перед очисткой инпута делаем аксиос
- с методом публикации в АПИ
  - после ссылки мы должны указать, ЧТО туда отправляем, т.е. наш контакт
- после этого делаем промис, где запускаем диспатч (наш старый)
  - но только в результате в стейте мы будем отправлять теперь не новй контакт, а данные из ответа по АПИ


21. Делаем рефакторинг кода наших аксиосов, чтобы он был более современным с помощью асинхронного программирования. (урок 7.4)

а) Вначале улучшаем компонент при заборе данных из АПИ
- идем в контекст
- делаем компонент асинхронным
- записываем ответ в переменную с ожиданием ответа. Пока не получим ответ - не запишем
- теперь просто меняем контакты с данными из нашего ответа

б)  улучшаем удаление в Контакт 
- в стрелковой ф асинхрон прописываем перед параметрами
- здесь в переменную не сохраняем, тк мы делаем удаление объекта и не используем данные для записи
- но не забываем сделать ожидание
- запускаем диспатч после удаление по АПИ 

в) улучшаем добавление контакта в АддКонтакт
  - делаем ф асинх
  - записываем ответ от АПИ с ожиданием в переменную рес
  - выносим диспатч из промиса и остаток промиса удаляем


22. Делаем редактирование (урок 7.5)
а) создаем компонент ЕдитКонтакт.жс
б) наполняем его
- копируем в него компонент АддКонтакт
- меняем только заголовок вместо адд на едит, текст кнопки на Апдейт и само название компонента
- удаляем в ф все после проверки и до очистки инпутов (асинх, диспатч и тд)
в) идем в Апп.жс
- делаем импорт
- прописываем маршрут под добавит ькомпонент
  - ссылка должна быть едит/айди (уникальное у всех)

г) Идем в Контакт и добавляем там иконку
- делаем импорт Линк, тк будет вести на нашу страницу
- делаем под удалением линк и внутри иконка с бутрстрап классами
  - прописываем стили: цвет, флоат справа, курсор поинтер, марджин справа. 
Теперь должно работать. 

е) идем делать захват данных контактов в инпутах редактирвоания
- идем в едит компонент
- над ф онСабмит делаем наш асинхронный компонент дид маунт
  - делаем дестр айди 
    - чтобы взять айди из параметра надо использовать матч параметры
  - вызываем АПИ с нашим айди, дожидаемся ответа и записываем ответ в переменную
  - присваиваем переменную контакт данным  из ответа
  - делаем перезапись в стейте, где имя, мыло и тел равны данным из контакта


23. Cохраняем обновление данных при апдейте
a) в ЕдитКонтент в ф онСабмит перед очисткой инпутов мы вносим логику записывания обновленных данных на серверс через АПИ
- делаем объект апдКонтакт с новым именем, мылом и фоном
- делаем деструктуризацию чтобы получить айди 
  - через матч парамс
- записываем в переменную отправку в АПИ нашего запроса с обновленным контактом
- запускаем диспатч для сценария АПДЕЙТ_КОНТАКТ и отправляем данные из нашего ответа

б) идем править диспатч
- делаем новый сценарий для обновления
- возвращаем как обычно наследованынй стейт
- и записываем в контакты массив, который мы перебрали в мапе
  - при этом в мапе делаем проверку
    - если айди контакта равен айди который пришел в пейлоад, 
      - то тогда записываем в этот контакт наш новый обновленный контакт из пейлоада
    - если нет, то просто оставляем контакт


24. 


Теперь есть апп, который сохраняет, удаляет и заносит все данные на сервер и отображает в ЮИ. 