src/Carousel.jsx
Реализуйте компонент, эмулирующий работу слайдера. Компонент принимает на вход свойство images, в котором находится список путей до картинок. Компонент отображает их и позволяет с помощью стрелок "вперёд" и "назад" осуществлять переход по ним. Сам переход зациклен. Картинки (пути до них) могут повторятся.

Ниже описано поведение:

Если выбрана последняя картинка, то next ведёт на первую. То же самое происходит и prev, но в обратную сторону.
Первая картинка становится активной. Порядок картинок и их отображение должны сохраняться.
Начальная вёрстка с данными, которые прогружаются в файле src/index.jsx:

<div id="carousel" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img alt="" class="d-block w-100" src="/images/first.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/second.jpeg">
    </div>
    <div class="carousel-item">
      <img alt="" class="d-block w-100" src="/images/third.jpeg">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
Хотя вёрстка и не тривиальная, единственное, что меняется в ней — класс active.

Подсказки
Carousel (https://getbootstrap.com/docs/4.0/components/carousel/)
