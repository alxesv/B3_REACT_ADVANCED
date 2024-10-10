import { Column, DataProp } from "../interface/TableInterface";

export const columnsProp: Column<DataProp>[] = [
    { key: 'prop', label: 'Prop' },
    { key: 'type', label: 'Type' },
    { key: 'options', label: 'Options' },
    { key: 'description', label: 'Description' },
    { key: 'default', label: 'Default' },
  ];