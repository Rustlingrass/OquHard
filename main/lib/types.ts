export type BreadPath = {
  path: string;
  link: string;
  active: boolean;
};

export type CourseInfoSectionType = {
  title: string;
  chapters: CourseInfoChapterType[];
  questions: CourseInfoSectionQuestionType[];
  readTime: string;
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

export type UserType = "teacher" | "moderator" | "student";

export interface CommentReply {
  id: string;
  author: string;
  userType: UserType;
  avatar: string;
  timestamp: string;
  content: string;
  likes: number;
}

export interface Comment {
  id: string;
  author: string;
  userType: UserType;
  avatar: string;
  timestamp: string;
  content: string;
  sectionId: string;
  chapterId?: string;
  likes: number;
  replies: number;
  replyList?: CommentReply[]; // Added nested replies array
}
