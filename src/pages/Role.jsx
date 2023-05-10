import React from "react"
import { DataGridTable } from "../components/data-grid/DataGridNew";


function RolePage()
{ 
const columns = [
    { field: "Role", headerName: "Role", width: 160 },
 
  ];
const array = [
    {
      name: "Role",
      label: "Role",
      type: "number",
      // value: allInputData?.RoomNumber,
    },
  ]; const rows = [
    {
      id: 1,
      Role:"sssss"
    },
]

  return(
    <>
      <DataGridTable
            rows={rows}
            columns={columns}
            pagination
            checkboxSelection={false}
            pageSize={5}
            pageSizeOptions={[5, 10, 15]}
            className="custom-data-grid"
            tablename="Role"
            buttondata="Add Role"
            formArray={array}
            formName="Role"
          />
    
    </>
  )
}
export default RolePage