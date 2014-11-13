class BackButton extends Phaser.Button {

  constructor(game) {
    super(game, 0, 0, 'button-menu-back', this._doTransition, this, 1, 0);

    this.input.useHandCursor = true;
    this.clicked = false;
  }

  // --------------------------------------------------------------------------

  _doTransition () {
    if (this.clicked) return;
    this.clicked = true;

    this.game.transitions.registerTransition('fade-to-black');
    this.game.transitions.registerTransitionCallback(this._goToTitle, this);
    this.game.transitions.doTransition();
  }

  _goToTitle () {
    this.game.state.start('Title');
  }

}


export default BackButton;
