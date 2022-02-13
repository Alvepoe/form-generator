import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';

enum FieldTypes {
  NUMBER = 'number',
  TEXT = 'text',
  TEXT_AREA = 'textarea',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'date',
  RADIO = 'radio',
}

export interface IField {
  label: string;
  type: FieldTypes;
  value?: unknown;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  placeholder?: string;
  radioOptions?: Array<string>;
}

export interface IButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  label: string;
}

export const useResultTab = () => {
  const renderTextField = (field: IField) => {
    return (
      <FormControl>
        <TextField
          placeholder={field.placeholder}
          label={field.label}
          name={field.name}
          type={field.type}
          multiline={field.type === FieldTypes.TEXT_AREA}
          color="primary"
          disabled={field.disabled}
          required={field.required}
          defaultValue={field.value}
          autoComplete="off"
        />
      </FormControl>
    );
  };

  const renderCheckbox = (field: IField) => {
    return (
      <FormControlLabel
        control={<Checkbox defaultChecked={field.checked} />}
        label={field.label ?? field.name}
        disabled={field.disabled}
      />
    );
  };

  function renderRadioGroup(field: IField) {
    return (
      <FormControlLabel
        label={field.label}
        labelPlacement="start"
        control={
          field.radioOptions?.length ? (
            <RadioGroup name={field.name} row>
              {field.radioOptions.map(item => {
                return (
                  <FormControlLabel
                    label={item}
                    key={uuidv4()}
                    value={item}
                    labelPlacement="top"
                    control={<Radio />}
                  />
                );
              })}
            </RadioGroup>
          ) : (
            <Typography>Radio group options weren't found</Typography>
          )
        }
      />
    );
  }

  const FIELD_RENDER_FUNC = {
    [FieldTypes.TEXT]: renderTextField,
    [FieldTypes.NUMBER]: renderTextField,
    [FieldTypes.TEXT_AREA]: renderTextField,
    [FieldTypes.DATE_PICKER]: renderTextField,
    [FieldTypes.CHECKBOX]: renderCheckbox,
    [FieldTypes.RADIO]: renderRadioGroup,
  };

  const getFieldRenderFunction = (field: IField) => {
    const fieldType = field.type;
    const renderFunction = FIELD_RENDER_FUNC[fieldType];
    if (!renderFunction || typeof renderFunction !== 'function') {
      return <div>Unknown field type</div>;
    }
    return renderFunction(field);
  };

  const getButtonRenderFunction = (control: IButton) => {
    return (
      <Button key={uuidv4()} type={control.type} variant="outlined">
        {control.label}
      </Button>
    );
  };

  return { getFieldRenderFunction, getButtonRenderFunction };
};
