import { v4 as uID } from "uuid";
import { IStaticData } from "./types";

const tableColumns = [
  { id: uID(), title: "ID" },
  { id: uID(), title: "name" },
  { id: uID(), title: "year" },
];

const searchInputData = {
  id: "searchInput",
  label: "search",
  name: "search",
  searchInfo: "searchBy",
};

export const staticData: IStaticData = {
  tableColumns,
  searchInputData,
  title: "colors",
};
