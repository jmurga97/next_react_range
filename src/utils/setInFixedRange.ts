export function setInFixedRange(steps: number[] | undefined, selectedValue: number): number {
    let nearValue = 0
    if (steps && steps?.length > 0) {
        nearValue = steps[0]
        for (let i = 1; i < steps.length; i++) {
            if (Math.abs(selectedValue - steps[i]) < Math.abs(selectedValue - nearValue)) {
                nearValue = steps[i];
            }
        }
    }
    return nearValue
}