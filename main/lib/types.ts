export type BreadPath = {
  path: string;
  link: string;
  active: boolean;
};

export type CourseInfoSectionType = {
  title: string;
  chapters: CourseInfoChapterType[];
  questions: CourseInfoSectionQuestionType[];
};

export type CourseInfoChapterType = {
  title: string;
  readTime: string;
  done: boolean;
};

export type CourseInfoSectionQuestionType = {
  text: string;
  done: boolean;
};
