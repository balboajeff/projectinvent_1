radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    if (receivedNumber == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
radio.setGroup(1)
let RoomLight = input.lightLevel()
basic.forever(function () {
    if (RoomLight <= 128 && input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
})
