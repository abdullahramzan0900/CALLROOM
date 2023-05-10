import React from "react"
import DataGrid from "../components/data-grid/DataGrid";
import { DataGridTable } from "../components/data-grid/DataGridNew";
// import {DataGridTable} from "../components/data-grid/DataGridNew";


function RoomPage()
{
// const columns = [
//     { field: "RoomNumber", headerName: "RoomNumber" },
//     { field: "RoomType", headerName: "RoomType" },
//     { field: "RoomCapacity", headerName: "RoomCapacity" },
//     {
//       field: "status",
//       headerName: "status"
//     },
//   ];
  
//   const rows = [
//     {
//       id: 1,
//       RoomNumber: "4",
//       RoomType: "schedule",
//       RoomCapacity: "aaa",
//       status: "aaaa",
//     },
//     {
//       id: 2,
//       RoomNumber: "5",
//       RoomType: "schedule",
//       RoomCapacity: "aaa",
//       status: "booked",
//     },
//     {
//       id: 3,
//       RoomNumber: "120",
//       RoomType: "schedule",
//       RoomCapacity: "aa",
//       status: "booked",
//     },
//     {
//       id: 4,
//       RoomNumber: "8",
//       RoomType: "schedule",
//       RoomCapacity: "bbbb",
//       status: "active",
//     },
//   ];



 const TABLE_HEAD = [
  { id: 'RoomNumber', label: 'RoomNumber', alignRight: false },
  { id: 'RoomType', label: 'RoomType', alignRight: false },
  { id: 'RoomCapacity', label: 'RoomCapacity', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];
const array = [
    {
      name: "RoomNumber",
      label: "RoomNumber",
      type: "number",
      // value: allInputData?.RoomNumber,
    },
    {
      name: "RoomType",
      label: "RoomType",
      type: "options",
      // value: allInputData?.RoomType,
    },

    {
      name: "RoomCapacity",
      label: "RoomCapacity",
      type: "text",
      // value: allInputData?.RoomCapacity,
    },
  ];
const data = [
    {"RoomNumber":1,
    'RoomType':"saaa",
    'RoomCapacity':34,
    'status':"true",
    'action':'edit'
           
    }
]

const columns = [
    { field: "RoomNumber", headerName: "RoomNumber", width: 160 },
    { field: "RoomType", headerName: "RoomType", width: 160 },
    { field: "RoomCapacity", headerName: "RoomCapacity", width: 160 },
    {
      field: "status",
      headerName: "status",
      width: 160,
    },
  ];
  
  const rows = [
    {
      id: 1,
      RoomNumber: "4",
      RoomType: "schedule",
      RoomCapacity: "aaa",
      status: "aaaa",
    },
    {
      id: 2,
      RoomNumber: "5",
      RoomType: "schedule",
      RoomCapacity: "aaa",
      status: "booked",
    },
    {
      id: 3,
      RoomNumber: "120",
      RoomType: "schedule",
      RoomCapacity: "aa",
      status: "booked",
    },
    {
      id: 4,
      RoomNumber: "8",
      RoomType: "schedule",
      RoomCapacity: "bbbb",
      status: "active",
    },
  ];

  return(
    <>
    {/* <DataGridTable
            rows={rows}
            columns={columns}
            pagination
            checkboxSelection={false}
            pageSize={5}
            pageSizeOptions={[5, 10, 15]}
            className="custom-data-grid"
            tablename="Rooms"
            buttondata="Add Room"
            /> */}
      <DataGridTable
            rows={rows}
            columns={columns}
            // pagination={true}
            checkboxSelection={false}
            pageSize={5}
            pageSizeOptions={[5, 10, 15]}
            className="custom-data-grid"
            tablename="Rooms"
            buttondata="Add Room"
            formArray={array}
            formName="Rooms"
          />
    
    </>
  )
}
export default RoomPage