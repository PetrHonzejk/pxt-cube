def heartbeat():
    pass
basic.forever(heartbeat)

enabled = False
sides = 6

def on_button_pressed_a():
    global enabled
    enabled = True
    basic.show_icon(IconNames.YES)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_up():
    global sides
    if sides == 6:
        sides = 10
        basic.show_leds("""
                            # . . . #
                            . # . # .
                            # . . . #
                            . # . # .
                            # . . . #
                            """)
    else:
        sides = 6
        basic.show_leds("""
                            # . . . #
                            . . . . .
                            # . . . #
                            . . . . .
                            # . . . #
                            """)
input.on_gesture(Gesture.LOGO_UP, on_logo_up)

def on_gesture_shake():
    global enabled
    global sides
    if enabled:
        number = randint(1, sides)
        if number == 1:
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
        if number == 2:
            basic.show_leds("""
            . . . . .
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            """)
        if number == 3:
            basic.show_leds("""
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            """)
        if number == 4:
            basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
        if number == 5:
            basic.show_leds("""
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            """)
        if number == 6:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            """)
        if number == 7:
            basic.show_leds("""
            # . . . #
            . . . . .
            # . # . #
            . . . . .
            # . . . #
            """)
        if number == 8:
            basic.show_leds("""
            # . . . #
            . . # . .
            # . . . #
            . . # . .
            # . . . #
            """)
        if number == 9:
            basic.show_leds("""
            # . # . #
            . . . . .
            # . # . #
            . . . . .
            # . # . #
            """)
        if number == 10:
            basic.show_leds("""
            # . . . #
            . # . # .
            # . . . #
            . # . # .
            # . . . #
            """)
        for a in range(number):
            music.play_tone(Note.C, music.beat(0.5))
            basic.pause(100)
        enabled = False
        basic.pause(1000)
        basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
    else:
        basic.show_icon(IconNames.NO)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)