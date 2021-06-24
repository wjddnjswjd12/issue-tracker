export type IssueDetailType = {
  id: number;
  title: string;
  number: number;
  author: authorType;
  created_time: string;
  milestone?: issueMilestoneType;
  labels?: issueLabelType[];
  open: boolean;
  assignee?: assigneeType[];
  comments?: commentType[];
};

export type commentType = {
  author: authorType;
  created_time: string;
  content: string;
  is_mine: boolean;
  id: number;
};

export type issueLabelType = {
  id: number;
  title: string;
  color: string;
};

export type assigneeType = {
  name: string;
  id: number;
  image_url: string;
};

export type issueMilestoneType = {
  id: number;
  title: string;
  closed_issue_count: number;
  opened_issue_count: number;
};

export type authorType = {
  id: number;
  name: string;
  image_url: string;
};
