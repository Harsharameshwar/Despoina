import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FileUploader } from 'baseui/file-uploader';
import { Button } from 'baseui/button';

const CsvUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [csvFiles, setCSVFiles] = useState([]);

  useEffect(() => {
    fetchCSVFiles();
  }, []);

  const fetchCSVFiles = async () => {
    try {
      const response = await axios.get('/api/csvfiles'); // Replace with the appropriate API endpoint to fetch the CSV files from the database
      setCSVFiles(response.data);
    } catch (error) {
      console.error('Error occurred while fetching CSV files:', error);
      // Add your error handling logic here
    }
  };

  const handleFileDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        setUploading(true);

        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
          console.log(formData)
        console.log('File uploaded successfully!', response.data);
        // Add your success message or additional logic here

      } catch (error) {
        console.error('Error occurred while uploading the file:', error);
        // Add your error handling logic here

      } 
    }
  };

  async function handleGenerate(){
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">CSV File Uploader</h1>
      <div className="mb-8">
        <FileUploader
          accept=".csv"
          multiple={false}
          onDrop={handleFileDrop}
          onCancel={handleFileRemove}
        >
          {file ? file.name : 'Select File'}
        </FileUploader>
      </div>
      <h2 className="text-2xl font-bold mb-4">Uploaded File:</h2>
      {file ? (
        <p>{file.name}</p>
      ) : (
        <p>No file uploaded yet.</p>
      )}
      <div className="mt-8 mb-4">
        <Button onClick={handleUpload} disabled={!file || uploading}>
          Upload File
        </Button>
      </div>

      <div className="mt-8 mb-4">
        <Button onClick={handleGenerate}>
          Generate Report
        </Button>
      </div>

      <div>
      <h2 className="text-2xl font-bold mb-4">Uploaded CSV Files:</h2>
      {csvFiles.length > 0 ? (
        <ul className="list-disc pl-6">
          {csvFiles.map((file) => (
            <li key={file.id}>{file.name}</li>
          ))}
        </ul>
      ) : (
        <p>No CSV files uploaded yet.</p>
      )}
    </div>
  
    </div>
  );
};

export default CsvUploader;
