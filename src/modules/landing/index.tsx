'use client';
import { Box } from '@mui/material';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import BillingForm from './BillingForm';
import Print from './Print';
const Landing = () => {
  const [printData, setPrintData] = useState();
  const printTableRef = useRef();

  const reactPrint = useReactToPrint({
    content: () => printTableRef.current as any,
    documentTitle: 'Bill',
    removeAfterPrint: true,
  });
  const handlePrintClick = (data: any) => {
    setPrintData(data);
    setTimeout(() => {
      reactPrint();
    }, 300);
  };

  return (
    <Box
      sx={{
        overflow: 'auto',
      }}
    >
      <BillingForm handlePrintClick={handlePrintClick} />

      <Print printTableRef={printTableRef} data={printData} />
    </Box>
  );
};

export default Landing;
