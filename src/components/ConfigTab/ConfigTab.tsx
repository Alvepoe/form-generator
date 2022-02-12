import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {FormEvent, ChangeEvent, useState} from "react";

type TConfigTabProps = {
    handleConfigSubmit: (event: FormEvent<HTMLFormElement>) => void;
    configString: string | undefined;
}

export function ConfigTab({ handleConfigSubmit, configString }: TConfigTabProps) {
    const [textConfig, setTextConfig] = useState(configString)

    const onChangeConfig = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        setTextConfig(event.target.value)
    }
    return <form onSubmit={handleConfigSubmit}>
        <TextField name="config" value={textConfig} onChange={onChangeConfig} InputProps={{sx:{minHeight: '600px'}}} label="Form configuration" multiline fullWidth />
        <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{marginTop: '20px'}}
        >
            Apply
        </Button>
    </form>
}