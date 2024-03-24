export interface IPropertyPaneContinentSelectorProps {
    label: string;
    onPropertyChange: (propertyPath: string, newValue: unknown) => void;
    selectedKey: string | number;
    disabled: boolean;
}
