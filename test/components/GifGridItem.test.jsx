import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/gifGridItem';

describe('pruebas GifGridItem', () => {
  const titulo = 'one Punch';
  const url =
    'https://media4.giphy.com/media/Qm3xCXWifrgzb9aEqg/giphy.gif?cid=ae0bb4fawd335f9tdt7owa3rdpeg3zltwpmroo4cc8k39b3a&ep=v1_gifs_search&rid=giphy.gif&ct=g';
  
    test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem titulo={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la img con el URL y el ALT indicado', () => { 
    render(<GifItem titulo= {titulo} url= {url} />);

    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(titulo);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  })

  test('debe de mostrar el tituo en el componente', () => { 
    render(<GifItem titulo={titulo} url={url} />);
    expect(screen.getByText(titulo)).toBeTruthy();
   })
});
