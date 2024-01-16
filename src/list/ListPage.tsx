import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import Department from "./Department";

interface Post {
    id: number;
    title: string;
    body: string;
  }
  

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "title",
    headerName: "Title",
    width: 400,
    editable: true,
  },
  {
    field: "body",
    headerName: "Description",
    width: 600,
    editable: true,
  },
];



const ListPage = () => {
    const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 10)));
  }, []);

  //   console.log(data);
  

  return (
    <div className="container mx-auto my-10">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Department></Department>
    </div>
  );
};

export default ListPage;
