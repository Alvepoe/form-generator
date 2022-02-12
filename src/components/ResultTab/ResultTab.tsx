import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { IField, useResultTab } from './useResultTab';

type TResultTabProps = {
  configString: string | undefined;
};

const ResultTab = ({ configString }: TResultTabProps) => {
  const formConfig = configString ? JSON.parse(configString) : {};

  const { getRenderFunction } = useResultTab();

  return (
    <Box component="form">
      <Typography>{formConfig.title}</Typography>
      <Box>
        {formConfig.items.map((item: IField) => (
          <Box key={uuidv4()} sx={{ marginBottom: '20px', marginTop: '20px' }}>
            {getRenderFunction(item)}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResultTab;
