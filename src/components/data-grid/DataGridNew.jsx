import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import './index.css'
import { Button } from "@mui/material";
// import FormDialog from "../FormModel/FormDialog";
import { useState } from "react";
import Model from "../model/Model"  

export const DataGridTable = ({
  rows,
  columns,
  pagination,
  checkboxSelection,
  className,
  pageSizeOptions,
  pageSize,
  tablename,
  buttondata,
  formArray,
  formName,
  handlechange,
  AddData
}) => {
  const [showmodel,Setshowmodel]=useState(false)
  console.log(rows,"rows")
  return (
 
      <div className="datagrid" >
        <div className="table-header">
<div>
<h4 style={{

}}>{tablename}</h4> 
</div>
<div>
<Button className="model_button" onClick={(()=>{
 Setshowmodel(!showmodel);
})}>{buttondata}</Button>
</div>
        </div>
        <DataGrid style={{ background: 'white' }}
          rows={rows}
          columns={columns}
          pagination={pagination}
          checkboxSelection={checkboxSelection}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize,
              },
            },
          }}
          pageSizeOptions={pageSizeOptions}
          className={"custom-data-grid" }
          getRowId={(row) => row.id}

        />
<div>

  {
      showmodel && <Model formArray={formArray} formName={formName}  />
  }
    
</div>
  </div>
 
  );
};
