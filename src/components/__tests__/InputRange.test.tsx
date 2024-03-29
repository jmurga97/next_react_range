import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import { InputRange } from '../Range/InputRange';

describe('Input Range Slider', () => {
    test('Renderiza correctamente con los valores proporcionados', () => {
        const props = {
            range: { min: 0, max: 100 },
            setBullet: () => { },
            label: 'Min.',
            bullet: 50,
            bulletReference: 150,
            id: 'min',
            isFixed: false,
        };
        render(<InputRange {...props} />);

        expect(screen.getByLabelText('Min.')).toBeDefined();
    });
})
