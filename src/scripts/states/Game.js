class Game extends Phaser.State {

  init (stageName) {
    this.controls = this.game.controls;

    this.stageName = stageName;

    this._objectsManager = this._makeManager(ObjectsManager);

    this._playerActor = null;
    this._idleActor   = null;
  }

  create () {
    this._objectsManager.actorTrapped.add(this._restartActors, this);

    var { heartLayer, starLayer } = stages.getRelatedLayerNames(this.stageName);

    this._mapObjects = this._getTilemapObjects('tilemaps', this.stageName);

    this._agents = this.add.existing(new Agents(this.game));
    this._agents.actorFellOff.add(this._fellOff, this);

    this._heartGroup = this._objectsManager.createLayerFor('heart', true);
    this._starGroup  = this._objectsManager.createLayerFor('star', true);
    this._moonGroup  = this._objectsManager.createLayerFor('both');

    this._tilemap1 = this._makeTilemap(heartLayer);
    this._layer1 = this._heartGroup.add(this._makeTilemapLayer(this._tilemap1, heartLayer));

    this._tilemap2 = this._makeTilemap(starLayer);
    this._layer2 = this._starGroup.add(this._makeTilemapLayer(this._tilemap2, starLayer));

    this._objectsManager.createObjects(this._mapObjects);

    this._goal = this.add.existing(
      new Goal(
        this.game,
        this.goalCoordinates.x,
        this.goalCoordinates.y));
    this._goal.actorsLanded.addOnce(this._goToNextStage, this);

    this._heart = this.add.existing(this._makeActor(Actor.HEART));
    this._star  = this.add.existing(this._makeActor(Actor.STAR));

    this._restartActors();
    this._changeActors(this._heart, this._star);

    this.controls.spacebar.onUp.add(this._togglePlayerActor, this);
    this.controls.backspace.onUp.add(this._restartActors, this);
  }

  update () {
    this._playerActor.collideActor(this._idleActor);
    this._goal.collideActors(this._playerActor, this._idleActor);

    this.physics.arcade.collide(this._heart, this._layer1);
    this.physics.arcade.collide(this._star,  this._layer2);

    this._heartGroup.collide(this._heart);
    this._starGroup.collide(this._star);
    this._moonGroup.collide([ this._heart, this._star ]);

    this._agents.collide(this._playerActor);
    this._agents.collide(this._idleActor);

    if (this.controls.left.isDown) {
      this._playerActor.walkLeft();
    }
    else if (this.controls.right.isDown) {
      this._playerActor.walkRight();
    }
    else {
      this._playerActor.stop();
      this._idleActor.stop();
    }

    if (this.controls.up.isDown) {
      this._playerActor.jump();
    }
    else {
      this._playerActor.cancelPowerJump();
    }
  }

  // --------------------------------------------------------------------------

  _makeManager (factory, ... args) {
    return new factory(this.game, ... args);
  }

  _getTilemapObjects (key, stageName) {
    var parsedTilemap = Phaser.TilemapParser.parse(this.game, key);
    var stageObjects  = parsedTilemap.objects[stageName];

    return objectsParser(stageObjects);
  }

  _makeTilemap (collisionLayerName) {
    var tilemap = this.add.tilemap('tilemaps');

    tilemap.setCollisionBetween(1, 144, true, collisionLayerName);
    tilemap.addTilesetImage('tileset');

    return tilemap;
  }

  _makeTilemapLayer (tilemap, layerName) {
    return tilemap.createLayer(layerName);
  }

  _makeActor (roleName) {
    return new Actor(this.game, 0, 0, roleName);
  }

  _changeActors (playerActor, idleActor) {
    this._playerActor      = playerActor;
    this._playerActor.idle = false;

    this._idleActor      = idleActor;
    this._idleActor.idle = true;

    this._toggleLayers();
  }

  _toggleLayers () {
    this._heartGroup.toggle(!this._heart.idle);
    this._starGroup.toggle(!this._star.idle);
  }

  _togglePlayerActor () {
    if (!this._playerActor.standing) return;

    this._changeActors(this._idleActor, this._playerActor);

    this._playerActor.stop();
    this._idleActor.stop();
  }

  _restartActors () {
    this._heart.reset(this.heartCoordinates.x, this.heartCoordinates.y);
    this._star.reset(this.starCoordinates.x, this.starCoordinates.y);
  }

  _fellOff () {
    this._restartActors();
  }

  _goToNextStage () {
    var nextStage = stages.getNextStage(this.stageName);

    if (nextStage === null)
      this._restartActors();
    else
      this.state.start('Game', true, false, nextStage);
  }

  // --------------------------------------------------------------------------

  get heartCoordinates () {
    return this._mapObjects.actors.heart;
  }

  get starCoordinates () {
    return this._mapObjects.actors.star;
  }

  get goalCoordinates () {
    return this._mapObjects.actors.goal;
  }

}


import stages        from 'common/stages';
import objectsParser from 'common/objectsParser';

import ObjectsManager from 'managers/ObjectsManager';

import Goal   from 'objects/Goal';
import Actor  from 'objects/Actor';
import Agents from 'objects/Agents';

export default Game;
