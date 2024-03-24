import { IDropdownOption } from "@fluentui/react";

export interface IContinentSelectorProps {
    label: string;
    onChange: (option: IDropdownOption, index?: number) => void;
    selectedKey: string | number;
    disabled: boolean;
    stateKey: string;
}
