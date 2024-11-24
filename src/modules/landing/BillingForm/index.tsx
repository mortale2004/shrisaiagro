import AppGridContainer from '@/components/AppGrid/AppGridContainer';
import AppGridItem from '@/components/AppGrid/AppGridItem';
import AppSubmitButton from '@/components/AppSubmitButton';
import AppDateField from '@/components/Form/AppDateField';
import AppFormHeader from '@/components/Form/AppFormHeader';
import AppTextField from '@/components/Form/AppTextField';
import { Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdDelete, MdPrint } from 'react-icons/md';

const BillingForm = ({ handlePrintClick }: any) => {
  const { setValue, handleSubmit, control, watch } = useForm({
    defaultValues: {
      particulars: [
        {
          name: '',
          quantity: '',
          rate: '',
        },
      ],
      invoice_date: new Date(),
      full_name: '',
      address: '',
      primary_contact: '',
      invoice_number: '',
    },
  });

  const onSubmit = (data: any) => {
    handlePrintClick(data);
  };

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'particulars',
  } as any);

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppGridContainer>
          <AppGridItem>
            <AppFormHeader>Invoice Details</AppFormHeader>
          </AppGridItem>

          <AppGridItem md={9}>
            <AppTextField name="full_name" label="Name" control={control} />
          </AppGridItem>

          <AppGridItem md={3}>
            <AppTextField
              name="primary_contact"
              label="Mobile"
              control={control}
              inputProps={{
                maxLength: 10,
              }}
            />
          </AppGridItem>

          <AppGridItem>
            <AppTextField
              name="address"
              label="Address"
              control={control}
              rows={2}
              multiline
            />
          </AppGridItem>

          <AppGridItem md={6}>
            <AppTextField
              name="invoice_number"
              label="Invoice Number"
              control={control}
            />
          </AppGridItem>
          <AppGridItem md={6}>
            <AppDateField
              size={'small'}
              name="invoice_date"
              label="Invoice Date"
              control={control}
            />
          </AppGridItem>

          <AppGridItem>
            <AppFormHeader>Particular Details</AppFormHeader>
          </AppGridItem>

          {fields.map((_, particularIndex) => (
            <Fragment key={particularIndex}>
              <AppGridItem md={4}>
                <AppTextField
                  name={`particulars.${particularIndex}.name`}
                  label="Name"
                  control={control}
                />
              </AppGridItem>
              <AppGridItem md={4}>
                <AppTextField
                  type="number"
                  name={`particulars.${particularIndex}.quantity`}
                  label="Quantity"
                  control={control}
                />
              </AppGridItem>

              <AppGridItem md={4} className="space-between">
                <AppTextField
                  type="rate"
                  name={`particulars.${particularIndex}.rate`}
                  label="Rate"
                  control={control}
                />
                <IconButton
                  onClick={() => {
                    remove(particularIndex);
                  }}
                >
                  <MdDelete />
                </IconButton>
              </AppGridItem>
            </Fragment>
          ))}
          <AppGridItem md={4}>
            <AppTextField
              name="advance"
              type="number"
              label="Advance"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={8}>
            <Button
              sx={{
                float: 'right',
              }}
              startIcon={<IoIosAddCircleOutline />}
              onClick={() => {
                append({
                  name: '',
                  quantity: '',
                  rate: '',
                });
              }}
            >
              Add More
            </Button>
          </AppGridItem>
          <AppGridItem>
            <AppSubmitButton
              sx={{
                float: 'right',
              }}
              startIcon={<MdPrint />}
            >
              Print
            </AppSubmitButton>
          </AppGridItem>
        </AppGridContainer>
      </form>
    </Box>
  );
};

export default BillingForm;
