import type { RangeLimit } from "@/types";

export function setInRange(range: RangeLimit, selectedValue: number):number {
    let value = Math.max(range.min, selectedValue);
    value = Math.min(range.max, value);
    return value
}