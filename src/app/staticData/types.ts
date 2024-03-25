export interface IColumn {
  id: string;
  title: string;
}

export interface Input {
  label: string;
  placeholder: string;
  name: string;
  id: string;
}

export interface IStaticData {
  tableColumns: IColumn[];
  searchInputData: Input;
}
