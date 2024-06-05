'use client';

import { useGetAllPetsQuery } from '@/redux/api/petsApi';
import { useDebounced } from '@/redux/hooks';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const AllPetsData = () => {
  const petType = ['dog', 'cat', 'cow', 'bird', 'others'];
  const gender = ['MALE', 'FEMALE'];
  const specialNeeds = ['true', 'false'];
  const size = ['small', 'medium', 'large'];
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [petTypeSelect, setPetTypeSelect] = useState<string>('');
  const [sizeSelect, setSizeSelect] = useState<string>('');
  const [genderSelect, setGenderSelect] = useState<string>('');
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);
  let pageCount: number = 0;
  query['page'] = page;
  query['limit'] = limit;

  const debounceTerm = useDebounced({
    searchTerm: searchTerm,
    delay: 600,
  });

  if (!!debounceTerm) {
    query['searchTerm'] = searchTerm;
  }
  if (petTypeSelect) {
    query['petType'] = petTypeSelect;
  }
  if (genderSelect) {
    query['gender'] = genderSelect;
  }

  if (sizeSelect) {
    query['size'] = sizeSelect;
  }

  //   console.log(query, '===');

  const { data, isLoading } = useGetAllPetsQuery({ ...query });
  //   console.log(data?.data);
  //   console.log(data?.meta);

  if (isLoading) {
    <h1 className="text-white">Loading ..</h1>;
  }
  const meta = data?.meta;
  if (meta?.total) {
    pageCount = Math.ceil(meta?.total / limit);
  }
  //pagination
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  //Modal Page

  return (
    <div className=" pt-28 text-black">
      <Box sx={{ margin: '0 auto ', mx: '20px' }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <h1 className="text-3xl font-bold mx-auto text-center ">
              Search And Filter Pets
            </h1>
            <hr className="w-48 mx-auto text-center my-2" />
          </Grid>
          <Grid item md={2} xs={12}>
            <div className="mx-auto">
              <TextField
                onChange={(e) => setPetTypeSelect(e.target.value)}
                fullWidth
                label="Pet Type"
                select
                size="small"
                placeholder="Category"
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
              >
                {petType.map((item) => (
                  <MenuItem
                    sx={{
                      '&.MuiMenuItem-root': {
                        justifyContent: 'flex-start',
                        color: 'black',
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item md={2} xs={12}>
            <div className="mx-auto">
              <TextField
                onChange={(e) => setSizeSelect(e.target.value)}
                fullWidth
                label="Size"
                select
                size="small"
                placeholder="Category"
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
              >
                {size.map((item) => (
                  <MenuItem
                    sx={{
                      '&.MuiMenuItem-root': {
                        justifyContent: 'flex-start',
                        color: 'black',
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item md={2} xs={12}>
            <div className="mx-auto">
              <TextField
                onChange={(e) => setGenderSelect(e.target.value)}
                fullWidth
                label="Gender"
                select
                size="small"
                placeholder="Category"
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
              >
                {gender.map((item) => (
                  <MenuItem
                    sx={{
                      '&.MuiMenuItem-root': {
                        justifyContent: 'flex-start',
                        color: 'black',
                      },
                    }}
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <div className="mx-auto">
              <TextField
                fullWidth={true}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                placeholder="Search ..."
              />
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* <Grid container spacing={2} py={4} > */}
      <Box sx={{ margin: '0 auto ', px: '80px' }}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 py-10 ">
          {isLoading ? (
            <h1 className="text-center mx-auto text-3xl text-white py-48">
              Loading ...
            </h1>
          ) : (
            data?.data?.map((item: any) => (
              <Card key={item.id} sx={{ minWidth: 275 }}>
                <CardContent>
                  <Image
                    className="mx-auto w-[280px] h-[200px]"
                    src={
                      item?.photos ||
                      'https://www.invoicera.com/wp-content/uploads-webpc/uploads/2023/11/default-image.jpg.webp'
                    }
                    alt="pet photos"
                    width={320}
                    height={320}
                  />
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="font-extrabold"> Pets name : </span>
                    {item?.name}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5, mt: 2 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <span className="font-extrabold">Description : </span>
                    {item?.description}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Age : </span>
                    {item?.age}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Breed : </span>
                    {item?.breed}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <span className="font-extrabold">Location : </span>
                    {item?.currentLocation}
                  </Typography>

                  <Link href={`/allpets/edit/${item.id}`}>
                    <Button
                      sx={{
                        border: '1px solid blue',
                        padding: '5px 20px',
                        mx: '3px',
                      }}
                    >
                      View
                    </Button>
                  </Link>
                  <Link href={`/allpets/${item.id}`}>
                    <Button
                      sx={{
                        border: '1px solid blue',
                        padding: '5px 20px',
                        mx: '3px',
                      }}
                    >
                      Adoption Pet
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <Stack spacing={2} className="flex justify-center items-center ">
          <Typography sx={{ font: 'bold', color: 'white' }}>
            Page: {page}
          </Typography>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
      </Box>
      {/* </Grid> */}
    </div>
  );
};

export default AllPetsData;
