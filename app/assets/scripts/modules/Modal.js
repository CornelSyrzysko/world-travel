import $ from 'jquery'

class Modal{
  constructor(){
    this.openModalB = $("open-modal")
    this.modal = $(".modal");
    this.closeModalB = $(".modal__close");
    this.events();
  }

  events(){
    // clicking the  open modal button
    this.openModalB.click(this.openModal.bind(this));
    //cliking the close modal button
    this.closeModalB.click(this.closeModal.bind(this));
    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(esc){
    if(esc.keyCode == 27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;
