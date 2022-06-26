import * as types from "opq-types";

export class Timespan {
    
    static readonly SECOND = <types.time.Timespan>1000;
    static readonly MINUTE = <types.time.Timespan>(Timespan.SECOND * 60);
    static readonly HOUR = <types.time.Timespan>(Timespan.MINUTE * 60);
    static readonly DAY = <types.time.Timespan>(Timespan.HOUR * 24);
    static readonly WEEK = <types.time.Timespan>(Timespan.DAY * 7);
    static readonly DAYS = {SUNDAY: 0, MONDAY: 1, TUESDAY: 2, WEDNESDAY: 3, THURSDAY: 4, FRIDAY: 5, SATURDAY: 6};
    
    static getSeconds(seconds: number) {
        return <types.time.Timespan>(seconds * Timespan.SECOND);
    }
    
    static getMinutes(minutes: number) {
        return <types.time.Timespan>(minutes * Timespan.MINUTE);
    }
    
    static getHours(hours: number) {
        return <types.time.Timespan>(hours * Timespan.HOUR);
    }
    
    static getDays(daysCount: number) {
        return <types.time.Timespan>(daysCount * Timespan.DAY);
    }
    
    static getTime(hours: number, minutes: number, seconds: number) {
        return <types.time.Timespan>(Timespan.getHours(hours) + Timespan.getMinutes(minutes) + Timespan.getSeconds(seconds));
    }
}
