const interval = {};
interval.millisecond = 1;
interval.second = 1000 * interval.millisecond;
interval.minute = 60 * interval.second;
interval.hour = 60 * interval.minute;
interval.day = 24 * interval.hour;
interval.week = 7 * interval.day;
interval.month = 4 * interval.week; // months are complicated
interval.year = 365 * interval.day;

export default class Time {
  static getYears = timestamp => Math.floor(timestamp / interval.year);
  static getMonths = timestamp => Math.floor(timestamp / interval.month);
  static getWeeks = timestamp => Math.floor(timestamp / interval.week);
  static getDays = timestamp => Math.floor(timestamp / interval.day);
  static getHours = timestamp => Math.floor(timestamp / interval.hour);
  static getMinutes = timestamp => Math.floor(timestamp / interval.minute);
  static getSeconds = timestamp => Math.floor(timestamp / interval.second);

  static getIntervals = timestamp => {
    let remainder = timestamp;

    const years = Time.getYears(remainder);
    remainder -= years * interval.year;

    const months = Time.getMonths(remainder);
    remainder -= months * interval.month;

    const weeks = Time.getWeeks(remainder);
    remainder -= weeks * interval.week;

    const days = Time.getDays(remainder);
    remainder -= days * interval.day;

    const hours = Time.getHours(remainder);
    remainder -= hours * interval.hour;

    const minutes = Time.getMinutes(remainder);
    remainder -= minutes * interval.minute;

    const seconds = Time.getSeconds(remainder);
    remainder -= seconds * interval.second;

    const milliseconds = remainder;

    return {
      years,
      months,
      weeks,
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    };
  };

  // works with timestamps only
  static largestTimeIntervalString = time => {
    const now = Date.now();
    const delta = time - now;

    // timestamp is in the past
    if (delta < 0) {
      return "due";
    }

    const intervals = Time.getIntervals(delta);
    const intervalName = Object.keys(intervals).find(key => intervals[key] > 0);
    const intervalValue = intervals[intervalName];

    return `${intervalValue} ${
      intervalValue > 1 ? intervalName : intervalName.slice(0, -1)
    }`;
  };
}
