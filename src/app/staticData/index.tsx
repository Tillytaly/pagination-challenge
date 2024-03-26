import { v4 as uID } from "uuid";
import { IStaticData } from "./types";

const tableColumns = [
  { id: uID(), title: "ID" },
  { id: uID(), title: "name" },
  { id: uID(), title: "year" },
];

const searchInputData = {
  id: "searchInput",
  label: "Search",
  name: "search",
  placeholder: "Search by ID",
};

export const footerData = {
  developedBy: "Developed by",
  developerName: "Agata Ziemniak",
};

export const staticData: IStaticData = {
  tableColumns,
  searchInputData,
};
