import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = () => {
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]); // Assuming single file upload
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>upload file <i class="fa-solid fa-upload"></i></p>
      {file && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default FileUploader;
