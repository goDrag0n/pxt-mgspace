/*
//% weight=0 color=#0033FF icon="\uf2a2" block="mgspace"

namespace mgspace{

*超声波SR04

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
//% blockId="BY8301" block="BY8301 cmd %cmd"
//% blockGap=2 weight=1 blockExternalInputs=false
  export function BY8301(cmd:number): void {
    basic.showNumber(0);
    let temp=0x7e
    serial.writeString(temp);
    temp=0x03
    serial.writeString(temp);
    temp=number
    serial.writeString(temp);
    temp=0x00
    temp=0x03^number
    serial.writeString(temp);
    temp=0xef
    serial.writeString(temp);
  }
    
//% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
//% blockGap=2 weight=1
    export function ledOfRectangle(length:number, width:number):void {
        basic.showNumber(length*width)
    }
}
*/
//% weight=0 color=#0033FF icon="\uf2a2" block="mgspace"
namespace mgspace {
    /**
    * 計算長方形面積，並回傳
    */
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width: number): number {
        return length * width
    }
    /**
    * 計算長方形面積，不回傳，只顯示在LED
    */
    //% blockId="ledOfRectangle" block="show area of rectangle length %length|width %width"
    //% blockGap=2 weight=1
    export function ledOfRectangle(length: number, width: number): void {
        basic.showNumber(length * width)
    }
    //% blockId="SR04" block="SR04 Trig %Trig|Echo %Echo"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function SR04(Trig: DigitalPin, Echo: DigitalPin): number {
        pins.digitalWritePin(Trig, 1);
        control.waitMicros(20);
        pins.digitalWritePin(Trig, 0);
        const tim = input.runningTimeMicros();
        while (pins.digitalReadPin(Echo) == 0 && input.runningTimeMicros() - tim < 20000) {
        }
        tim = input.runningTimeMicros();
        while (pins.digitalReadPin(Echo) == 1 && input.runningTimeMicros() - tim < 20000) {
        }
        const distance = input.runningTimeMicros() - tim;
        distance = distance / 58;
        return distance;
    }
}
