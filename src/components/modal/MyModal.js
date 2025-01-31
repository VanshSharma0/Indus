import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  IconButton,
  Input,
  Typography,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./myModal.css";
import Lottie from "lottie-react";
import animationData from "../../Assets/lottie/thankyou.json";

const phoneRegex = /^\d{7,10}$/;

const MyModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box className="modal-container">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" component="h2" className="modal-title">
            Connect to mother nature with Indus Valley
          </Typography>
        </Box>
        <iframe
          id="IVM Landing Page"
          src="https://account.solidperformers.com/capture_form_data/MTI1OA=="
          border="0"
          style={{
            width: "100%",
            height: "80%",
          }}
        ></iframe>
      </Box>
    </Modal>
  );
};

export default MyModal;
