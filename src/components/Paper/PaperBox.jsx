import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css';
import RoleList from './RoleList';

function PaperBox({ Role }) {
  const [permissions, setPermissions] = useState(Role);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setPermissions(Role);
  }, [Role]);

  const handleCheckboxChange = (event, item, func) => {
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
    setShowButtons(true);
  };

  const handleCancel = () => {
    setPermissions(Role);
    setShowButtons(false);
  };

  const handleSave = () => {
    // Save the updated permissions here
    console.log(permissions.permissions, 'saving..');
    setShowButtons(false);
  };

  return (
    <>
      <div className="paper-item">
        {permissions.permissions?.map((item) => (
          <div className="paper-box" key={item.name}>
            <Box
              sx={{
                display: 'flex',
                '& > :not(style)': {
                  m: 1,
                  width: 340,
                  height: 230,
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
                        onChange={(event) => handleCheckboxChange(event, item, func)}
                      />
                    </div>
                  ))}
                </div>
              </Paper>
            </Box>
          </div>
        ))}
      </div>
      {showButtons && (
        <div className="paper-role-btn">
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      )}
    </>
  );
}

export default PaperBox;
