import PropTypes from 'prop-types';

export const GifItem = ({ titulo, url }) => {
  return (
    <div className="card">
      <img src={url} alt={titulo} />
      <p>{titulo}</p>
    </div>
  );
};

GifItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

GifItem.defaultProps = {
  titulo: 'Gifs',
  url: 'https://pixels.com',
};
