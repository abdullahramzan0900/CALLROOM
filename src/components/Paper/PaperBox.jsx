import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css';
import RoleList from './RoleList';

function PaperBox({ Role }) {
  useEffect(()=>{

    setPermissions(Role);
  },[Role])
  const [permissions, setPermissions] = useState(Role);
  console.log(Role,"role2")
  console.log(permissions);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {permissions.permissions?.map((item) => (
          <div className="paper-box" key={item.name}>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 300,
                  height: 210,
                },
              }}
            >
              <Paper elevation={3}>
                <div className="paper-content">
                  <label className="title" htmlFor={item.name}>
                    {item.name}
                  </label>
                  {Object.keys(item.functionalities).map((func) => (
                    <div className="items" key={func}>
                      <label htmlFor={`${item.name}-${func}`}>{func}</label>
                      <input
                        type="checkbox"
                        name={`${item.name}-${func}`}
                        id={`${item.name}-${func}`}
                        checked={item.functionalities[func]}
                        onChange={(event) => {
                          const { checked } = event.target;
                          const updatedPermissions = permissions.permissions.map((p) => {
                            if (p.name === item.name) {
                              return {
                                name: p.name,
                                functionalities: {
                                  ...p.functionalities,
                                  [func]: checked,
                                },
                              };
                            }
                            return p;
                          });
                          setPermissions({ ...permissions, permissions: updatedPermissions });
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Paper>
            </Box>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          console.log('Saving permissions:', permissions.permissions);
          // Save the updated permissions here
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setPermissions(Role);
          console.log('Discarding changes');
        }}
      >
        {' '}
        Cancel
      </button>
    </>
  );
}

export default PaperBox;
