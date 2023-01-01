scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    scene.setBackgroundColor(11)
    tiles.setCurrentTilemap(tilemap`level8`)
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -150
        music.jumpUp.play()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    game.splash("GAME BY TMB LTD ")
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    mySprite3 = sprites.create(assets.image`myImage4`, SpriteKind.Player)
    controller.moveSprite(mySprite3, 100, 0)
    mySprite3.ay += 350
    tiles.setCurrentTilemap(tilemap`level0`)
    info.setScore(0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    info.changeScoreBy(1)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    mySprite2 = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    controller.moveSprite(mySprite2, 100, 0)
    mySprite2.ay += 350
    tiles.setCurrentTilemap(tilemap`level0`)
    info.setScore(0)
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
game.splash("Trenton (C)2023 TMB LTD")
info.setScore(0)
scene.setBackgroundColor(6)
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay += 350
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
