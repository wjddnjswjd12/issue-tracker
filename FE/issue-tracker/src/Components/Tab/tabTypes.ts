export type milestoneType = {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  created_time: string | undefined;
  due_date: string | undefined;
  opened_issue_count: number | undefined;
  closed_issue_count: number | undefined;
};

export type labelType = {
  id: number | undefined;
  title: string | undefined;
  description: string | undefined;
  color: string | undefined;
};
