import { Button } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FaFileExport } from 'react-icons/fa';
import { IoIosCheckbox } from 'react-icons/io';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import * as XLSX from 'xlsx';
import AppDialog, { AppDialogRef } from '../AppDialog';

const icon = <MdCheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <IoIosCheckbox fontSize="small" />;

export const addSheets = (
  data: any[],
  filteredData: any[],
  key: string,
  filterKey: string,
  wb: any,
  sName: any = key
) => {
  data?.forEach((item) => {
    const sheetName = String(item?.[sName]);
    const sheetData = filteredData?.filter(
      (data) => data?.[filterKey] === item?.[key]
    );
    let ws = XLSX.utils.json_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
  });
};

type ExportDialogProps = {
  exportData: any[];
  fields?: any[];
  fileName: string;
  handleSheetGeneration: (...rest: any) => void;
};

const ExportDialog = forwardRef(
  (
    {
      exportData,
      fields = [],
      fileName,
      handleSheetGeneration,
    }: ExportDialogProps,
    ref
  ) => {
    // Contexts
    const options = useMemo(() => fields, [fields]);

    const [selectedExportFields, setSelectedExportFields] = useState(fields);

    const handleSelectExportField = (event: any, value: any) => {
      setSelectedExportFields(value);
    };

    const dialogRef = useRef<AppDialogRef>(null);

    const isFilterPresent = (
      _id: string,
      item: any,
      filterKeyName: any,
      format?: (item: any) => void
    ) =>
      selectedExportFields?.findIndex((field: any) => field?._id === _id) !=
        -1 && {
        [filterKeyName]: format ? format(item) : item?.[_id],
      };

    const handleCSVClick = () => {
      const filteredData = exportData?.map((listItem: any) => {
        const filteredRow = {};

        fields?.map(({ _id, name, format }) => {
          Object.assign(
            filteredRow,
            isFilterPresent(_id, listItem, name, format)
          );
        });

        return filteredRow;
      });

      const wb = XLSX.utils.book_new();
      let ws;
      handleSheetGeneration(wb, ws, filteredData, addSheets);
      XLSX.writeFile(wb, fileName);
      dialogRef.current?.onClose();
    };

    useImperativeHandle(
      ref,
      () => ({
        onExportOpen: dialogRef?.current?.onOpen,
      }),
      []
    );

    return (
      <AppDialog
        dividers
        icon={<FaFileExport />}
        title={`Export Records`}
        maxWidth="sm"
        ref={dialogRef}
      >
        <Autocomplete
          multiple
          options={options}
          disableCloseOnSelect
          value={selectedExportFields}
          onChange={handleSelectExportField}
          getOptionLabel={(option) => option?.name}
          fullWidth
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option?.name}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select Fields to Export"
              placeholder="Select Fields to Export"
            />
          )}
        />

        <Button
          variant="contained"
          sx={{ mt: 2, mr: 2, float: 'right' }}
          startIcon={<FaFileExport />}
          onClick={handleCSVClick}
        >
          Export To Excel
        </Button>
      </AppDialog>
    );
  }
);
ExportDialog.displayName = 'ExportDialog';
export default ExportDialog;
