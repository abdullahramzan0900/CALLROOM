import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function PaperData() {
    const evelation = [
        'Employees',
        'Calls',
        'Projects',
        'Rooms',
        'Roles',

    ]
    const data=[

        {
        
        "name":"Projects",
        
        "functionalities":{
        
        "canView":true,
        
        "canAdd":true,
        
        "canEdit":false,
        
        "canDelete":false
        
        }
        
        },
        
        {
        
        "name":"Employes",
        
        "functionalities":{
        
        "canView":true,
        
        "canAdd":true,
        
        "canEdit":false,
        
        "canDelete":false
        
        }
        
        }]
  return (
    <>
        <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked
        />
        Paneer
      </div>
</>
  );
}
export default PaperData;
