radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(1)
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() <= 128 && input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
})
