import Alert from '@mui/material/Alert';

type TError = {
  error: string | null;
};

const Error = ({ error }: TError) => {
  return <Alert severity="error">{error}</Alert>;
};

export default Error;
