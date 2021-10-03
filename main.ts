radio.onReceivedString(function (receivedString) {
    if ("vooruit" == receivedString) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, snelheid)
    } else if ("achteruit" == receivedString) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, snelheid)
    } else if ("stop" == receivedString) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if ("links" == receivedString) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, snelheid)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, snelheid)
    } else if ("recht" == receivedString) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, snelheid)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, snelheid)
    } else if ("sneller" == receivedString) {
        snelheid += 50
    } else if ("trager" == receivedString) {
        snelheid += -50
    } else if ("licht aan" == receivedString) {
        strip.rotate(10)
        strip.show()
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    } else {
        basic.showString(receivedString)
    }
})
let afstand = 0
let strip: neopixel.Strip = null
let snelheid = 0
radio.setGroup(1)
snelheid = 50
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showRainbow(1, 270)
basic.forever(function () {
    afstand = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (afstand < 8) {
        music.playMelody("C5 A B G A F G E ", 240)
    }
    basic.pause(100)
})
