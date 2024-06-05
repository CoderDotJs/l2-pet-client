/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  inputLabelClasses,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import logo from "@/assets/logo3.png";
import ReuseableForm from "@/components/Forms/ReuseableForm";
import { zodResolver } from "@hookform/resolvers/zod";
import ReuseableInput from "@/components/Forms/ReuseableInput";
import Link from "next/link";
import { userLogin } from "@/services/actions/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/auth.services";
const validationSchema = z.object({
  email: z
    .string()
    .email({ message: "Please Enter Your Valida Email Address"! }),

  password: z.string().min(6, " Must be at least 6 characters "),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const hanldeLoginSubmit = async (data: FieldValues) => {
    console.log(data);
    try {
      const res = await userLogin(data);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        // router.push("/");
      } else {
        setError(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-full w-screen">
      <Container>
        <Stack
          sx={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              boxShadow:
                "0px 3px 1px -2px black,0px 2px 2px 0px rgba(62, 52, 25, 0.9),0px 1px 5px 0px rgba(74, 54, 49, 0.448)",
              borderRadius: 10,
              p: 4,
              textAlign: "center",
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Image
                  alt="asdfas"
                  src="https://i.postimg.cc/Bv63K3HP/pngtree-pet-shop-clinic-home-care-logo-design-modern-animal-pet-logo-png-image-1934454-removebg-prev.pngz"
                  className="h-28 w-28"
                  height={112}
                  width={112}
                />
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  color={"black"}
                  component="h1"
                  fontWeight={600}
                >
                  Login
                </Typography>
              </Box>
            </Stack>
            {/* For Error Message show in Server  */}
            <Box>
              {error && (
                <Box>
                  <Typography sx={{ color: "red", textAlign: "center" }}>
                    {error}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box>
              <ReuseableForm
                onSubmit={hanldeLoginSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  email: "",
                  password: "",
                }}
              >
                <Grid container spacing={2} my={1}>
                  <Grid item xs={12}>
                    <ReuseableInput
                      name="email"
                      fullWidth={true}
                      label="Email"
                      type="email"
                      sx={{ color: "white" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ReuseableInput
                      name="password"
                      fullWidth={true}
                      label="Password"
                      type="password"
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Typography
                  sx={{
                    marginBottom: "10px",
                  }}
                  textAlign="end"
                  component="p"
                  fontWeight={300}
                >
                  <Link href="/">
                    <span className=""> Forget Password ?</span>
                  </Link>
                </Typography>
                <Button
                  sx={{
                    margin: "10px 0px",
                  }}
                  type="submit"
                  fullWidth={true}
                  variant="contained"
                >
                  LogIn
                </Button>
                <Typography component="h6" color={"black"} fontWeight={300}>
                  Don&apos;t have an account ?
                  <Link className="text-blue-600" href="/register">
                    <span> Create Account</span>
                  </Link>
                </Typography>
              </ReuseableForm>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;
