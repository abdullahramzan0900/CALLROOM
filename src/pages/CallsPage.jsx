import React from "react"
import DataGrid from "../components/data-grid/DataGrid";
import { DataGridTable } from "../components/data-grid/DataGridNew";

function CallsPage()
{ const TABLE_HEAD = [
  { id: 'RoomNumber', label: 'RoomNumber', alignRight: false },
  { id: 'Time', label: 'Time', alignRight: false },
  { id: 'CallType', label: 'CallType', alignRight: false },
  { id: 'ProjectName', label: 'ProjectName', alignRight: false },
  { id: 'TakenBy', label: 'TakenBy', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];

const columns = [
    { field: "RoomNumber", headerName: "RoomNumber", width: 160 },
    { field: "Time", headerName: "Time", width: 160 },
    { field: "callType", headerName: "callType", width: 160 },
    {
      field: "ProjectName",
      headerName: "ProjectName",
      width: 160,
    },
    { field: "TakenBy", headerName: "TakenBy", width: 160 },
  ];
  
  const rows = [
    {
      id: 1,
      RoomNumber: "Snow",
      Time: "Jon",
      ProjectName: "aaa",
      callType: "sss",
      TakenBy: "aaa",
      click: "delete",
    },
    {
      id: 2,
      RoomNumber: "Lannister",
      Time: "Cersei",
      ProjectName: "aa",
      callType: "sss",
      TakenBy: "aaa",
    },
    {
      id: 3,
      RoomNumber: "Lannister",
      Time: "Jaime",
      ProjectName: 45,
      callType: "sss",
      TakenBy: "aaa",
    },
    {
      id: 4,
      RoomNumber: "Stark",
      Time: "Arya",
      ProjectName: 16,
      callType: "sss",
      TakenBy: "aaa",
    },
    {
      id: 5,
      RoomNumber: "Targaryen",
      Time: "Daenerys",
      ProjectName: "aa",
      callType: "sss",
      TakenBy: "aaa",
    },
  ];
  
const array = [
    {
      name: "RoomNumber",
      label: "RoomNumber",
      type: "number",
    //   value: allInputData?.RoomNumber,
    },
    {
      name: "Time",
      label: "Time",
      type: "time",
    //   value: allInputData?.Time,
    },
    {
      name: "role",
      label: "Role",
      type: "options",
    //   value: allInputData?.Role,
    },
    {
      name: "callType",
      label: "callType",
      type: "options",
    //   value: allInputData?.callType,
    },
    {
      name: "ProjectName",
      label: "ProjectName",
      type: "text",
    //   value: allInputData?.ProjectName,
    },
    {
      name: "TakenBy",
      label: "TakenBy",
      type: "text",
    //   value: allInputData?.TakenBy,
    },

  ];

  return(
    <>
       <DataGridTable
        rows={rows}
        columns={columns}
        // pagination={true}
        checkboxSelection={false}
        pageSize={5}
        pageSizeOptions={[5, 10, 15]}
        className="custom-data-grid"
        tablename="Calls"
        buttondata="Add Calls"
        formArray={array}
        formName="Calls"
   
      />
    </>
  )
}
export default CallsPage