src/Collapse.jsx
Реализуйте компонент <Collapse>, который по клику на ссылке отображает свое содержимое и при повторном - прячет. Содержимое передается в компонент через свойство text. За начальное состояние открытости, отвечает свойство opened, которое по умолчанию равно true.

const text = 'collapse me';
<Collapse text={text} opened={false} />;
<div>
  <p>
    <a class="btn btn-primary" href="#">Link with href</a>
  </p>
  <div class="collapse">
    <div class="card card-body">
      collapse me
    </div>
  </div>
</div>
Единственное что меняется в HTML после клика, к классу collapse элемента <div> добавляется класс show.

Подсказки
Collapse (https://getbootstrap.com/docs/4.3/components/collapse/)