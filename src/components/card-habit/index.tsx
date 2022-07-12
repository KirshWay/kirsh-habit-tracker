import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Card, IconButton, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";

type HabitInfo = {
  title: string;
  color?: "inherit" | "primary" | "secondary" | "error" | "info" | "success" | "warning";
  timesWeek: number;
};

const CardHabit: React.FC<HabitInfo> = ({ title, timesWeek, color }) => {
  const [progress, setProgress] = useState<number>(30);

  return (
    <Card sx={{ padding: "3%" }} variant="outlined">
      <Box display="flex" justifyContent="flex-start" gap={2}>
        <IconButton color={color} size="large">
          <AddCircleIcon fontSize="inherit" />
        </IconButton>
        <Box>
          <Typography variant="h5" component="p">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} fontSize="0.9rem" color="text.secondary">
            {`${timesWeek} of 7 this week`}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress sx={{ borderRadius: "5px" }} color={color} variant="determinate" value={progress} />
      </Box>
    </Card>
  );
};

export default CardHabit;
