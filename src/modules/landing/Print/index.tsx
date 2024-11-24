import AppTable from '@/components/AppTable';
import { getFormattedDate } from '@/helpers/dateHelper';
import {
  Box,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { blue, green, lightGreen } from '@mui/material/colors';
import { useMemo } from 'react';

const Print = ({ printTableRef, data }: any) => {
  const total = useMemo(() => {
    return (
      data?.particulars?.reduce(
        (prev: number, curr: any) =>
          Number(prev) + Number(curr?.quantity || 0) * Number(curr?.rate || 0),
        0
      ) || 0
    );
  }, [data?.particulars]);
  return (
    <Box
      sx={{
        display: 'none',
      }}
    >
      <Box
        ref={printTableRef}
        sx={{
          display: 'flex',
          gap: 3,
          p: 10,
          pl: 15,
          flexDirection: 'column',
          width: '210mm',
          height: '277mm',
        }}
      >
        {/* Header */}

        <Box
          sx={{
            border: '2px solid brown',
            // p: 3,
            display: 'flex',
          }}
        >
          <Box>
            <img
              src="assets/images/logo.png"
              alt="logo"
              style={{
                width: '140px',
                height: '140px',
                objectFit: 'contain',
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                pr: 3,
              }}
            >
              <Typography>Subject To Malegaon Junsdiciton</Typography>

              <Typography
                sx={{
                  color: 'maroon',
                  fontWeight: 'bold',
                }}
              >
                Harshad Ashok Dasnur
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                pr: 3,
              }}
            >
              <Typography
                component={'h2'}
                sx={{
                  ml: 5,
                  fontWeight: 'bold',
                  fontSize: '32px',
                  textAlign: 'center',
                  lineHeight: '35px',
                  color: 'green',
                }}
              >
                SAI SHIV AGRO EXPORT&apos;S PVT.LTD.
              </Typography>

              <Typography
                sx={{
                  textAlign: 'right',
                  color: 'brown',
                  width: '180px',
                }}
              >
                Mob. 7517902111 <br />
                9699121192
              </Typography>
            </Box>

            <Typography
              sx={{
                textAlign: 'center',
                ml: -27,
                fontSize: '18px',
              }}
            >
              Malegon Dist. Nashik Pin - 423105 (M.S)
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 3,
          }}
        >
          <Box
            sx={{
              height: '100%',
              flexGrow: 1,
              p: 3,
              background: `radial-gradient(white, ${lightGreen[200]})`,
              border: '2px solid brown',
            }}
          >
            <b> Name:</b> {data?.full_name} <br />
            <b>Address:</b> {data?.address} <br />
            <b>Mobile:</b> {data?.primary_contact}
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                background: 'brown',
                border: '2px solid brown',
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '22px',
                }}
              >
                INVOICE
              </Typography>
            </Box>
            <Box
              sx={{
                border: '2px solid brown',
                background: `radial-gradient(white, ${lightGreen[200]})`,
                flexGrow: 1,
                p: 3,
              }}
            >
              <b>Invoice No.:</b> {data?.invoice_number} <br />
              <b>Date:</b> {getFormattedDate(data?.invoice_date)}
            </Box>
          </Box>
        </Box>

        {/* Body */}
        <Box
          sx={{
            position: 'relative',
            border: '2px solid brown',
            '& th': {
              fontWeight: 'bold',
              textAlign: 'center',
            },
            '& th, & td': {
              border: '1px solid black',

              textAlign: 'center',
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              zIndex: -1,
              height: '100%',
              width: '100%',
            }}
          >
            <img
              src="assets/images/logo.png"
              alt="bg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'opacity(0.3)',
              }}
            />
          </Box>
          <AppTable isLoading={false} isEmpty={false}>
            <TableHead>
              <TableRow
                sx={{
                  '& th': {
                    background: green[900],
                    color: 'white',
                    textTransform: 'uppercase',
                    boxShadow: `0px 0px 0px 5px ${lightGreen[200]} inset`,
                  },
                }}
              >
                <TableCell>Sr.No.</TableCell>
                <TableCell>Particular</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Rate</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.particulars?.map(
                (particular: any, particularIndex: number) => (
                  <TableRow key={particularIndex}>
                    <TableCell>{particularIndex + 1}</TableCell>
                    <TableCell
                      style={{
                        textAlign: 'left',
                      }}
                    >
                      {particular?.name}
                    </TableCell>
                    <TableCell>{particular?.quantity}</TableCell>
                    <TableCell>{particular?.rate}</TableCell>
                    <TableCell>
                      {Number(particular?.quantity || 0) *
                        Number(particular?.rate || 0)}
                    </TableCell>
                  </TableRow>
                )
              )}

              <TableRow>
                <TableCell
                  style={{
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    Motor No. - {data?.motor_number} <br />
                    Moisture - {data?.moisture}
                    <br />
                    P.O. No. - {data?.po_number}
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
            <TableFooter
              sx={{
                '& td': {
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                },
              }}
            >
              <TableRow>
                <TableCell
                  colSpan={3}
                  rowSpan={3}
                  style={{
                    border: 'none',
                    textAlign: 'left',
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      color: 'maroon',
                    }}
                  >
                    GST No.: 27ABCCS4871P1ZM
                  </Typography>
                  <Typography
                    sx={{
                      color: blue[600],
                      fontWeight: 'bold',
                    }}
                  >
                    Bank Details: <br />
                    SAI SHIV AGRO EXPORTS PVT. LTD. <br />
                    Bank of Maharashtra <br /> A/C No.: 60339730729 <br /> IFSC
                    Code: MAHB0001027
                  </Typography>
                </TableCell>
                <TableCell>TOTAL</TableCell>
                <TableCell>{total}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ADVANCE</TableCell>
                <TableCell>{data?.advance}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BALANCE</TableCell>
                <TableCell>{total - (Number(data?.advance) || 0)}</TableCell>
              </TableRow>
              <TableRow
                sx={{
                  '& td': {
                    border: 'none',
                    pt: 30,
                    textAlign: 'center',
                  },
                  '& span': {
                    fontWeight: 'bold',
                    fontSize: '17px',
                  },
                }}
              >
                <TableCell colSpan={2}>
                  <Typography
                    component={'span'}
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    Customer Sign{' '}
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
                <TableCell colSpan={2}>
                  <Typography
                    component={'span'}
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    {' '}
                    Owner Sign{' '}
                  </Typography>
                </TableCell>
              </TableRow>
            </TableFooter>
          </AppTable>
        </Box>
      </Box>
    </Box>
  );
};

export default Print;
