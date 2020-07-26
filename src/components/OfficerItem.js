import React from 'react';
import PropTypes from 'prop-types';

function OfficerItem({ officer, onDelete }){
  return (
    <li>
      {officer}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

OfficerItem.PropTypes ={
  officer: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
export default OfficerItem;