import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Course_Key {
  id: UUIDString;
  __typename?: 'Course_Key';
}

export interface GroupMembership_Key {
  userId: UUIDString;
  studyGroupId: UUIDString;
  __typename?: 'GroupMembership_Key';
}

export interface ListAllCoursesData {
  courses: ({
    id: UUIDString;
    name: string;
    courseCode: string;
    description?: string | null;
    department?: string | null;
    createdAt: TimestampString;
  } & Course_Key)[];
}

export interface StudyGroup_Key {
  id: UUIDString;
  __typename?: 'StudyGroup_Key';
}

export interface StudyMaterial_Key {
  id: UUIDString;
  __typename?: 'StudyMaterial_Key';
}

export interface StudyScheduleEntry_Key {
  id: UUIDString;
  __typename?: 'StudyScheduleEntry_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface ListAllCoursesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListAllCoursesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListAllCoursesData, undefined>;
  operationName: string;
}
export const listAllCoursesRef: ListAllCoursesRef;

export function listAllCourses(options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;
export function listAllCourses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListAllCoursesData, undefined>;

