import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";


const Drpzone = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      const fileurl = URL.createObjectURL(file);

      setSelectedFileUrl(fileurl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />

      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Imagem do local
        </p>
      )}
    </div>
  );
};

export default Drpzone;