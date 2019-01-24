from gpiozero import MotionSensor
from gpiozero import LED
from time import sleep

def handle_motion():
    print("Motion detected!");
    led.on();
    sleep(1);
    led.off();
    sleep(1);

led = LED(17)
pir = MotionSensor(18);

print(pir.pin.number);
pir.when_motion = handle_motion;

while (True):
    sleep(1);
    #pir.wait_for_motion();
  #  handle_motion();
    
