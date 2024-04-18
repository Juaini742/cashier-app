"use client";
import {HistoryType} from "../constants";
import {useEffect, useState} from "react";
import {getHistoryById} from "../utils/api";
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 20,
  },
  section: {
    marginTop: 30,
    marginBottom: 0,
    flex: "1",
  },
  header: {
    marginBottom: 20,
    textAlign: "right",
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  titleDesc: {
    fontSize: 8,
  },
  hero: {
    marginTop: 20,
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "auto",
  },
  heroBody: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  table: {
    display: "flex",
    width: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderTop: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  tableCol: {
    width: "25%",
    padding: 5,
  },
  tableHeader: {
    fontSize: 13,
    padding: "6px 0",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  },
  tableContent: {
    fontSize: 12,
    padding: "5px 0",
  },
  footer: {
    marginTop: 20,
  },
  footerDesc: {
    fontSize: 10,
    marginBottom: 10,
  },
  footerDesc2: {
    fontSize: 10,
  },
});

function Invoice({id}: {id?: string}) {
  const [currentData, setCurrentData] = useState<HistoryType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const shipping: HistoryType | null = await getHistoryById(id);
      if (shipping) {
        setCurrentData(shipping);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.title}>Invoice</Text>
          <Text style={styles.titleDesc}>INV-2024001</Text>
        </View>
        <View style={styles.hero}>
          <View style={styles.heroBody}>
            <Text>BILLED TO</Text>
            <Text>PAY TO</Text>
            <Text>DATE</Text>
            <Text>Total Pice</Text>
            <Text>Cashback</Text>
          </View>
          <View style={styles.heroBody}>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
          </View>
          <View style={styles.heroBody}>
            <Text>Coffee Sejahtera</Text>
            <Text>Client</Text>
            <Text>
              {currentData?.createdAt
                ? new Date(currentData.createdAt).toLocaleDateString("en-GP")
                : ""}
            </Text>
            <Text>IDR. {currentData?.totalBillAmount}</Text>
            <Text>IDR. {currentData?.chackback}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCol, styles.tableHeader]}>Menu</Text>
              <Text style={[styles.tableCol, styles.tableHeader]}>Price</Text>
              <Text style={[styles.tableCol, styles.tableHeader]}>
                Quantity
              </Text>
              <Text style={[styles.tableCol, styles.tableHeader]}>
                Subtotal
              </Text>
            </View>
            {currentData?.checkout?.map((item, index: number) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCol, styles.tableContent]}>
                  {item.product.name}
                </Text>
                <Text style={[styles.tableCol, styles.tableContent]}>
                  IDR. {item.product.price.toFixed(3)}
                </Text>
                <Text style={[styles.tableCol, styles.tableContent]}>
                  {item.quantity}
                </Text>
                <Text style={[styles.tableCol, styles.tableContent]}>
                  IDR. {(item.quantity * item.product.price).toFixed(3)}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerDesc}>
            Payment is required within 14 business days of invoice date. Please
            send remittance to juaini742@gmial.com
          </Text>
          <Text style={styles.footerDesc2}>Thank you for your business.</Text>
        </View>
      </Page>
    </Document>
  );
}

export default Invoice;
