import { StackNavigationProp } from "@react-navigation/stack";
import { Job } from "./job";
import { RouteProp } from "@react-navigation/native";

export enum ScreenName {
  Home = "Home",
  JobDetail = "JobDetail",
}

export type RootStackParamList = {
  Home: undefined;
  JobDetail: { jobData: Job };
};

export type ScreenNavProps = StackNavigationProp<
  RootStackParamList,
  ScreenName.Home,
  ScreenName.JobDetail
>;

export type JobDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenName.JobDetail
>;
