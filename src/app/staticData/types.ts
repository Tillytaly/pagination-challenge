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
}

export interface IStaticData {
  tableColumns: IColumn[];
  searchInputData: Input;
  title: string;
}
