'use client';
import AutoFileUploader from '@/components/Forms/AutoFileUploader';
import ReuseableDatePicker from '@/components/Forms/ReuseableDatePicker';
// import ReuseableDatePicker from '@/components/Forms/ReuseableDatePicker';
import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import { useAddPetMutation } from '@/redux/api/petsApi';
// import { useCreateLostItemMutation } from '@/redux/api/lostApi';
import { dateFormater } from '@/utils/dateFormater';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const size = ['small', 'medium', 'large'];
const healthStatus = ['HEALTHY', 'ILL', 'RECOVERING'];
const gender = ['MALE', 'FEMALE'];
const petTypes = ['dog', 'cat', 'cow', 'bird', 'others'];

//Zod Validation

const lostItemValidationSchema = z.object({
  name: z.string().min(1, 'Name Required !'),
  breed: z.string().min(1, 'breed Required !'),
  petType: z.string().min(1, 'petType Required !'),
  age: z.string().min(1, 'Age Required !'),
  size: z.string().min(1, 'Size Required !'),
  gender: z.string().min(1, 'gender Required !'),
  //   specialNeeds: z.string().min(1, 'specialNeeds Name Required !'),
  healthStatus: z.string().min(1, 'healthStatus Required !'),
  currentLocation: z.string().min(1, 'currentLocation Required !'),
  description: z.string().min(1, 'Description Required !'),
  photos: z.string().min(1, 'photos URL Required !'),
  photos1: z.string().optional(),
  photos2: z.string().optional(),
});
// .min(1, 'Image URL Required !')
const AddPets = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [addPet] = useAddPetMutation();
  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    let photosData = [values.photos];
    values.age = Number(values.age);
    if (values.photos1) {
      photosData.push(values.photos1);
    }
    if (values.photos2) {
      photosData.push(values.photos2);
    }

    delete values.photos1;
    delete values.photos2;
    
    values.photos = photosData;
    console.log(values);

    try {
      const res = await addPet(values).unwrap();
      if (res?.id) {
        toast.success('Pets Created Successfully !');
        router.push('/dashboard/admin/managepets');
      }
      // console.log('Response', res);
    } catch (error: any) {
      console.log(error);
    }
  };

  const defaultValues = {
    name: '',
    petType: '',
    age: 0,
    size: '',
    breed: '',
    gender: '',
    specialNeeds: '',
    healthStatus: '',
    currentLocation: '',
    description: '',
    photos: '',
  };

  return (
    <div className=" h-screen   py-6">
      <h1 className="text-3xl font-bold text-black px-20">Add New Pets</h1>

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

        <Box>
          <ReuseableForm
            onSubmit={registerHandleSubmit}
            resolver={zodResolver(lostItemValidationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="name"
                  fullWidth={true}
                  label="Name"
                  type="text"
                  size="small"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <ReuseableSelect
                  name="petType"
                  fullWidth={true}
                  label="Pet Type"
                  items={petTypes}
                  size="small"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <ReuseableSelect
                  name="size"
                  fullWidth={true}
                  label="Size"
                  items={size}
                  size="small"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <ReuseableSelect
                  name="gender"
                  fullWidth={true}
                  label="Gender"
                  items={gender}
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableSelect
                  name="healthStatus"
                  fullWidth={true}
                  label="Health Status"
                  items={healthStatus}
                  size="small"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="age"
                  fullWidth={true}
                  label="Age"
                  type="number"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="description"
                  fullWidth={true}
                  label="Description"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="breed"
                  fullWidth={true}
                  label="Breed"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="currentLocation"
                  fullWidth={true}
                  label="Current Location"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="photos"
                  fullWidth={true}
                  label="Photos URL"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="photos1"
                  fullWidth={true}
                  label="Photos URL 1"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="photos2"
                  fullWidth={true}
                  label="Photos URL 2"
                  type="text"
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
        </Box>
      </div>
    </div>
  );
};

export default AddPets;
