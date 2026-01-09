import * as z from "zod";

export type BreadPath = {
  path: string;
  link: string;
  active: boolean;
};

export type FileResourceType = {
  fileName: string;
  fileType: string;
  fileExtension: string;
  owner: string;
  uploadDate: string;
  fileSize: string;
  courseSectionId: number;
  courseChapterId: number;
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

export type UserRoleType = "teacher" | "moderator" | "student";

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

export const SignUpDataSchema = z.object({
  name: z.string({ error: "Invalid name" }).max(50),
  email: z.email({ error: "Invalid email" }),
  password: z
    .string()
    .min(8, { error: "Must be at leat 8 characters" })
    .max(40, { error: "Must be at most 40 characters long" })
    .refine((password) => /[A-Z]/.test(password), {
      error: "Must contain at least one uppercase letter",
    })
    .refine((password) => /[a-z]/.test(password), {
      error: "Must contain at least one lowercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      error: "Must contain at least one number",
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      error: "Must contain at least one special character (!@#$%^&*)",
    }),
});

export const LogInDataSchema = z.object({
  email: z.email({ error: "Invalid email" }),
  password: z.string({ error: "Invalid password" }),
});

export type SignUpDataType = z.infer<typeof SignUpDataSchema>;
export type LogInDataType = z.infer<typeof LogInDataSchema>;

export const UserSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.email(),
  emailVerified: z.boolean(),
  name: z.string(),
  role: z.string().default("user").optional(),
  image: z.union([z.string(), z.null()]).optional(),
});

export type UserType = z.infer<typeof UserSchema>;
