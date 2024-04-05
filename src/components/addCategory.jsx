import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    //cambiamos el valor del input
    setInputValue(event.target.value);
  };
  const onsubmit = (event) => {
    //al darle enter en el input
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // setCatego((data)=>[...data,inputValue]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={(event) => onsubmit(event)} aria-label='form'>
      <input
        placeholder="Buscar..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
