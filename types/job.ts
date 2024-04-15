export type Job = {
  id: string;
  jobTitle: string;
  jobDescription: string;
  jobImage: string;
  company: string;
  companyInfo: string;
  companyLogo: string;
  reviewInfo: string;
  jobType: string;
  jobField: string;
  location: string;
  jobSalary: number;
  status: boolean;
  isFulltimeJob: boolean;
  postedDate: Date;
  expiredTime: Date;
};

export type JobSearchFilter = {
  label: string;
  isActive: boolean;
};

export enum JobTabsType {
  "description" = "description",
  "company" = "company",
  "reviews" = "reviews",
}
