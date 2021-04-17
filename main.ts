let voltage = 0
let temperature = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
basic.forever(function () {
    voltage = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    3300
    )
    temperature = Math.idiv(voltage - 500, 10)
    basic.showNumber(temperature)
})
