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


// src\Assets\Images\Customer/Online Shoppers Intention/Graphs\1.png
import img1 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/1.png";
import img2 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/2.png";
import img3 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/3.png";
// Add imports for the rest of the images
import img4 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/4.png";
import img5 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/5.png";
import img6 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/6.png";
import img7 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/7.png";
import img8 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/8.png";
import img9 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/9.png";
import img10 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/10.png";
import img11 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/11.png";
import img12 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/12.png";
import img13 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/13.png";
import img14 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/14.png";
import img15 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/15.png";

import img16 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/16.png";
import img17 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/17.png";
import img18 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/18.png";
import img19 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/19.png";
import img20 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/20.png";
import img22 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/22.png";
import img23 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/23.png";
import img24 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/24.png";
import img25 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/25.png";
import img26 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/26.png";
import img27 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/27.png";
import img28 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/28.png";
import img29 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/29.png";
import img30 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/30.png";

import img31 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/31.png";
import img32 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/32.png";
import img33 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/33.png";
import img34 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/34.png";
import img35 from "../../Assets/Images/Customer/Online Shoppers Intention/Graphs/35.png";






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
  { path: img22, text: "Image 22" },
  { path: img23, text: "Image 23" },
  { path: img24, text: "Image 24" },
  { path: img25, text: "Image 25" },
  { path: img26, text: "Image 26" },
  { path: img27, text: "Image 27" },
  { path: img28, text: "Image 28" },
  { path: img29, text: "Image 29" },
  { path: img30, text: "Image 30" },  

  { path: img31, text: "Image 31" },  
  { path: img32, text: "Image 32" },  
  { path: img33, text: "Image 33" },  
  { path: img34, text: "Image 34" },  
  { path: img35, text: "Image 35" },  

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

const Online = () => {
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

export default Online;
