import { NamedTupleMember } from "typescript";

export type userType = {
  id: number | undefined;
  name: string | undefined;
  image_url: string | undefined;
};

export type authorType = {
  id: number;
  name: string;
  image_url: string;
};

export type issueMilestoneType = {
  id: number;
  title: string;
  cloclosed_issue_count: number;
  opened_issue_count: number;
};

export type issueLabelType = {
  id: number;
  title: string;
  color: string;
};

export type IssueType = {
  id: number;
  title: string;
  number: number;
  author: authorType;
  created_time: string;
  milestone: issueMilestoneType;
  labels: issueLabelType[];
  open: boolean;
};
