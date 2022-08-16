input.onButtonPressed(Button.A, function () {
    edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, 80)
})
input.onButtonPressed(Button.B, function () {
    edubitMotors.brakeMotor(MotorChannel.M1)
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
})
