import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

import styles from "./NotFound.module.scss";

const NotFound: NextPage = () => (
  <div className={styles.notFound}>
    <Typography component="span" fontSize="5rem">
      🤔
    </Typography>

    <Typography variant="h2" component="h1">
      Not Found
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      The page dont found, go back to home page
    </Typography>

    <Link href="/" passHref>
      <Button variant="outlined" size="medium">
        Go back home page
      </Button>
    </Link>
  </div>
);

export default NotFound;
