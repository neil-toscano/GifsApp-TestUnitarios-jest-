import { getGrid } from "../../src/helpers/getgif";


describe('Pruebas en getGifs', () => {

    const category = 'Goku';

    test('debe de retornar un arreglo de gifs', async () => { 
        const listGifs = await getGrid(category);

        expect(listGifs.length).toBeGreaterThan(0);
        expect(listGifs[0]).toEqual({
            id: expect.any(String),
            titulo: expect.any(String),
            url: expect.any(String),
        })
    })
})