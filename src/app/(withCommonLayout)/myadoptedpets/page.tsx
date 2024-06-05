'use client';

import {
  Button,
  Card,
  CardContent,
  Container,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import { toast } from 'sonner';
import { useGetSingleAdoptionQuery } from '@/redux/api/adoptionApi';
import { useGetAllPetsQuery } from '@/redux/api/petsApi';
const MyAdoptPage = () => {
  const { data, isLoading } = useGetSingleAdoptionQuery({});
  const { data: petData, isLoading: petLoading } = useGetAllPetsQuery({});
  if (isLoading) {
    <p>Loading ...</p>;
  }
  console.log(data);

  return (
    <div className="  text-black w-full  py-32">
      <div className="">
        <h1 className="text-3xl font-bold mx-auto text-center ">
          My Adopted Pets
        </h1>
        <hr className="w-48 mx-auto text-center my-6" />
      </div>
      <Container>
        <div>
          {isLoading ? (
            <h1 className="text-center mx-auto text-3xl text-black py-20">
              Loading ...
            </h1>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3   py-12  ">
              {data?.map((item: any) => (
                <div
                  key={item.id}
                  className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
                >
                  <Card
                    key={item.id}
                    sx={{
                      minWidth: 275,
                    }}
                  >
                    <CardContent>
                      <Image
                        className="mx-auto w-[280px] h-[200px]"
                        src={
                          item?.pet?.photos ||
                          'https://www.invoicera.com/wp-content/uploads-webpc/uploads/2023/11/default-image.jpg.webp'
                        }
                        alt="my lost items"
                        width={320}
                        height={320}
                      />
                      <Typography
                        sx={{ mb: 1.5, mt: 1.5 }}
                        color="text.secondary"
                      >
                        <span className="font-extrabold">Pets name : </span>
                        {item?.pet?.name}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5, mt: 1.5 }}
                        color="text.secondary"
                      >
                        <span className="font-extrabold">Date : </span>
                        {item?.date}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <span className="font-extrabold">
                          {' '}
                          AdditionalInfo:{' '}
                        </span>
                        {item?.additionalInfo}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <span className="font-extrabold"> Status: </span>
                        {item?.status}
                      </Typography>
                      <Link href={`/allpets/edit/${item?.pet?.id}`}>
                        <Button sx={{ border: '1px solid blue' }}>
                          View Details
                        </Button>
                      </Link>
                      {/* <div>
                        <Link href={`/mylostitems/edit/${item.id}`}>
                          <Button endIcon={<EditIcon />} sx={{ mx: 2 }} />
                        </Link>
    
                        <Button
                          onClick={() => handleDelete(item?.id)}
                          endIcon={<DeleteForeverIcon />}
                          sx={{ mx: 2 }}
                        />
                      </div> */}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <Stack spacing={2} className="flex justify-center items-center ">
          <Typography sx={{ font: 'bold', color: 'white' }}>
            Page: {page}
          </Typography>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack> */}
      </Container>
    </div>
  );
};

export default MyAdoptPage;
