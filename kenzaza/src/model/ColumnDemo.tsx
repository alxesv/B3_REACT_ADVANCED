import { Column, DataProp } from "../interface/TableInterface";

export const columnsProp: Column<DataProp>[] = [
    { key: 'prop', label: 'Prop' },
    { key: 'value', label: 'Value' },
    { key: 'description', label: 'Description' },
    { key: 'default', label: 'Default' },
  ];