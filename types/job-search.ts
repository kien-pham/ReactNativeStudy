export type Job = {
  id: string;
  jobTitle: string;
  jobDescription: string;
  company: string;
  jobType: string;
  jobField: string;
  location: string;
  jobSalary: number;
  status: boolean;
  isFulltimeJob: boolean;
  postedDate: Date;
  expiredTime: Date;
};
