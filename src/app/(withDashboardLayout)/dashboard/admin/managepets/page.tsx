'use client';

import { Box, Button, CircularProgress, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { toast } from 'sonner';
import {
  useDeleteSinglePetMutation,
  useGetAllPetsQuery,
} from '@/redux/api/petsApi';

const ManagePets = () => {
  const query: Record<string, any> = {};

  query['role'] = 'USER';

  // const debaounceData = useDebounced({
  //   searchQuery: searchTerm,
  //   delay: 600,
  // });

  // if (!!debaounceData) {
  //   query['searchTerm'] = searchTerm;
  // }

  const { data, isLoading } = useGetAllPetsQuery({});

  const [deleteSinglePet] = useDeleteSinglePetMutation();

  let userData;
  if (data) {
    userData = data?.data;
  }
  // console.log(userData);
  //   // console.log(userData);
  //   const meta = data?.users?.meta;

  const handleSubmit = async (id: string) => {
    // console.log(id);
    try {
      const res = await deleteSinglePet(id).unwrap();
      if (res?.id) {
        toast.success('User Deleted Successfully !');
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'petType', headerName: 'Pet Type', flex: 1 },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'healthStatus', headerName: 'HealthStatus', flex: 1 },
    {
      field: 'action',
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box mt={0.7}>
            <IconButton
              onClick={() => handleSubmit(row?.id)}
              aria-label="delete"
            >
              <GridDeleteIcon />
            </IconButton>

            <Link href={`/dashboard/admin/managepets/edit/${row?.id}`}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
            </Link>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box mt={2}>
          <DataGrid rows={userData} columns={columns} />
        </Box>
      ) : (
        //Loading Component
        <CircularProgress
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0px auto',
          }}
          color="secondary"
        />
      )}
    </Box>
  );
};

export default ManagePets;
