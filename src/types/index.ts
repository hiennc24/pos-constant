export interface ServiceConstant {
  NAME: string;
  [key: string]: string;
}

export interface ServiceConstants {
  [key: string]: ServiceConstant;
}

export interface PermissionConstant {
  [key: string]: string;
}

export interface CollectionConstant {
  [key: string]: string;
}
