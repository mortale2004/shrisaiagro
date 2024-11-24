import { getFormattedDate } from '@/helpers/dateHelper';
import { Box, Typography } from '@mui/material';
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
            border: '2px solid green',
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
                height: '120px',
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
                Mob. 7517902111{' '}
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
            px: 7,
          }}
        >
          <Typography sx={{ width: '50%' }}>
            पावती नं: {data?.invoice_number}{' '}
          </Typography>
          <Typography sx={{ width: '50%' }}>
            दिनांक: {getFormattedDate(data?.invoice_date)}{' '}
          </Typography>
        </Box>

        <Box
          sx={{
            border: '2px solid green',
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,

              '& p': {
                fontWeight: '600',
                fontSize: '15px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                बिल नं.: {data?.bill_number}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                P.O. No.: {data?.po_number}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                श्रीमान: {data?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                ठिकाण: {data?.place}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                गांव: {data?.village}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                सप्रेम नमस्कार, आपले आर्डर प्रमाणे: {data?.product}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                मोटर नं. {data?.motor_number}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                मालकाचे नाव: {data?.owner_name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                ड्राईवर चे नाव: {data?.driver_name}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                ला नं.: {data?.lorry_number}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                गाव: {data?.lorry_village}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              background: lightGreen[300],
              display: 'grid',
              gridTemplateColumns: '50% 50%',
              gap: 5,
              p: 5,
              pr: 10,
            }}
          >
            <TotalBox label="मालाचा तपशिल -" value={data?.product_info} />
            <TotalBox label="एकूण रक्कम -" value={data?.total_amount} />
            <TotalBox label="एकूण वजन -" value={data?.total_weight} />
            <TotalBox label="देणे गाडी भाडे -" value={data?.amount_to_give} />
            <TotalBox label="भाव -" value={data?.rate} />
            <TotalBox
              label="उर्वरित घेणे रक्कम -"
              value={
                Number(data?.total_amount) ||
                0 - Number(data?.amount_to_give) ||
                0
              }
            />
          </Box>

          <Box
            sx={{
              p: 5,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box>
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
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                '& p': {
                  fontWeight: 'bold',
                },
              }}
            >
              <Typography
                sx={{
                  mt: -2,
                }}
              >
                आपला
              </Typography>
              <Box>
                <Typography
                  sx={{
                    color: 'maroon',
                    textShadow: '1px 1px 0px yellow',
                    fontSize: '18px',
                  }}
                >
                  हर्षद अशोक दासनुर
                </Typography>
                <Typography>मो.7517902111, 9699121192</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              p: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                मोटार लॉरी मालक: {data?.motor_lorry_owner}
              </Typography>
              <Typography
                sx={{
                  width: '50%',
                }}
              >
                ट्रान्सपोर्ट एजन्ट: {data?.transport_agent}
              </Typography>
            </Box>
            <Box>
              <Typography>
                ड्रायव्हर मो नं: {data?.driver_mobile_number}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Print;

export const TotalBox = ({ label, value }: { label: string; value: any }) => {
  return (
    <Box
      sx={{
        background: 'white',
        border: `3px solid ${green['900']}`,
        display: 'flex',
        fontWeight: 'bold',
      }}
    >
      <Box
        sx={{
          width: '40%',
          p: 1.5,
          borderRight: `3px solid ${green['900']}`,
        }}
      >
        {label}
      </Box>
      <Box
        sx={{
          width: '60%',
          p: 1.5,
        }}
      >
        {value}
      </Box>
    </Box>
  );
};
