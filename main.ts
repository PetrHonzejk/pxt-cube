basic.forever(function on_forever() {
    if (enabled) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
let enabled = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    enabled = true
})
