import React, { useRef } from "react";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,

} from "@react-pdf/renderer";
import { Button } from "baseui/button";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import img1 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/1.png";
import img2 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/2.png";
import img3 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/3.png";
// Add imports for the rest of the images
import img4 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/4.png";
import img5 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/5.png";
import img6 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/6.png";
import img7 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/7.png";
import img8 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/8.png";
import img9 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/9.png";
import img10 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/10.png";
import img11 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/11.png";
import img12 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/12.png";
import img13 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/13.png";
import img14 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/14.png";
import img15 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/15.png";

import img16 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/16.png";
import img17 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/17.png";
import img18 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/18.png";
import img19 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/19.png";
import img20 from "../../Assets/Images/Revenue/Box office Revenue Prediction/Graphs/20.png";




const images = [
  { path: img1, text: "Image 1" },
  { path: img2, text: "Image 2" },
  { path: img3, text: "Image 3" },
  // Add paths for the rest of the images
  { path: img4, text: "Image 4" },
  { path: img5, text: "Image 5" },
  { path: img6, text: "Image 6" },
  { path: img7, text: "Image 7" },
  { path: img8, text: "Image 8" },
  { path: img9, text: "Image 9" },
  { path: img10, text: "Image 10" },
  { path: img11, text: "Image 11" },
  { path: img12, text: "Image 12" },
  { path: img13, text: "Image 13" },
  { path: img14, text: "Image 14" },
  { path: img15, text: "Image 15" },

  { path: img16, text: "Image 16" },
  { path: img17, text: "Image 17" },
  { path: img18, text: "Image 18" },
  { path: img19, text: "Image 19" },
  { path: img20, text: "Image 20" },

];

const IMAGES_PER_PAGE = 6;

const MachineLearningReport1 = () => {
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  return (
    <Document>
      <Page style={styles.page}>
        {/* <View style={styles.header}>
          <Text style={styles.headerText}>Machine Learning Report</Text>
        </View> */}
        <View style={styles.content}>
          {Array.from(Array(totalPages), (_, index) => {
            const startIndex = index * IMAGES_PER_PAGE;
            const endIndex = startIndex + IMAGES_PER_PAGE;
            const pageImages = images.slice(startIndex, endIndex);

            return (
              <View key={`page-${index + 1}`} style={styles.pageContent}>
                <View style={styles.row}>
                  {pageImages.map((image, imageIndex) => (
                    <View
                      key={`image-${startIndex + imageIndex + 1}`}
                      style={styles.imageContainer}
                    >
                      <img src={image.path} style={styles.image} alt="" />
                      <Text style={styles.imageText}>{image.text}</Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

const MachineLearningReport = () => {
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Machine Learning Report</Text>
        </View>
        <View style={styles.content}>
          {Array.from(Array(totalPages), (_, index) => {
            const startIndex = index * IMAGES_PER_PAGE;
            const endIndex = startIndex + IMAGES_PER_PAGE;
            const pageImages = images.slice(startIndex, endIndex);

            return (
              <View key={`page-${index + 1}`} style={styles.pageContent}>
                <View style={styles.row}>
                  {pageImages.map((image, imageIndex) => (
                    <View
                      key={`image-${startIndex + imageIndex + 1}`}
                      style={styles.imageContainer}
                    >
                      <Image src={image.path} style={styles.image} />
                      <Text style={styles.imageText}>{image.text}</Text>
                    </View>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  // ...other styles

  header: {
    width: "100%",
    padding: "1cm",
    backgroundColor: "#f0f0f0",
    marginBottom: "1cm",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pageContent: {
    width: "100%",
    marginBottom: "1cm",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "30%",
    height: 200,
    marginBottom: "1cm",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    objectFit: "contain",
  },
  imageText: {
    fontSize: 10,
    marginTop: 4,
    textAlign: "center",
  },
});

const Boxoffice = () => {
  const pdfRef = useRef(null);

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Machine Learning Report</h1>
      <div ref={pdfRef}>
      </div>
      <div className="mt-8 mb-4">
        {/* <PDFViewer> */}
        <MachineLearningReport1 />
        {/* </PDFViewer> */}
        <div ref={pdfRef} style={{ marginBottom: "1%" }}>
          <BlobProvider document={<MachineLearningReport />}>
            {({ blob, url, loading, error }) => {
              if (loading) {
                return "Generating PDF...";
              }
              if (error) {
                return `Error generating PDF: ${error}`;
              }
              return (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View PDF
                </a>
              );
            }}
          </BlobProvider>
        </div>
        <PDFDownloadLink
          document={<MachineLearningReport />}
          fileName="machine_learning_report.pdf"
        >
          <Button>Download PDF</Button>
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default Boxoffice;
