import type { RangeLimit } from "@/types"

export function getBulletPosition(range: RangeLimit, bulletValue: number): number {
    if (bulletValue < range.min) return 0;
    if (bulletValue > range.max) return 100;
    return (bulletValue - range.min) / (range.max - range.min) * 100
}