import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest'
import { InputRange } from '../Range/InputRange';

const mockecdSetBullet = vi.fn()

describe('Input Range Slider', () => {
    test('Renderiza correctamente con los valores proporcionados', () => {
        const props = {
            range: { min: 0, max: 100 },
            setBullet: mockecdSetBullet,
            bullet: 50,
            bulletReference: 150,
            id: 'min',
            isFixed: false,
        };
        render(<InputRange {...props} />);

        expect(screen.queryAllByText('€')).toBeDefined();
    });
    test('Debe poder cambiar el valor de input range', () => {
        const props = {
            range: { min: 0, max: 100 },
            setBullet: mockecdSetBullet,
            bullet: 50,
            bulletReference: 150,
            id: 'min',
            isFixed: false,
        };
        render(<InputRange {...props} />);
        const element = screen.getAllByTestId('input-range')[0] as HTMLInputElement
        fireEvent.change(element,{target: {value: 100}})
        expect(element.value).toBe('100');
    });
})
