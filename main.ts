enum RadioMessage {
    message1 = 49434
}
radio.onReceivedValue(function (name, value) {
    radio.sendValue(name, value)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
