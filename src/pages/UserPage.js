import React from 'react';
import { DataGridTable } from '../components/data-grid/DataGridNew';

function UserPage() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "FullName", headerName: "FullName", width: 130 },
    { field: "Email", headerName: "Email", width: 130 },
    {
      field: "Role",
      headerName: "Role",
      width: 200,
    },
    {
      field: "ProjectName",
      headerName: "ProjectName",
      width: 130,
    },
  ];

  const array = [
    {
      name: 'FullName',
      label: 'FullName',
      type: 'text',
      // value: allInputData?.fullName,
    },
    {
      name: 'Email',
      label: 'Email',
      type: 'text',
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
      <DataGridTable        
        rows={rows}
        columns={columns}
        checkboxSelection={false}
        pageSize={9}
        pageSizeOptions={[9, 15, 20]}
        className="custom-data-grid"
      tablename="Employees"
      buttondata="Add Employees"
      formName="Employees"
      formArray={array}/>
      
    </>
  );
}
export default UserPage;
