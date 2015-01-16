class Button extends Phaser.Sprite {

  constructor (game, availableTo, orientation = Button.SOUTH) {
    super(game, 0, 0, this._getColor(availableTo));

    this.wasTriggered = new Phaser.Signal();

    this.anchor.set(0.5);

    this.orientation = orientation;
  }

  // --------------------------------------------------------------------------

  reset (x, y) {
    super.reset(x, y);

    this.switchOff();

    return this;
  }

  switchOn () {
    this.frame     = 1;
    this.triggered = true;

    this.wasTriggered.dispatch();
  }

  switchOff () {
    this.frame     = 0;
    this.triggered = false;
  }

  // --------------------------------------------------------------------------

  _setupPhysicsBody (width, height, offsetX = 0, offsetY = 0) {
    if (this.body === null) {
      this.game.physics.arcade.enableBody(this);
    }

    this.body.immovable = true;
    this.body.setSize(width, height, offsetX, offsetY);
  }

  _getColor (type) {
    switch (type) {
      case 'heart': return 'button-game-heart';
      case 'star' : return 'button-game-star';
      default     : return 'button-game-moon';
    }
  }

  _setOrientation (orientation) {
    if (this._orientation === orientation) return;

    switch (orientation) {
      case Button.NORTH:
        this._setupPhysicsBody(16, 8, 0,  4);
        this.angle = 0;
        break;

      case Button.SOUTH:
        this._setupPhysicsBody(16, 8, 0, -4);
        this.angle = 180;
        break;
    }

    this._orientation = orientation;
  }

  // --------------------------------------------------------------------------

  get orientation () {
    return this._orientation;
  }

  set orientation (newValue) {
    this._setOrientation(newValue);
  }

}


Button.NORTH = 'north';
Button.SOUTH = 'south';

export default Button;