import "./jobs-grid.scss"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { GridColDef } from "@mui/x-data-grid"
import { IJob } from "../../types/global.typing"
import moment from "moment"

const columns: GridColDef[] = [
    //{field:"id",headerName:"ID", width:100},
    {field:"title", headerName:"Title", width:200},
    {field:"level", headerName:"Level", width:150},
    {field:"companyName", headerName:"Company Name", width:150},
    {field:"createdAt", headerName:"Creation Time", width:200, 
        renderCell: (params)=> moment(params.row.createdAt).format("YYYY-MM-DD")
    }
];


interface IJobsGridProps {
    data: IJob[];
 }

const JobsGrid = ({data}:IJobsGridProps) => {
    return (
        <Box sx={{ width: "100%", height: 450 }} className="jobs-grid">
           <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} rowHeight={50} />
        </Box>
     );
}

export default JobsGrid