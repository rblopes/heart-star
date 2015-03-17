import labels     from './atlases/labels';
import buttons    from './atlases/buttons';
import objects    from './atlases/objects';
import characters from './atlases/characters';


export default {

  // - Game Boot Assets -------------------------------------------------------

  'boot': [

    {
      'type': 'image',
      'key': 'splash-screen',
      'url': 'images/splash-screen.png'
    }

  ],

  // - Graphics section -------------------------------------------------------
  //
  // TODO: Most of the graphical assets defined individually below must be
  //       repackaged as a graphics atlas to simplify loading process, GPU
  //       memory consumption etc.

  'graphics': [

    {
      'type': 'image',
      'key': 'background-credits-ai',
      'url': 'images/background-credits-ai.png',
    },

    {
      'type': 'image',
      'key': 'background-credits-rb',
      'url': 'images/background-credits-rb.png',
    },

    {
      'type': 'image',
      'key': 'background-level-select',
      'url': 'images/background-level-select.png',
    },

    {
      'type': 'image',
      'key': 'background-title',
      'url': 'images/background-title.png',
    },

    {
      'type': 'image',
      'key': 'bg-pattern-heart',
      'url': 'images/bg-pattern-heart.png',
    },

    {
      'type': 'image',
      'key': 'bg-pattern-heart-star',
      'url': 'images/bg-pattern-heart-star.png',
    },

    {
      'type': 'image',
      'key': 'bg-pattern-moon',
      'url': 'images/bg-pattern-moon.png',
    },

    {
      'type': 'image',
      'key': 'bg-pattern-star',
      'url': 'images/bg-pattern-star.png',
    },

    {
      'type': 'atlasJSONHash',
      'key': 'buttons',
      'textureURL': 'images/buttons.png',
      'atlasData': buttons
    },

    {
      'type': 'atlasJSONHash',
      'key': 'objects',
      'textureURL': 'images/objects.png',
      'atlasData': objects
    },

    {
      'type': 'atlasJSONHash',
      'key': 'characters',
      'textureURL': 'images/characters.png',
      'atlasData': characters
    },

    {
      'type': 'atlasJSONHash',
      'key': 'labels',
      'textureURL': 'images/labels.png',
      'atlasData': labels
    },

    {
      'type': 'image',
      'key': 'tileset',
      'url': 'images/tileset.png',
    },

    {
      'type': 'tilemap',
      'key': 'tilemaps',
      'url': 'tilemaps/tilemaps.json',
      'format': 'TILED_JSON'
    }

  ],

  // - Sound effects section --------------------------------------------------

  'sfx': [

    // TODO: No sound effects yet!

    // {
    //   'type': 'audio',
    //   'key': 'none',
    //   'urls': [ 'audio/none.m4a', 'audio/none.ogg' ],
    //   'autoDecode': true
    // }

  ]

};
