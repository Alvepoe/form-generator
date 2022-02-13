import { useState } from 'react';

const useJsonScheme = () => {
  const [configString, setConfigString] = useState<string>();

  const extractConfig = (form: HTMLFormElement): void => {
    const formEntries = new FormData(form).entries();
    const formEntriesArray = Array.from(formEntries);
    const serializedForm = formEntriesArray.reduce(
      (acc, [name, value]) => {
        return {
          ...acc,
          [name]: value,
        };
      },
      { config: '' }
    );
    setConfigString(serializedForm.config);
  };

  return { extractConfig, configString };
};

export default useJsonScheme;
