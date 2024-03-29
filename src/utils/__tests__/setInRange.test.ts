import { setInRange } from '../setInRange';
import { describe, test, expect } from 'vitest'

//setInRange determina si selectedValue se encuentra en el rango seleccionado y devuelve el mismo valor de ser así. En caso contrario devuelve range.min o range.max.
describe('setInRange', () => {
    test('deberia retornar selectedValue si está dentro del rango', () => {
        const range = { min: 0, max: 100 };
        const selectedValue = 50;
        expect(setInRange(range, selectedValue)).toBe(selectedValue);
    });

    test('deberia retornar range.min si selectedValue está fuera del rango y es menor', () => {
        const range = { min: 0, max: 100 };
        const selectedValue = -10;
        expect(setInRange(range, selectedValue)).toBe(0);
    });

    test('deberia retornar range.max si selectedValue está fuera del rango y es mayor', () => {
        const range = { min: 0, max: 100 };
        const selectedValue = 200;
        expect(setInRange(range, selectedValue)).toBe(100);
    });
});
