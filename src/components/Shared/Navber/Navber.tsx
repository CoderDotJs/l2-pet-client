"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo3.png";
import AuthButton from "@/components/UI/AuthButton/AuthButton";
import Link from "next/link";
import { getUserInfo } from "@/services/auth.services";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const drawerWidth = 240;

const Navber = ({ children }: { children: React.ReactNode }) => {
  const userInfo = getUserInfo();

  // console.log(userInfo?.role);

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link href="/">
          <Image
            className="mx-auto"
            src="https://i.postimg.cc/Bv63K3HP/pngtree-pet-shop-clinic-home-care-logo-design-modern-animal-pet-logo-png-image-1934454-removebg-prev.png"
            alt="logo"
            height={40}
            width={40}
          />
        </Link>
      </Typography>

      <Divider />
      <List>
        <Link href={""} className="mx-8 block py-4">
          Home
        </Link>
        {userInfo.role === "admin" && (
          <Link href={"/dashboard/admin"} className="mx-8 block py-4">
            Dashboard
          </Link>
        )}
        <Link href={"/#about"} className="mx-8 block py-4">
          About Us
        </Link>
        {/* <TextField
          fullWidth={true}
          // onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          placeholder="Search ..."
        /> */}

        <AuthButton />
      </List>
    </Box>
  );

  return (
    // <AppBar position="sticky" sx={{ bgcolor: "white", color: "black" }}>
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <img
    //         src="https://i.postimg.cc/Bv63K3HP/pngtree-pet-shop-clinic-home-care-logo-design-modern-animal-pet-logo-png-image-1934454-removebg-prev.pngz"
    //         className="h-14 w-14"
    //       />
    //       {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "none", md: "flex" },
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    //         PET HUSTLERS
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit"
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: "bottom",
    //             horizontal: "left",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "left",
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: "block", md: "none" },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         sx={{
    //           mr: 2,
    //           display: { xs: "flex", md: "none" },
    //           flexGrow: 1,
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: "white", display: "block" }}
    //           >
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: "45px" }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>

    <>
      <Box sx={{}}>
        <CssBaseline />
        <AppBar component="nav" sx={{ backgroundColor: "#5c5e62" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/">
                <Image
                  src="https://i.postimg.cc/Bv63K3HP/pngtree-pet-shop-clinic-home-care-logo-design-modern-animal-pet-logo-png-image-1934454-removebg-prev.png"
                  alt="logo"
                  height={60}
                  width={60}
                />
              </Link>
            </Typography>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: { sm: "center", xs: "center" },
                justifyContent: { sm: "center", xs: "center" },
              }}
            >
              <Link href={"/"} className="mx-8 ">
                Home
              </Link>
              <Link href={"/allpets"} className="mx-8">
                Pets
              </Link>
              <Link href={"/#about"} className="mx-8">
                About Us
              </Link>
              {userInfo.role === "admin" && (
                <Link href={"/dashboard/admin"} className="mx-8 block py-4">
                  Dashboard
                </Link>
              )}

              {/* <Link href={'/viewlostitems'} className="mx-8">
                Lost Items
              </Link> */}
              {/* <Link href={''} className="mx-4 text-white">
                <TextField
                  fullWidth={true}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  size="small"
                  placeholder="Search ..."
                />
              </Link> */}
              <AuthButton />
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main">
          {/* <Toolbar /> */}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Navber;
