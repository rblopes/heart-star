const type = (t) => ({ type }) => type === t;

const find = (t, o) => o.find(type(t));
const filter = (t, o) => o.filter(type(t));

const shift = (ox, oy) => (x, y) => ({ x: x + ox, y: y + oy });

const parseMeta =
  ({ properties: { heart, star, next = null, tutorial = null } }) => ({
    layers: { heart, star }, next, tutorial
  });

const parseObject = (f = shift(0, 0)) => ({ x, y, properties }) => ({
  position: f(x, y), properties
});

const parseActor = parseObject(shift(8, 24));


function makeLevel (objects) {
  return {
    meta: parseMeta(find('meta', objects)),
    heart: parseActor(find('heart', objects)),
    star: parseActor(find('star', objects)),
    goal: parseObject()(find('goal', objects)),
    traps: filter('trap', objects).map(parseObject(shift(0, -8))),
    platforms: filter('platform', objects).map(parseObject()),
    buttons: filter('button', objects).map(parseObject(shift(8, 8))),
    gates: filter('gate', objects).map(parseObject(shift(8, 0)))
  };
}


function parseLevels (objects) {
  return Object.keys(objects)
    .map((name) => [ name, objects[name] ])
    .reduce((definitions, [ name, objects ]) => {
      definitions[name] = makeLevel(objects);
      return definitions;
    }, Object.create(null));
}


export default function parseLevelsFromTilemap (g, tilemap) {
  const { objects, properties } = Phaser.TilemapParser.parse(g, tilemap);

  return {
    definitions: parseLevels(objects),
    startingLevel: properties['starting-level'],

    getLevel (name) {
      return this.definitions[name] || null;
    }
  };
}
