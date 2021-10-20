basic.forever(function heartbeat() {
    
})
let enabled = false
let sides = 6
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    enabled = true
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.LogoUp, function on_logo_up() {
    
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
input.onGesture(Gesture.Shake, function on_gesture_shake() {
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
            . . . . .
            . # . # .
            . . . . .
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
            music.playTone(Note.C, music.beat(0.5))
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
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
