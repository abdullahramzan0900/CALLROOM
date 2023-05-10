import React from "react"
import DataGrid from "../components/data-grid/DataGrid";
import { DataGridTable } from "../components/data-grid/DataGridNew";

function ProjectPage()
{ const TABLE_HEAD = [
  { id: 'projectName', label: 'ProjectName', alignRight: false },
  { id: 'clientName', label: 'ClientName', alignRight: false },
  { id: 'projectType', label: 'ProjectType', alignRight: false },
  { id: 'dailyScrum', label: 'dailyScrum', alignRight: false },
  { id: 'action', label: 'Action', alignRight: false },
];

const array = [
    {
      name: "ProjectName",
      label: "ProjectName",
      type: "text",
    //   value: allInputData?.fullName,
    },
    {
      name: "ClientName",
      label: "ClientName",
      type: "text",
    //   value: allInputData?.ClientName,
    },
    {
      name: "ProjectType",
      label: "ProjectType",
    //   type: "options",
    //   value: allInputData?.ProjectType,
    },
    {
      name: "dailyScrum",
      label: "dailyScrum",
      type: "text",
    //   value: allInputData?.dailyScrum,
    },
  ];
  const columns = [
    { field: "ProjectName", headerName: "ProjectName", width: 160 },
    { field: "ClientName", headerName: "ClientName", width: 160 },
    { field: "ProjectType", headerName: "ProjectType", width: 160 },
    {
      field: "ProjectName",
      headerName: "ProjectName",
      width: 160,
    },
    { field: "dailyScrum", headerName: "dailyScrum", width: 160 },
  ];
  
  const rows = [
    {
      id: 1,
      ProjectName: "Snow",
      ClientName: "Jon",
      ProjectType: "aaa",
      ProfiletName: "sss",
      dailyScrum: "aaa",
    },
    {
      id: 2,
      ProjectName: "Lannister",
      ClientName: "Cersei",
      ProjectType: "aa",
      dailyScrum: "aaa",
    },
    {
      id: 3,
      ProjectName: "Lannister",
      ClientName: "Jaime",
      ProjectType: 45,
      dailyScrum: "aaa",
    },
    {
      id: 4,
      ProjectName: "Stark",
      ClientName: "Arya",
      ProjectType: 16,
      dailyScrum: "aaa",
    },
    {
      id: 5,
      ProjectName: "Targaryen",
      ClientName: "Daenerys",
      ProjectType: null,
      dailyScrum: "aaa",
    },
    {
      id: 6,
      ProjectName: "Melisandre",
      ClientName: null,
      ProjectType: 150,
      dailyScrum: "aaa",
    },
    {
      id: 7,
      ProjectName: "Clifford",
      ClientName: "Ferrara",
      ProjectType: 44,
      dailyScrum: "aaa",
    },
    {
      id: 8,
      ProjectName: "Frances",
      ClientName: "Rossini",
      ProjectType: 36,
      dailyScrum: "aaa",
    },
    {
      id: 9,
      ProjectName: "Roxie",
      ClientName: "Harvey",
      ProjectType: 65,
      dailyScrum: "aaa",
    },
  ];
  return(
    <>
         <DataGridTable
            rows={rows}
            columns={columns}
            checkboxSelection={false}
            pageSize={5}
            pageSizeOptions={[5, 10, 15]}
            className="custom-data-grid"
            tablename="Project"
            buttondata="Add Project"
            formArray={array}
            formName="Projects"
        
          />
    
    </>
  )
}
export default ProjectPage