import React from 'react';

const ToolTip = ({outside}) => {
  return <div>
    {outside 
      ?
      <div>true</div>
      :
      <div>false</div>
    }
  </div>;
};

export default ToolTip;
