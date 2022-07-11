import AddIcon from "@mui/icons-material/Add";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Backdrop, Box, Button, Fade, IconButton, Modal, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";

import style from "../assets/styles/modalWrapper.module.scss";

const Home: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Box display="flex" justifyItems="flex-end" justifyContent="flex-end">
        <Button onClick={() => setOpen(true)} variant="outlined" startIcon={<AddIcon />}>
          Create new habit
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={style.modalWrapper}>
            <Typography variant="h6" component="p" sx={{ marginBottom: "2%" }}>
              New habit
            </Typography>
            <TextField label="Title" variant="outlined" sx={{ width: "100%", marginBottom: "2%" }} />
            <Box display="flex" justifyContent="space-between" sx={{ marginBottom: "4%" }}>
              <div>
                <Typography variant="h6" component="p">
                  Frequency
                </Typography>
                <Typography style={{ color: "rgb(165 160 160)" }} variant="subtitle2" component="p">
                  Times a week
                </Typography>
              </div>
              <Box display="flex" alignItems="center">
                <IconButton size="large">
                  <RemoveCircleIcon />
                </IconButton>
                <Typography variant="h6" component="p">
                  1
                </Typography>
                <IconButton size="large">
                  <AddCircleIcon />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Button onClick={() => setOpen(false)} variant="contained" color="error">
                Cancel
              </Button>
              <Button variant="contained" color="success">
                Create
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Home;
