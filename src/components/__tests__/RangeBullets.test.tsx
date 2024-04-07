import {describe, test, expect, afterEach, vi } from 'vitest'
import {cleanup,render,screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import { RangeBullets } from '../Range/RangeBullets'


const mockecdSetIsDragging = vi.fn()

describe('Range Bullets', () => {
    afterEach(cleanup)
    test('Deberia renderizarse', () => {
        const props = {
            isDragging: false,
            setIsDragging: mockecdSetIsDragging,
            bulletPosition: 0,
            isFixed: false
        }
        render(<RangeBullets {...props} />)
        const element = screen.getAllByTestId('bullet')[0] as HTMLDivElement
        expect(element).toBeDefined()
    })
})