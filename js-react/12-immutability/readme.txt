src/Component.jsx
Реализуйте компонент, который представляет из себя две кнопки и лог событий:

Лог это список значений, каждое из которых получается после нажатия на одну из двух кнопок
Левая кнопка + добавляет в лог строчку с новым значением равным старое + 1
Правая кнопка - добавляет в лог строчку с новым значением равным старое - 1
При клике на запись в логе, она удаляется.

Начальный HTML:

<div>
  <div class="btn-group" role="group">
    <button type="button" class="btn hexlet-inc">+</button>
    <button type="button" class="btn hexlet-dec">-</button>
  </div>
</div>
После нажатия последовательности +, +, -, +:

<div>
  <div class="btn-group" role="group">
    <button type="button" class="btn hexlet-inc">+</button>
    <button type="button" class="btn hexlet-dec">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>
Каждое нажатие кнопки добавляет в лог новую строчку сверху.