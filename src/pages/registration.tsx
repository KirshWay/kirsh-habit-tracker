import { Box, Button, Card, TextField } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../assets/styles/authForm.module.scss";

const Registration: NextPage = () => {
  const router = useRouter();

  const onRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Card className={styles.authForm} sx={{ padding: "8%" }} variant="outlined">
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={onRegistration}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Box display="flex" justifyContent="space-between">
          <Link href="auth" passHref>
            <Button variant="contained" color="info">
              Auth
            </Button>
          </Link>
          <Button variant="contained" type="submit" color="success">
            Registration
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default Registration;
