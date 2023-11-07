/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Nov 2023
 * This program if "A" button is pressed, the pixels move down in a diagonal
 * if "B" button is pressed, the pixels move down in a diagonal
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// When "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter + 1
    basic.pause(500)
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the pixels move up in a diagnal
input.onButtonPressed(Button.B, function () {
  // setup
  basic.clearScreen()
  loopCounter = 5
  sprite = game.createSprite(5, 5)

  while (loopCounter >= 0) {
    sprite.set(LedSpriteProperty.X, loopCounter)
    sprite.set(LedSpriteProperty.Y, loopCounter)
    loopCounter = loopCounter - 1
    basic.pause(500)
  }
  sprite.delete()
  basic.showIcon(IconNames.Happy)
})
