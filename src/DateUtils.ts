import * as types from "opq-types";

export class DateUtils {
    
    static readonly EPOCH = <types.time.Timestamp>0;
    
    static now(): types.time.Timestamp {
        return <types.time.Timestamp>Date.now();
    }
    
    static nowAdd(time: types.time.Timespan): types.time.Timestamp {
        return <types.time.Timestamp>(Date.now() + time);
    }
    
    static nowSub(time: types.time.Timespan): types.time.Timestamp {
        return <types.time.Timestamp>(Date.now() - time);
    }
    
    static lastDay(): types.time.Timestamp {
        return <types.time.Timestamp>(Date.now() - 1000 * 60 * 60 * 24);
    }
    
    static lastWeek(): types.time.Timestamp {
        return <types.time.Timestamp>(Date.now() - 1000 * 60 * 60 * 24 * 7);
    }
    
    static lastMonth(): types.time.Timestamp {
        return <types.time.Timestamp>(Date.now() - 1000 * 60 * 60 * 24 * 30);
    }
    
    static isTimeElapsed(timestamp: types.time.Timestamp, timespan: types.time.Timespan): boolean {
        return timestamp + timespan < Date.now();
    }
    
    static isPast(timestamp: types.time.Timestamp) {
        return timestamp < Date.now();
    }
    
    static isFuture(timestamp: types.time.Timestamp) {
        return timestamp > Date.now();
    }
    
    static add(timestamp: types.time.Timestamp, time: types.time.Timespan): types.time.Timestamp {
        return <types.time.Timestamp>(timestamp + time);
    }
    
    static sub(timestamp: types.time.Timestamp, time: types.time.Timespan): types.time.Timestamp {
        return <types.time.Timestamp>(timestamp - time);
    }
}
