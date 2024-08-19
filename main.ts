enum RadioMessage {
    message1 = 49434
}
function detenerAlerta () {
    let bandera = 0
    alerta = 0
    music.stopAllSounds()
    radio.sendValue("alerta", alerta)
    basic.showNumber(bandera)
}
input.onButtonPressed(Button.AB, function () {
    detenerAlerta()
})
radio.onReceivedValue(function (name, value) {
    radio.sendValue(name, value)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
let alerta = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
