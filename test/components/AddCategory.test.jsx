import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/addCategory"

describe('Prueba en <AddCategory', () => { 

    test('Debe de cambiar el valor de la caja de Texto', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: { value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
        screen.debug();
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue    = 'saitame';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: 'saitame'}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })

    test('no debe de llamar el onNewCategory si el input esta vacios', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    })
})