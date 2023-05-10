import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';
import './style.css';

const Roles = ['Voice', 'Admin', 'AR', 'ARM', 'Coordinator'];
const Types = ['Schedule', 'UnSchedule'];

// eslint-disable-next-line react/prop-types
export default function FormDialog({ formArray, handlechange, formName }) {
  const [open, setOpen] = React.useState(true);
  const [myData, setMyData] = React.useState('');

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment">
        <DialogContent>
          <h2 style={{
          

          }} className="form-header">{formName}</h2>
          <div className="form-div">
            {formArray &&
              // eslint-disable-next-line array-callback-return, consistent-return, react/prop-types
              formArray?.map((item, index) => {
                if (item.type === 'text' || item.type === 'time' || item.type === 'number') {
                  return (
                    <div key={index}>
                      <TextField
                        autoFocus
                        margin="dense"
                        id="flat"
                        label={item.label}
                        name={item.name}
                        type={item.type}
                        onChange={(e) => handlechange(e.target.value, e.target.name)}
                        fullWidth
                      />
                    </div>
                  );
                }
                if (item.type === 'options') {
                  if (item.name === 'role') {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Box>
                        <div
                          style={{
                            marginTop: '20px',
                          }}
                        >
                          <InputLabel>{item.name}</InputLabel>
                          <Select
                            sx={{
                              width: '100% !important',
                              padding: '5px',
                            }}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name={item?.name}
                            label={item.label}
                            fullWidth
                            className="custom-select"
                          >
                            {Roles &&
                              Roles.length > 0 &&
                              Roles?.map((item1) => {
                                const handleChange = () => {
                                  console.log('item.name', item.label);
                                  setMyData(item1);
                                  handlechange(item1, item.label);
                                };
                                return (
                                  <MenuItem
                                    sx={{
                                      display: 'list-item !important',
                                      paddingLeft: '15px !important',
                                    }}
                                    onClick={handleChange}
                                    key={item1}
                                    value={item1}
                                  >
                                    <div>{item1}</div>
                                  </MenuItem>
                                );
                              })}
                          </Select>
                        </div>
                      </Box>
                    );
                  }
                  if (item.name === 'callType') {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          marginTop: '20px',
                        }}
                      >
                        <InputLabel id="demo-simple-select-label">CallType</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name={item?.name}
                          label={item.label}
                          fullWidth
                        >
                          {Types &&
                            Types.length > 0 &&
                            Types?.map((item1) => {
                              const handleChange = () => {
                                console.log('item.name', item.label);

                                handlechange(item1, item.label);
                              };
                              return (
                                <MenuItem
                                  sx={{
                                    display: 'list-item !important',
                                    paddingLeft: '15px !important',
                                  }}
                                  onClick={handleChange}
                                  key={item1}
                                  value={item1}
                                >
                                  <div>{item1}</div>
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </div>
                    );
                  }
                  if (item.name === 'ProjectType') {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          marginTop: '20px',
                        }}
                      >
                        <InputLabel id="demo-simple-select-label">CallType</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name={item?.name}
                          label={item.label}
                          fullWidth
                        >
                          {Types &&
                            Types.length > 0 &&
                            ((item1) => (
                              <MenuItem
                                sx={{
                                  display: 'list-item !important',
                                  paddingLeft: '15px !important',
                                }}
                                onClick={handlechange}
                                key={item1}
                                value={item1}
                              >
                                <div>{item1}</div>
                              </MenuItem>
                            ))}
                        </Select>
                      </div>
                    );
                  }
                  if (item.name === 'RoomType') {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div
                        style={{
                          marginTop: '20px',
                        }}
                      >
                        <InputLabel id="demo-simple-select-label">CallType</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name={item?.name}
                          label={item.label}
                          fullWidth
                        >
                          {Types &&
                            Types.length > 0 &&
                            Types?.map((item1) => {
                              const handleChange = () => {
                                console.log('item.name', item.label);

                                handlechange(item1, item.label);
                              };
                              return (
                                <MenuItem
                                  sx={{
                                    display: 'list-item !important',
                                    paddingLeft: '15px !important',
                                  }}
                                  onClick={handleChange}
                                  key={item1}
                                  value={item1}
                                >
                                  <div>{item1}</div>
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </div>
                    );
                  }
                }
              })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            style={{
              color: '#1a73e8',
            }}
            onClick={() => {
              // eslint-disable-next-line no-undef
              AddData();
              handleClose();
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
