from gpiozero import MotionSensor
from gpiozero import LED
from time import sleep

led = LED(17)
pir = MotionSensor(4);

while True:
    pir.wait_for_motion();
    handle_motion();
    
def handle_motion():
    print("Motion detected!");
    led.on();
    sleep(1);
    led.off();
    sleep(1);