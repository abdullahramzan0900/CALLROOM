import React from 'react';
import PaperBox from '../components/Paper/PaperBox';
import RoleList from '../components/Paper/RoleList';

function AccessControlListPage() {
  const columns = [
    { field: "ModuleName", headerName: "ModuleName", width: 180 },
    { field: "Admin", headerName: "Admin", width: 130 },
    {
      field: "AR",
      headerName: "AR",
      width: 130,
    },
    {
      field: "Voice",
      headerName: "Voice",
      width: 130,
    },
    {
        field: "Coordinator",
        headerName: "Coordinator    ",
        width: 130,
    },
    {
        field: "Actions",
        headerName: "Actions",
        width: 130,
    },
    
  ];

  const array = [
    {
      name: 'FullName',
      label: 'FullName',
      type: 'checkbox',
      // value: allInputData?.fullName,
    },
    {
      name: 'Email',
      label: 'Email',
      type: 'checkbox',
      // value: allInputData?.email,
    },
    {
      name: 'role',
      label: 'Role',
      type: 'options',
      // value: allInputData?.role,
    },
    {
      name: 'ProjectName',
      label: 'ProjectName',
      type: 'text',
      // value: allInputData?.ProjectName,
    },
  ];
  const rows = [
    { id: 1, FullName: "Snow", Email: "Jon", Role: "aaa", ProjectName: "sss" },
    {
      id: 2,
      FullName: "Lannister",
      Email: "Cersei",
      Role: "aa",
      ProjectName: "sss",
    },
    {
      id: 3,
      FullName: "Lannister",
      Email: "Jaime",
      Role: 45,
      ProjectName: "sss",
    },
    { id: 4, FullName: "Stark", Email: "Arya", Role: 16, ProjectName: "sss" },
    {
      id: 5,
      FullName: "Targaryen",
      Email: "Daenerys",
      Role: null,
      ProjectName: "sss",
    },
  ]
  return (
    <>
   <RoleList/>
    </>
  );
}
export default AccessControlListPage;
