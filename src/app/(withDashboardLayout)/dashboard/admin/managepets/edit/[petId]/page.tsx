'use client';

import ReuseableForm from '@/components/Forms/ReuseableForm';
import ReuseableInput from '@/components/Forms/ReuseableInput';
import ReuseableSelect from '@/components/Forms/ReuseableSelect';
import {
  useGetAllPetsQuery,
  useGetSinglePetQuery,
  useUpdateSinglePetMutation,
} from '@/redux/api/petsApi';
// import { useUpdateUserInfoMutation } from '@/redux/api/userApi';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const size = ['small', 'medium', 'large'];
const healthStatus = ['HEALTHY', 'ILL', 'RECOVERING'];
const gender = ['MALE', 'FEMALE'];
const petTypes = ['dog', 'cat', 'cow', 'bird', 'others'];

const UserUpdatePage = ({ params }: { params: { petId: string } }) => {
  const id = params?.petId;
  const router = useRouter();
  const { data, isLoading } = useGetSinglePetQuery(id);
  const [updateSinglePet] = useUpdateSinglePetMutation();
  let defaultValues = {};

  console.log(data);
  if (!isLoading) {
    defaultValues = data;
  }
  // console.log(defaultValues);
  // console.log(data?.data);

  const updateHandleSubmit = async (values: FieldValues) => {
    values.age = Number(values.age);
    // values.photos = [values.photos];

    console.log(values);

    try {
      const res = await updateSinglePet({ data: values, id: id }).unwrap();
      if (res?.id) {
        toast.success('Updated Successfully !');
        router.push('/dashboard/admin/managepets');
      }
      console.log('Response', res);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className=" h-screen   py-6">
          <h1 className="text-3xl font-bold text-black px-20"> Update Pets</h1>

          <div className="px-20">
            {/* For Error Message show in Server  */}
            {/* <Box>
          {error && (
            <Box>
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
                {error}
              </Typography>
            </Box>
          )}
        </Box> */}

            <Box>
              <ReuseableForm
                onSubmit={updateHandleSubmit}
                // resolver={zodResolver(lostItemValidationSchema)}
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
      )}
    </>
  );
};

export default UserUpdatePage;
