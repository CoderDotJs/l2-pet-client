'use client';
import ReuseableDatePicker from '@/components/Forms/ReuseableDatePicker';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import { useCreateAdoptionMutation } from '@/redux/api/authApi';
import { dateFormater } from '@/utils/dateFormater';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const AddAdoption = ({ params }: any) => {
  const petId = params?.adoption;
  const router = useRouter();
  const [error, setError] = useState('');

  const [createAdoption] = useCreateAdoptionMutation();
  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    values.date = dateFormater(values.date);
    values.petId = petId;
    values.status = 'PENDING';
    values.additionalInfo = 'Waiting for approval.';

    console.log(values);

    try {
      const res = await createAdoption(values).unwrap();
      if (res?.id) {
        toast.success('Adoption Created Successfully !');
        router.push('/myadoptedpets');
      }
      console.log('Response', res);
    } catch (error: any) {
      console.log(error);
    }
  };

  // petId
  const defaultValues = {
    date: '',
    status: '',
    additionalInfo: '',
  };

  return (
    <div className=" h-screen mt-28  py-6">
      <div className="px-20">
        {/* For Error Message show in Server  */}
        <Box>
          {error && (
            <Box>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
                {error}
              </Typography>
            </Box>
          )}
        </Box>

        <div className="mx-auto max-w-[600px]">
          <Container>
            <h1 className="text-3xl font-bold text-black px-20">
              Pet Adoption Request{' '}
            </h1>

            <ReuseableForm
              onSubmit={registerHandleSubmit}
              // resolver={zodResolver(lostItemValidationSchema)}
              // defaultValues={defaultValues}
            >
              <Grid container spacing={2} my={1}>
                <Grid item md={12} xs={12}>
                  <ReuseableDatePicker
                    name="date"
                    fullWidth={true}
                    label="Date"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Button
                sx={{
                  margin: '10px 0px',
                  border: '1px solid blue',
                  padding: '5px 20px',
                }}
                type="submit"
              >
                Submit
              </Button>
            </ReuseableForm>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default AddAdoption;
