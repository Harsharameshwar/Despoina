import React, { useEffect, useState } from "react";
import axios from "axios";
import { FileUploader } from "baseui/file-uploader";
import { Button } from "baseui/button";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { DeleteAlt } from "baseui/icon";

const Consumption = () => {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [load, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [csvFiles, setCSVFiles] = useState([]);
  const path = process.env.REACT_APP_PATH;
  const auth = useAuthUser();

  const fetchCSVFiles = async () => {
    try {
      const res = await axios.get(
        `${path}files/getuserfiles/${auth()?.data?._id}`
      );
      let itemobj = [];
      var j = 0;
      res?.data?.forEach((i) => {
        j++;
        itemobj.push({
          slno: j + "",
          id: j + "",
          name: i.split("/").pop().split("files").pop() + "",
          fname: i.split("/").pop() + "",
        });
      });
      setCSVFiles(itemobj);
    } catch (error) {
      console.error("Error occurred while fetching CSV files:", error);
      // Add your error handling logic here
    }
  };
  useEffect(() => {
    fetchCSVFiles();
  }, []);

  const handleFileDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleFileRemove = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        setUploading(true);

        const response = await axios.post(
          `${path}file/${auth()?.data?._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response) {
          console.log("File uploaded successfully!", response.data);
          window.location.reload(true);
          setUploading(false);
        }

        // Add your success message or additional logic here
      } catch (error) {
        console.error("Error occurred while uploading the file:", error);
        // Add your error handling logic here
      }
    }
  };

  async function handleGenerate() {
    if (file) {
      if (!file.path) {
        console.log("Just file");
        console.log(file);
        try {
          setLoading(true);

          const response = await axios.get(`${path}files/${file?.fname}`);

          if (response) {
            console.log(response);
            navigate("/dashboard");
          }

          // console.log('File uploaded successfully!', response.data);
          // Add your success message or additional logic here
        } catch (error) {
          console.error("Error occurred while uploading the file:", error);
          // Add your error handling logic here
        }
      } else {
        console.log("Whole file");
        console.log(file);
        const formData = new FormData();
        formData.append("file", file);

        try {
          setLoading(true);

          const response = await axios.post(`http://127.0.0.1:5001/generate-report`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          if (response) {
            console.log(response.data);
            navigate("/dashboard");
          }

          // console.log('File uploaded successfully!', response.data);
          // Add your success message or additional logic here
        } catch (error) {
          console.error("Error occurred while uploading the file:", error);
          // Add your error handling logic here
        }
      }
    }
  }

  const handleDeleteFile = async (filename) => {
    try {
      const response = await axios.delete(`${path}files/del/${filename}/${auth().data._id}`);
      if (response) {
        console.log("File deleted successfully!", response.data);
        // Refresh the CSV file list
        fetchCSVFiles();
      }
    } catch (error) {
      console.error("Error occurred while deleting the file:", error);
      // Add your error handling logic here
    }
  };

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
          {file ? file.name : "Select File"}
        </FileUploader>
      </div>
      <h2 className="text-2xl font-bold mb-4">Uploaded File:</h2>
      {file ? <p>{file.name}</p> : <p>No file uploaded yet.</p>}
      <div className="mt-8 mb-4">
        <Button onClick={handleUpload} disabled={!file || uploading}>
          Upload File
        </Button>
      </div>

      <div className="mt-8 mb-4">
        <Button onClick={handleGenerate} isLoading={load} disabled={!file}>
          Generate Report
        </Button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Uploaded CSV Files:</h2>
        {csvFiles.length > 0 ? (
          <ul className="list-disc pl-6">
            {csvFiles.map((file) => (
              <li
                className="cursor-pointer relative"
                onClick={(e) => {
                  setUploading(true);
                  setFile(file);
                }}
                key={file.id}
              >
                {file.name}
                <span
                  className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                  style={{ marginRight: "-12px" }}
                >
                  <Button
                    kind="minimal"
                    size="compact"
                    shape="round"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteFile(file.fname);
                    }}
                  >
                    <DeleteAlt size={16} />
                  </Button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No CSV files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default Consumption;
