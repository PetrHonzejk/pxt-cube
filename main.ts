basic.forever(function heartbeat() {
    
})
input.onButtonPressed(Button.A, function button_a() {
    
    enabled = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function logo() {
    
    if (sides == 6) {
        sides = 10
        basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . # . # .
        # . . . #
        `)
    } else {
        sides = 6
        basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        `)
    }
    
})
input.onGesture(Gesture.Shake, function shake() {
    let number: number;
    
    
    if (enabled) {
        number = randint(1, sides)
        if (number == 1) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        }
        
        if (number == 2) {
            basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        }
        
        if (number == 3) {
            basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        }
        
        if (number == 4) {
            basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        }
        
        if (number == 5) {
            basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        }
        
        if (number == 6) {
            basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        }
        
        if (number == 7) {
            basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            `)
        }
        
        if (number == 8) {
            basic.showLeds(`
            # . . . #
            . . # . .
            # . . . #
            . . # . .
            # . . . #
            `)
        }
        
        if (number == 9) {
            basic.showLeds(`
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            `)
        }
        
        if (number == 10) {
            basic.showLeds(`
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            `)
        }
        
        for (let a = 0; a < number; a++) {
            music.playTone(Note.C, music.beat(0.4))
            basic.pause(100)
        }
        enabled = false
        basic.pause(1000)
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let enabled = false
let sides = 6
