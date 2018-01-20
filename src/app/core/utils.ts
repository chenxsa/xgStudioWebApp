import * as moment from 'moment';
import { isNullOrUndefined } from 'util';

/**
 * 检查是否有真值
 */
export function isTruth(value: any): boolean {
    return typeof isNullOrUndefined(value) && value !== false;
}

/**
 * 转化成RMB元字符串
 */
export function yuan(value: any): string {
    return `&yen ${value}`;
}

/**
 * 不满两位数自动填充 `0`
 * @param val 数值
 */
export function fixedZero(val) {
    return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 获取时间范围
 * @param type 类型
 * @param time 开始时间
 */
export function getTimeDistance(type: 'today' | 'week' | 'month' | 'year', time: Date = new Date()) {
    const oneDay = 1000 * 60 * 60 * 24;

    if (type === 'today') {
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        return [moment(time), moment(time.getTime() + (oneDay - 1000))];
    }

    if (type === 'week') {
        let day = time.getDay();
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);

        if (day === 0) {
            day = 6;
        } else {
            day -= 1;
        }

        const beginTime = time.getTime() - day * oneDay;

        return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
    }

    if (type === 'month') {
        const year = time.getFullYear();
        const month = time.getMonth();
        const nextDate = moment(time).add(1, 'months');
        const nextYear = nextDate.year();
        const nextMonth = nextDate.month();

        return [
            moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
            moment(
                moment(
                    `${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`
                ).valueOf() - 1000
            )
        ];
    }

    if (type === 'year') {
        const year = time.getFullYear();

        return [
            moment(`${year}-01-01 00:00:00`),
            moment(`${year}-12-31 23:59:59`)
        ];
    }
}


export function isTargetType(val:any, type:"object" | "string"):boolean {
    return typeof val === type;
}

export function isPrimitiveOrPrimitiveClass(obj:any):boolean {
    return !!(['string', 'boolean', 'number'].indexOf((typeof obj)) > -1 || (obj instanceof String || obj === String ||
    obj instanceof Number || obj === Number ||
    obj instanceof Boolean || obj === Boolean));
}

export function isArrayOrArrayClass(clazz:Function):boolean {
    if (clazz === Array) {
        return true;
    }
    return Object.prototype.toString.call(clazz) === '[object Array]'
}




