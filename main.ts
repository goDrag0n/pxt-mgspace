//&weight=0 color=#0033FF icon="\uf2a2" block="mgspace"

namespace mgspace{
/**
*³¬Éù²¨Ä£¿éSR04²â¾à
*/
//% blockId="SR04" block="SR04 Trig %Trig|Echo %Echo"
//% blockGap=2 weight=0 blockExternalInputs=true
export function SR04(Trig: DigitalPin, Echo: DigitalPin): number {
  pins.digitalWritePin(Trig,1);
  control.waitMicros(20);
  pins.digitalWritePin(Trig,0);
  const tim=input.runningTimeMicros();
  while(pins.digitalReadPin(Echo)==0 && input.runningTimeMicros()-tim<20000)
  {
  }
  tim=input.runningTimeMicros();
  while(pins.digitalReadPin(Echo)==1 && input.runningTimeMicros()-tim<20000)
  {
  }
  const distance = input.runningTimeMicros() - tim;
  distance = distance / 58;
  return distance;
}
