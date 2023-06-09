import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PaperData from './PaperData';
import PaperBox from './PaperBox';

export default function RoleList() {
  const data = [
    {
      role: 'Admin',
      permissions: [
        {
          name: 'Projects',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: true,
            canDelete: false,
          },
        },
        {
          name: 'Roles',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Calls',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Employees',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
      ],
    },
    {
      role: 'Ar',
      permissions: [
        {
          name: 'Projects',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Calls',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: true,
            canDelete: false,
          },
        },
        {
          name: 'Employees',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: true,
            canDelete: false,
          },
        },
        {
          name: 'Roles',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: false,
            canDelete: false,
          },
        },
      ],
    },
    {
      role: 'Voice',
      permissions: [
        {
          name: 'Calls',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: true,
            canDelete: false,
          },
        },
        {
          name: 'Employees',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Roles',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Projects',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: false,
            canDelete: false,
          },
        },
      ],
    },
    {
      role: 'Arm',
      permissions: [
        {
          name: 'Projects',
          functionalities: {
            canView: true,
            canAdd: true,
            canEdit: true,
            canDelete: true,
          },
        },
        {
          name: 'Roles',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Calls',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
        {
          name: 'Employees',
          functionalities: {
            canView: true,
            canAdd: false,
            canEdit: false,
            canDelete: false,
          },
        },
      ],
    },
  ];

  const [selectedRole, setSelectedRole] = useState(data[0]);
  console.log(selectedRole, 'roleee');

  console.log(selectedRole?.role, 'aaarrrr');
  console.log(selectedRole, 'aaaaa');
  const handleChange = (event) => {
    // console.log("my event", role)
    console.log(event.target.value,"value")
    setSelectedRole(event.target.value);
  };
  return (
    <div className="paper-role">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedRole}
            label="Role"
            onChange={handleChange}
          > 
            {data &&
              data?.length > 0 &&
              data.map((item) => (
                <MenuItem    key={item.role} value={item}>
                  {item.role}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <div>
        <PaperBox Role={selectedRole} setSelectedRole={setSelectedRole} />
      </div>
    </div>
  );
}
