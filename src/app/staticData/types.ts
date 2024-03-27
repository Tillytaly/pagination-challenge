export interface IColumn {
  id: string;
  title: string;
}

export interface Input {
  label: string;
  name: string;
  id: string;
}
export interface SearchInput extends Input {
  searchInfo: string;
  errorMessage: string;
}

export interface IStaticData {
  tableColumns: IColumn[];
  searchInputData: SearchInput;
  title: string;
}
