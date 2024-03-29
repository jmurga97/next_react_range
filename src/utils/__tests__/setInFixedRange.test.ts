import { describe, test, expect } from 'vitest'
import { setInFixedRange } from '../setInFixedRange'

//setInFixedRange ubica el parámetro selectedValue según a que valor del arrray de números es cercano
describe('setInFixedRange', () => {

    test('deberia retornar 0 si el array es undefined', () => {
        const steps: number[] | undefined = undefined;
        const selectedValue = 10;
        expect(setInFixedRange(steps, selectedValue)).toBe(0);
    });

    test('deberia retornar 0 si el array es vacio', () => {
        const steps: number[] = [];
        const selectedValue = 10;
        expect(setInFixedRange(steps, selectedValue)).toBe(0);
    });

    test('deberia retornar a su valor más próximo al steps array', () => {
        const steps = [5, 10, 15, 20];
        const selectedValue = 12;
        expect(setInFixedRange(steps, selectedValue)).toBe(10);
    });

    test('Debería retornar el primer valor del array si la distancia entre los steps son iguales', () => {
        const steps = [5, 15, 30, 45];
        const selectedValue = 10;
        expect(setInFixedRange(steps, selectedValue)).toBe(5);
    });

    test('Debería retornar el primer valor del array si es menor y está fuera del rango', () => {
        const steps = [5, 15, 30, 45];
        const selectedValue = 2;
        expect(setInFixedRange(steps, selectedValue)).toBe(5);
    });

    test('Debería retornar el ultimo valor del array si es mayor y está fuera del rango', () => {
        const steps = [5, 15, 30, 45];
        const selectedValue = 55;
        expect(setInFixedRange(steps, selectedValue)).toBe(45);
    });
})