import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import * as React from "react";
import "./ImageDialog.scss";

export default function ImageDialog({ onClose, open, selectedImage }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="sm">
      <img
        className="dialogImage"
        src={selectedImage.src}
        alt={selectedImage.alt}
      />
      {selectedImage.subtitle && (
        <p className="imageCaption">{selectedImage.subtitle}</p>
      )}
    </Dialog>
  );
}

// ImageDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedImage: {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//   },
// };
