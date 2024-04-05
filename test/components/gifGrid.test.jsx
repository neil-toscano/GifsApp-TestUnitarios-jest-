import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/gifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={ category } />);
        expect(screen.getByText(category));
        expect(screen.getByText('Cargando...'));
        screen.debug();
    });
    
    test('debe de mostrar los items cuando se carga la imgs de useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/12',
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });

        render(<GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();

    })
})