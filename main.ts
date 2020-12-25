input.onButtonPressed(Button.A, function () {
    if (0 == state) {
        if (selected > 0) {
            selected = selected - 1
        }
    } else {
        if (color > 0) {
            color = color - 1
        }
    }
})
// 1->0, 0->1
input.onButtonPressed(Button.AB, function () {
    state = 1 - state
})
input.onButtonPressed(Button.B, function () {
    if (0 == state) {
        if (selected < 3) {
            selected = selected + 1
        }
    } else {
        if (color < 2) {
            color = color + 1
        }
    }
})
let blue = 0
let green = 0
let red = 0
let color = 0
let state = 0
let selected = 0
selected = 0
state = 0
let color_options = ["R", "G", "B"]
color = 0
edubitRgbBit.setBrightness(32)
// state=0: ledválasztás
// state=1: színválasztás
// 
basic.forever(function () {
    if (0 == state) {
        basic.showNumber(selected)
    } else {
        basic.showString("" + (color_options[color]))
    }
    if (state == 1) {
        edubitRgbBit.setPixelColor(selected, edubitRgbBit.rgb(red, green, blue))
        if (color == 0) {
            red = edubitPotentioBit.readPotValue() / 4
        } else if (color == 1) {
            green = edubitPotentioBit.readPotValue() / 4
        } else {
            blue = edubitPotentioBit.readPotValue() / 4
        }
    }
})
