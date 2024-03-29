import {describe, test, expect} from 'vitest'
import { getBulletPosition } from '../getBulletPosition'

//getBulletPosition devuelve un número entre 0 y 100 para posicionar de manera dinámica la propiedad left de css
describe('getBulletPosition', () => {

    test('deberia retornar una posicion correcta dentro del rango', () => {
        const range = { min: 0, max: 100 };
        const bulletValue = 50;
        expect(getBulletPosition(range, bulletValue)).toBe(50);
    });

    test('deberia retornar una posición correcta dentro de un rango distinto', () => {
        const range = { min: 50, max: 150 };
        const bulletValue = 75;
        expect(getBulletPosition(range, bulletValue)).toBe(25);
    });

    test('deberia retornar 0% si bulletValue es menor', () => {
        const range = { min: 20, max: 100 };
        const bulletValue = 0;
        expect(getBulletPosition(range, bulletValue)).toBe(0);
    });

    test('deberia retornar 100% si bulletValue es mayor', () => {
        const range = { min: 20, max: 160 };
        const bulletValue = 200;
        expect(getBulletPosition(range, bulletValue)).toBe(100);
    });


})