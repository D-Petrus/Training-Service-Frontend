export interface Course {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  courseUUID?: any;
}

export interface RootObject {
  id: number;
  name: string;
  description: string;
  subCategoryUUID?: any;
  courseList: Course[];
}
