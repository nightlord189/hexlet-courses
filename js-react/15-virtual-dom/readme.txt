src/Modal.jsx
Реализуйте компонент <Modal> (Модальное окно)

Использование:

export default class Component extends React.Component {
  state = { modal: false };
 
  toggle = (e) => {
    e.preventDefault();
 
    this.setState({
      modal: !this.state.modal,
    });
  }
 
  render() {
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-default" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
HTML закрытого состояния:

<div>
  <button type="button" class="modal-open-button btn btn-danger">Open</button>
  <div class="modal" style="display: none;" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Modal title</div>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p class="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        <p class="modal-footer">
          <button type="button" class="modal-close-button btn btn-default">Cancel</button>
        </p>
      </div>
    </div>
  </div>
</div>
В открытом состоянии строчка: <div class="modal" style="display: none;"> заменяется на <div class="modal fade show" style="display: block;">

У открытого модального окна две кнопки закрывающие его: крестик справа вверху и кнопка Cancel справа внизу.

Подсказка
Modal (https://getbootstrap.com/docs/4.0/components/modal/)