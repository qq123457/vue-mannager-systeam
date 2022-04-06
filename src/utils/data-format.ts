import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const DATE_TIEM_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIEM_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format);
}

export function firstUpperCase(str: string) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
