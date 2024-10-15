import "./candidates-grid.scss"
import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { GridColDef } from "@mui/x-data-grid"
import { ICandidate } from "../../types/global.typing"
import moment from "moment"
import { base_url } from "../../constants/url.constants"
import { PictureAsPdf } from "@mui/icons-material"

const columns: GridColDef[] = [
    {field:"id",headerName:"ID", width:100},
    {field:"firstName", headerName:"First Name", width:200},
    {field:"lastName", headerName:"Last Name", width:150},
    {field:"email", headerName:"Email", width:150},
    {field:"phone", headerName:"Phone", width:150},
    {field:"coverLetter", headerName:"Cover Letter", width:150},
    {field:"jobTitle", headerName:"Job Title", width:150},
    {field:"resumeUrl", headerName:"Download", width:150, 
        renderCell: (params)=> <a href={`‍‍‍‍‍${base_url}/Candidate/download/${params.row.resumeUrl}`} download><PictureAsPdf /></a>
    },
    {field:"createdAt", headerName:"Creation Time", width:200, 
        renderCell: (params)=> moment(params.row.createdAt).format("YYYY-MM-DD")
    }
];

interface ICandidateGridProps {
    data: ICandidate[];
 }

const CandidatesGrid = ({data}:ICandidateGridProps) => {
    return (
        <Box sx={{ width: "100%", height: 450 }} className="candidates-grid">
           <DataGrid rows={data} columns={columns} getRowId={(row) => row.id} rowHeight={50} />
        </Box>
     );
}

export default CandidatesGrid