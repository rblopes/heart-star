Heart Star
===============================================================================

A port of the game originally created by [Jussi Simpanen][advi] for [Ludum Dare
30][ld-g], Theme: "Connected Worlds".


Story
-------------------------------------------------------------------------------

>   Two friends want to reach the same place together but they have a little
>   problem: They live in completely different worlds! Help the friends reach
>   the common goal while swapping between the red and blue world. While the
>   friends might not be able to see each others worlds, they can still
>   interact by serving as a platform or carrying each other.


Project Motivation and Objective
-------------------------------------------------------------------------------

'Heart Star' is a Flash game, designed and created using the game authoring
software Stencyl.

For educational purposes, I took the opportunity and wrote this HTML/JavaScript
port, using [Phaser][phsr].

This port is a remake of the Ludum Dare version, aiming to be accurate as the
original game as possible. None of the subsequent updates of the original game
are planned to be ported, though.

WIP: [Play a preview of the game.][demo] See below for planned updates.


Game Controls
-------------------------------------------------------------------------------

Use arrow keys no move and jump the platforms. To switch worlds, hit
'SPACEBAR'. Use 'BACKSPACE' to restart the level. Use 'ESC' to quit and return
to the stage selection screen.


Development Instructions
-------------------------------------------------------------------------------

Download and extract the [packaged project][dwld] contents, or clone this
repository locally. Either way, the following npm scripts are available to you,
performing the tasks described below.

```sh
npm install   # Installs all required project dependencies.
npm start     # Launches the development server.
npm run dist  # Prepare the game release for distribution.
npm run clean # Wipes the project from temporary and distribution build files.
```

Then, a tab on your favorite browser should open, pointed to
`http://localhost:3000/`. Happy coding!


### Features ##################################################################

*   Game ported with [Phaser][phsr] framework.

*   Game levels and some background images composed using [Tiled Map
    Editor][tild].

*   [localForage][lfor], responsible for in game data storage management—mainly
    the unlockable levels!

*   All program code is written using the ECMAScript 6 dialect of JavaScript.
    [6to5][6to5] is used to make it compatible with today's browsers.

*   [BrowserSync][bsnc] as development server.

*   [Node.js][node] development environment; [Gulp][gulp] task manager.


Planned Updates
-------------------------------------------------------------------------------

### Fixes #####################################################################

*   Proper reuse of resources (i.e. less `this.state.start` calls in game 
    levels).
*   Make friends carry each other while falling (bug).
*   Rewrite the Transitions plugin (it's ugly!).
*   Huge code clean up.

### Improvements ##############################################################

*   Sound effects.
*   Mobile controls (still being considered).
*   Make a Texture Atlas of all the graphical assets used in the game.


Licensing
-------------------------------------------------------------------------------

Source code distributed under the terms of the [MIT License][mitl].

Original game project by Jussi Simpanen, shared under a [Creative Commons 3.0
Atribution—Non-Commercial—Share-Alike Unported][cc-l] license. All remixed
artwork used in this version of the game is redistributed under the [same
license][cc-l].


<!-- ---------------------------------------------------------------------- -->

[6to5]: https://6to5.org/
[phsr]: http://phaser.io/
[gulp]: http://gulpjs.com/
[node]: http://nodejs.org/
[gscm]: http://git-scm.com/
[bsnc]: http://browsersync.io/
[tild]: http://www.mapeditor.org/
[advi]: http://simpanen.carbonmade.com/
[demo]: http://rblopes.github.io/heart-star/
[lfor]: http://mozilla.github.io/localForage/
[cc-l]: http://creativecommons.org/licenses/by-nc-sa/3.0/
[dwld]: https://github.com/rblopes/heart-star/archive/dev.zip
[mitl]: https://github.com/rblopes/heart-star/blob/master/LICENSE
[ld-g]: http://ludumdare.com/compo/ludum-dare-30/?action=preview&uid=11391
