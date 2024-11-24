'use client';
import { Box, Button } from '@mui/material';
import { toPng } from 'html-to-image';
import { useRef } from 'react';

const GenerateVoterSlip = ({ voter }: { voter: any }) => {
  const imageRef = useRef(null);

  const downloadImage = () => {
    if (imageRef.current === null) {
      return;
    }

    toPng(imageRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'voter-info.png'; // Set the name of the file
        link.click();
      })
      .catch((err) => {
        console.error('Failed to generate image', err);
      });
  };

  return (
    <Box>
      <Button onClick={downloadImage}>Download</Button>
      <Box
        ref={imageRef}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          Name <br />
          Voter Id Card <br />
          Age <br />
        </Box>
        <Box>
          {voter?.full_name_marathi} <br />
          {voter?.card_number}
          <br />
          {voter?.age}
          <br />
        </Box>
      </Box>
    </Box>
  );
};

export default GenerateVoterSlip;
