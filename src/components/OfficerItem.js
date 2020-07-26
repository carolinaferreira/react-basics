import React from 'react';

function OfficerItem({ officer, onDelete }){
  return (
    <li>
      {officer}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

export default OfficerItem;