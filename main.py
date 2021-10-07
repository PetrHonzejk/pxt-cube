def on_forever():
    if enabled:
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)

enabled = False

def on_button_pressed_a():
    global enabled
    enabled = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def shake():
    