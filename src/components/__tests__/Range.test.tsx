import {describe, test, expect, afterEach } from 'vitest'
import {cleanup,render,screen} from '@testing-library/react'
import Range from '../Range'

describe('Range Slider', () => {
    afterEach(cleanup)
    test('Deberia renderizarse', () => {
        render(<Range range={{min:0, max:100}} setInput={() => {}}/>)
        expect(screen.queryAllByText('€')).toBeDefined()
    })
    test('Debería renderizarse el componente con un rango por defecto si este no está definido', () => {
        render(<Range setInput={() => { }} />)
        expect(screen.getAllByText('€')).toBeDefined()
    })
    test('Debería renderizarse si steps es un array vacio', () => {
        render(<Range range={{min:0, max:100}} steps={[]} setInput={() => { } } />)
        expect(screen.queryAllByText('€')).toBeDefined()
    })
    test('Debería renderizarse si steps es un array vacio y isFixed es true', () => {
        render(<Range range={{min:0, max:100}} steps={[]} isFixed={true} setInput={() => { }}/>)
        expect(screen.queryAllByText('€')).toBeDefined()
    })
})