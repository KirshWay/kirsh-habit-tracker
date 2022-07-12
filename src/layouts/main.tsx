import AccountCircle from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Modal,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type LayoutType = {
  children: React.ReactElement;
};

const BUTTONSOPTIONS = [
  {
    text: "Info",
    leftIcon: <InfoIcon />,
    key: "info",
    to: "/info",
  },
  {
    text: "Settings",
    leftIcon: <SettingsIcon />,
    key: "settings",
    to: "/settings",
  },
  {
    text: "Logout",
    leftIcon: <LogoutIcon />,
    key: "logout",
    to: "/auth",
  },
];

const MainLayout: React.FC<LayoutType> = ({ children }) => {
  const router = useRouter();

  const goAnotherPart = (key: string) => {
    switch (key) {
      case "logout":
        router.push("/auth");
        break;
      default:
        const item = BUTTONSOPTIONS.find((el) => el.key === key);
        if (item && "to" in item) router.push(item.to);
        break;
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {router.pathname !== "/auth" && router.pathname !== "/registration" && router.pathname !== "/404" && (
        <Box sx={{ flexGrow: 1, marginBottom: "3%" }}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Box display="flex" justifyContent="center" gap="10px">
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    alignSelf: "center",
                  }}
                />

                {router.pathname !== "/" && (
                  <Link href="/" passHref>
                    <Button>Main</Button>
                  </Link>
                )}
              </Box>

              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={openMenu}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {BUTTONSOPTIONS.map((el) => (
                    <MenuItem onClick={() => goAnotherPart(el.key)} key={el.key}>
                      <ListItemIcon>{el.leftIcon}</ListItemIcon>
                      <Typography variant="body2" color="text.secondary">
                        {el.text}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      )}

      {children}
    </>
  );
};

export default MainLayout;
