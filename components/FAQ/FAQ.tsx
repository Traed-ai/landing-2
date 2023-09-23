import React from "react";
import styles from "./faq.module.css";
import Container from "../Container/Container";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQ() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>Frequently Asked Questions</div>
          <div className={styles.caption}>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </div>
          <Accordion className={styles.accordionWrapper} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">
                How traed helps with invoice for selling goods or services
                overseas?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordionWrapper} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">
                How you can convert your invoices into cash?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ marginLeft: "16px" }}>
              <ul>
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload your invoices</li>
                <li>
                  Get your cash in 48 hours once your Traed contract and
                  Buyer&apos;s notice are signed
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles.accordionWrapper} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">
                Do you provide ongoing support?
              </Typography>
            </AccordionSummary>
            <AccordionDetails style={{ marginLeft: "16px" }}>
              <ul>
                <li>Register with Traed.ai</li>
                <li>Introduce your company</li>
                <li>Add your buyer and get limits</li>
                <li>Upload your invoices</li>
                <li>
                  Get your cash in 48 hours once your Traed contract and
                  Buyer&apos;s notice are signed
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default FAQ;
