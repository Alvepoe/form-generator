import { useState } from 'react';

const useJsonScheme = () => {
  const [configString, setConfigString] = useState<string>();

  const extractConfig = (form: HTMLFormElement): void => {
    const formEntries = new FormData(form).entries();
    let serializedForm = { config: '' };
    Array.from(formEntries).forEach(([name, value]) => {
      serializedForm = { ...serializedForm, [name]: value };
    });
    setConfigString(serializedForm.config);
  };

  return { extractConfig, configString };
};

export default useJsonScheme;
