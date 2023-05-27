import React, { useRef } from "react";
import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import Plot from "react-plotly.js";
import html2pdf from "html2pdf.js";
import { Button } from "baseui/button";


const data = [
    { x: [1, 2, 3, 4], y: [10, 15, 13, 17], type: "scatter" },
    { x: [1, 2, 3, 4], y: [5, 8, 11, 9], type: "scatter" },
    { x: [1, 2, 3, 4], y: [12, 9, 14, 10], type: "scatter" },
    { x: [1, 2, 3, 4], y: [7, 11, 6, 13], type: "scatter" },
  ];
  
  const MachineLearningReport = () => {
    return (
      <Document>
        <Page style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Machine Learning Report&nbsp;</Text><br/>
          </View>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Graph 1: Scatter Plot</Text>
            <View style={styles.graphContainer}>
              <Plot
                data={[data[0]]}
                layout={{ width: 500, height: 300, title: "Scatter Plot" }}
                config={{ responsive: true }}
              />
            </View>
  
            <Text style={styles.sectionTitle}>Graph 2: Line Plot</Text>
            <View style={styles.graphContainer}>
              <Plot
                data={[data[1]]}
                layout={{ width: 500, height: 300, title: "Line Plot" }}
                config={{ responsive: true }}
              />
            </View>
  
            <Text style={styles.sectionTitle}>Graph 3: Bar Chart</Text>
            <View style={styles.graphContainer}>
              <Plot
                data={[data[2]]}
                layout={{ width: 500, height: 300, title: "Bar Chart" }}
                config={{ responsive: true }}
              />
            </View>
  
            <Text style={styles.sectionTitle}>Graph 4: Area Chart</Text>
            <View style={styles.graphContainer}>
              <Plot
                data={[data[3]]}
                layout={{ width: 500, height: 300, title: "Area Chart" }}
                config={{ responsive: true }}
              />
            </View>
          </View>
        </Page>
      </Document>
    );
  };
  
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      fontSize: 12,
      padding: "1cm",
    },
    header: {
      marginBottom: "2cm",
      borderBottom: "1px solid #ccc",
    },
    headerText: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "1cm",
    },
    content: {
      marginTop: "2cm",
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: "0.5cm",
    },
    graphContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 320,
      marginBottom: "1cm",
    },
  });
  
  

const ReportPage = () => {
  const pdfRef = useRef(null);

  const generatePDF = () => {
    const element = pdfRef.current;

    html2pdf()
      .set({ filename: "machine_learning_report.pdf" })
      .from(element)
      .toPdf()
      .output("blob")
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.click();
      });
  };

  const downloadPDF = () => {
    const element = pdfRef.current;

    html2pdf()
      .set({ filename: "machine_learning_report.pdf" })
      .from(element)
      .save();
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Machine Learning Report</h1>
      <div ref={pdfRef}>
        <MachineLearningReport />
      </div>
      <div className="mt-8 mb-4 ">
        <Button
        //   className="mr-4"
        className="text-white font-bold py-2 px-4 rounded"
        style={{marginRight:"2%"}}
          onClick={generatePDF}
        >
          View PDF
        </Button>
        <Button
          className="text-white font-bold py-2 px-4 rounded"
          onClick={downloadPDF}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
};

export default ReportPage;
