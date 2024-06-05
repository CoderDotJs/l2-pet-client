'use client';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useGetSinglePetQuery } from '@/redux/api/petsApi';
import Image from 'next/image';
import Link from 'next/link';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ViewPetsDetails = ({ params }: any) => {
  const id = params?.petId;

  const { data, isLoading } = useGetSinglePetQuery(id);
  console.log(data);
  return (
    <div className="mt-28">
      <Container>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
        <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] max-w-[900px] mx-auto mt-48">
          <DialogTitle
            sx={{ my: 3, p: 2, textAlign: 'center' }}
            id="customized-dialog-title"
          >
            Pet Details Page
          </DialogTitle>
          {isLoading ? (
            <p className="text-center text-xl">Loading ...</p>
          ) : (
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Image
                    className="mx-auto w-[280px] h-[200px]"
                    src={
                      'https://www.invoicera.com/wp-content/uploads-webpc/uploads/2023/11/default-image.jpg.webp'
                    }
                    alt="pet photos"
                    width={320}
                    height={320}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography gutterBottom>{data?.name}</Typography>
                  <Typography gutterBottom>{data?.description}</Typography>
                  <Typography gutterBottom>{data?.age}</Typography>
                  <Typography gutterBottom>{data?.petType}</Typography>
                  <Typography gutterBottom>{data?.breed}</Typography>
                  <Typography gutterBottom>{data?.gender}</Typography>
                  <Typography gutterBottom>{data?.healthStatus}</Typography>
                  <Typography gutterBottom>{data?.currentLocation}</Typography>
                  <Typography gutterBottom>{data?.size}</Typography>
                  <Typography gutterBottom>{data?.specialNeeds}</Typography>
                </Grid>
              </Grid>
            </div>
          )}
          <DialogActions>
            <Link href={`/allpets/${data?.id}`}>
              <Button sx={{ border: '1px solid blue' }} autoFocus>
                Adoption Pet
              </Button>
            </Link>
          </DialogActions>
        </div>
      </Container>
    </div>
  );
};

export default ViewPetsDetails;
