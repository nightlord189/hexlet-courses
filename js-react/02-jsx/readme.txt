В этой практике не будет визуальной составляющей. Задача заключается в том, что необходимо правильно написать функцию возвращающую jsx.

src/Card.jsx
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход объект со свойствами title и text, и возвращает jsx с подставленными значениями. Пример:

import getCard from '/Card.jsx';
 
getCard({ title: 'hi', text: 'how are you?' });
// <div className="card">
//   <div className="card-body">
//     <h4 className="card-title">hi</h4>
//     <p className="card-text">how are you?</p>
//   </div>
// </div>