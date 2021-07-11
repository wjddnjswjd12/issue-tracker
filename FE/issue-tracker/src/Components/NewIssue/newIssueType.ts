export type newIssueType = {
  title: string;
  comment: string;
  label_ids: number[];
  milestone_id: number;
  assignee_ids: number[];
};

export type commentType = {
  author: authorType;
  created_time: string;
  comment: string;
  id: number;
};

export type issueLabelType = {
  id: number | undefined;
  title: string | undefined;
  color: string | undefined;
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

export type assigneeType = {
  name: string | undefined;
  image_url: string | undefined;
};
