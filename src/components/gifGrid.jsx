import { GifItem } from './gifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading  ? <h2>Cargando...</h2> : null}
      <div className="card-grid">
        {images.map(({ id, titulo, url }) => (
          <GifItem key={id} titulo={titulo} url={url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

