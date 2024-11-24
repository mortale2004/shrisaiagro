import AppGridContainer from '@/components/AppGrid/AppGridContainer';
import AppGridItem from '@/components/AppGrid/AppGridItem';
import AppSubmitButton from '@/components/AppSubmitButton';
import AppDateField from '@/components/Form/AppDateField';
import AppFormHeader from '@/components/Form/AppFormHeader';
import AppTextField from '@/components/Form/AppTextField';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import { MdPrint } from 'react-icons/md';

const BillingForm = ({ handlePrintClick }: any) => {
  const { setValue, handleSubmit, control, watch } = useForm({
    defaultValues: {
      invoice_date: new Date(),
      full_name: '',
      address: '',
      primary_contact: '',
      invoice_number: '',
      is_gst_applicable: false,
    },
  });

  const onSubmit = (data: any) => {
    handlePrintClick(data);
  };

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

          <AppGridItem md={3}>
            <AppTextField
              name="invoice_number"
              label="पावती नं"
              control={control}
            />
          </AppGridItem>
          <AppGridItem md={3}>
            <AppDateField
              size={'small'}
              name="invoice_date"
              label="दिनांक"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={3}>
            <AppTextField
              name="bill_number"
              label="बिल नं."
              control={control}
            />
          </AppGridItem>
          <AppGridItem md={3}>
            <AppTextField
              size={'small'}
              name="po_number"
              label="PO Number"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={6}>
            <AppTextField name="name" label="श्रीमान" control={control} />
          </AppGridItem>

          <AppGridItem md={3}>
            <AppTextField name="place" label="ठिकाण" control={control} />
          </AppGridItem>

          <AppGridItem md={3}>
            <AppTextField name="village" label="गांव" control={control} />
          </AppGridItem>

          <AppGridItem>
            <AppTextField
              name="product"
              label="सप्रेम नमस्कार, आपले आर्डर प्रमाणे"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="motor_number"
              label="मोटर नं."
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="owner_name"
              label="मालकाचे नाव"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="driver_name"
              label="ड्राईवर चे नाव"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="lorry_number"
              label="ला नं."
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField name="lorry_village" label="गाव" control={control} />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="product_info"
              label="मालाचा तपशिल"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="total_amount"
              label="एकूण रक्कम"
              type="number"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="total_weight"
              label="एकूण वजन"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="amount_to_give"
              label="देणे गाडी भाडे"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField name="rate" label="भाव" control={control} />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="motor_lorry_owner"
              label="मोटार लॉरी मालक"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="transport_agent"
              label="ट्रान्सपोर्ट एजन्ट"
              control={control}
            />
          </AppGridItem>

          <AppGridItem md={4}>
            <AppTextField
              name="driver_mobile_number"
              label="ड्रायव्हर मो नं"
              control={control}
            />
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
