import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { IButton, IField, useResultTab } from './hooks/useResultTab';
import Error from '../Error/Error';

type TResultTabProps = {
  configString: string;
};

const ResultTab = ({ configString }: TResultTabProps) => {
  const [formConfig, setFormConfig] = useState<null | {
    title: string | undefined;
    items: Array<IField> | undefined;
    controls: Array<IButton> | undefined;
  }>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const jsonParsed = JSON.parse(configString);
      setFormConfig(jsonParsed);
    } catch (e) {
      setError(e.message);
    }
  }, [configString]);

  const { getFieldRenderFunction, getButtonRenderFunction } = useResultTab();

  return formConfig ? (
    <Box component="form">
      <Typography>{formConfig.title}</Typography>
      <Box>
        {formConfig.items?.map((item: IField) => (
          <Box key={uuidv4()} sx={{ marginBottom: '20px', marginTop: '20px' }}>
            {getFieldRenderFunction(item)}
          </Box>
        ))}
      </Box>
      <Box>
        {formConfig.controls?.map((control: IButton) => (
          <Box key={uuidv4()} sx={{ margin: '20px', display: 'inline' }}>
            {getButtonRenderFunction(control)}
          </Box>
        ))}
      </Box>
    </Box>
  ) : (
    <Error error={error} />
  );
};

export default ResultTab;
