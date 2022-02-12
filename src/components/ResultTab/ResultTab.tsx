
type TResultTabProps = {
    configString: string | undefined;
}

export const ResultTab = ( { configString }: TResultTabProps) => {
    const configJson = configString ? JSON.parse(configString) : {};
    debugger;
    return <>{configString}</>
}