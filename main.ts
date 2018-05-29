/*
//% weight=0 color=#0033FF icon="\uf2a2" block="mgspace"

namespace mgspace{


}
*/
//% weight=0 color=#0033FF icon="\uf2a2" block="mgspace"
namespace mgspace {
    /**
    * 计算长方形面积并回传
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

    /*
    *超声波SR04
    */
    //% blockId="SR04" block="SR04 trig %trig|echo %echo"
    //% weight=10
    export function SR04(trig: DigitalPin, echo: DigitalPin): number {
        pins.digitalWritePin(trig,1);
        control.waitMicros(20);
        pins.digitalWritePin(trig, 0);
        let t = input.runningTimeMicros();

        while (pins.digitalReadPin(echo) == 0 && input.runningTimeMicros() - t < 20000) {
        }
        t = input.runningTimeMicros();
        
        while (pins.digitalReadPin(echo) == 1 && input.runningTimeMicros() - t < 20000) {
        }
        
        let d= input.runningTimeMicros() - t;
        
        d = d/ 58;
        return d;
    }

    //% blockId="BY8301" block="BY8301 cmd %cmd"
    //% blockGap=2 weight=1 blockExternalInputs=false
    export function BY8301(cmd: number): void {
        basic.showNumber(0);
        let temp = 0x7e

        serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
        )
        /*serial.writeString(temp);
        temp = 0x03
        serial.writeString(temp);
        temp = cmd
        serial.writeString(temp);
        temp = 0x00
        temp = 0x03 ^ cmd
        serial.writeString(temp);
        temp = 0xef
        serial.writeString(temp);
 */   
        }
}
