Реализуйте простой Todo, с возможностью добавлять и удалять заметки.

src/TodoBox.jsx
Основной компонент, который выводит форму для добавления новой записи и выводит список заметок на экран.

Начальный HTML:

<div>
  <div class="mb-3">
    <form class="todo-form form-inline mx-3">
      <div class="form-group">
        <input type="text" value="" required="" class="form-control mr-3" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
</div>
src/Item.jsx
Отрисовывает конкретный элемент списка. Принимает на вход свойства:

task
onRemove
HTML с добавленными заметками:

<div>
  <div class="mb-3">
    <form class="todo-form form-inline mx-3">
      <div class="form-group">
        <input type="text" value="" required="" class="form-control mr-3" placeholder="I am going...">
      </div>
      <button type="submit" class="btn btn-primary">add</button>
    </form>
  </div>
  <div>
    <div class="row">
      <div>
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col-10">second</div>
    </div>
    <hr>
  </div>
  <div>
    <div class="row">
      <div>
        <button type="button" class="btn btn-primary btn-sm">-</button>
      </div>
      <div class="col-10">first</div>
    </div>
    <hr>
  </div>
</div>
Добавление элементов происходит в обратном порядке. Новые всегда сверху.

Подсказки
Для получения нового id используйте функцию uniqueId.