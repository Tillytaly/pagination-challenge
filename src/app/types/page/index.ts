import { IDynamicKeys } from "@/app/types";
export interface PageProps {
  params: IDynamicKeys;
  searchParams?: IDynamicKeys;
}

interface ILocaleParams {
  locale: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: ILocaleParams;
}
