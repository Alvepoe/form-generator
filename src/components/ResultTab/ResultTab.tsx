import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { IButton, IField, useResultTab } from './hooks/useResultTab';

type TResultTabProps = {
  configString: string | undefined;
};

const ResultTab = ({ configString }: TResultTabProps) => {
  const formConfig = configString ? JSON.parse(configString) : {};

  const { getFieldRenderFunction, getButtonRenderFunction } = useResultTab();

  return (
    <Box component="form">
      <Typography>{formConfig.title}</Typography>
      <Box>
        {formConfig.items.map((item: IField) => (
          <Box key={uuidv4()} sx={{ marginBottom: '20px', marginTop: '20px' }}>
            {getFieldRenderFunction(item)}
          </Box>
        ))}
      </Box>
      <Box>
        {formConfig.controls.map((control: IButton) => (
          <Box key={uuidv4()} sx={{ margin: '20px', display: 'inline' }}>
            {getButtonRenderFunction(control)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResultTab;
