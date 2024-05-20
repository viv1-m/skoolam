import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    margin: 16,
    marginTop: 32,
    borderRadius: 16,
    maxHeight: 450,
    transition: "0.3s", // Added transition for smooth hover effect
    boxShadow:
      "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)", // Initial box shadow
    "&:hover": {
      transform: "scale(1.03)", // Slightly scale the card on hover
      boxShadow:
        "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)", // Box shadow on hover
    },
  },
  media: {
    height: 250,
  },
  donateButton: {
    backgroundColor: "#ffcc00",
    color: "black",
    "&:hover": {
      backgroundColor: "#ffb300",
    },
  },
});

interface DonationCardProps {
  imagePath: string;
  title: string;
  description: string;
  amount: number;
}

const DonationCard: React.FC<DonationCardProps> = ({
  imagePath,
  title,
  description,
  amount,
}) => {
  const classes = useStyles();

  return (
    <Box boxShadow={3} className={classes.root}>
      <Link href={`/payment?amount=${amount}`}>
        <Card style={{ height: "100%" }}>
          <CardMedia
            className={classes.media}
            image={imagePath}
            title={title}
          />
          <CardContent style={{ padding: 16 }}>
            <div
              style={{
                fontSize: 32,
                fontWeight: "bolder",
                color: "#680118",
                lineHeight: 0.9,
              }}
            >
              {title}
            </div>
            <Typography
              variant="body2"
              color="textPrimary"
              component="p"
              style={{ fontWeight: "bold", paddingTop: 16 }}
            >
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default DonationCard;
