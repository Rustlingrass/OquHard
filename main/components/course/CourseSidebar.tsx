import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Book,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Home,
  Inbox,
  MessageSquare,
  NotebookText,
  Reply,
  Search,
  Send,
  Settings,
  ThumbsUp,
  X,
} from "lucide-react";
import { courseSections, discussionData } from "@/lib/constants";
import { CourseInfoSectionType, UserType } from "@/lib/types";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { AvatarMenu } from "./Avatar";

function ContentMenuHeader({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="w-full flex gap-5.5 text-sm font-normal text-neutral-600 hover:text-neutral-700 transition-colors">
      <button
        className={cn(
          "cursor-pointer pb-4 lg:pb-[16.5px] lg:px-1 px-0.5 border-b-2 border-transparent transition-colors",
          activeMenu === "content" &&
            "text-neutral-800 font-medium border-b-neutral-500"
        )}
        onClick={() => setActiveMenu("content")}
      >
        Content
      </button>
      <button
        className={cn(
          "cursor-pointer pb-4 px-0.5 lg:px-1 border-b-2 border-transparent transition-colors",
          activeMenu === "discussion" &&
            "text-neutral-800 font-medium border-b-neutral-500"
        )}
        onClick={() => setActiveMenu("discussion")}
      >
        Discussion
      </button>
      <button
        className={cn(
          "cursor-pointer pb-4 px-0.5 lg:px-1 border-b-2 border-transparent transition-colors",
          activeMenu === "files" &&
            "text-neutral-800 font-medium border-b-neutral-500"
        )}
        onClick={() => setActiveMenu("files")}
      >
        Files
      </button>
      <AvatarMenu className="lg:hidden pb-4.5 px-0.5 lg:px-1 ml-auto" />
    </div>
  );
}

function SidebarContentSearch() {
  return (
    <div className="px-4 py-2.5 pr-2 rounded-md border-[1.5px] border-neutral-200 flex items-center gap-2 w-full bg-white hover:bg-neutral-50 active:bg-neutral-50 hover:border-neutral-300/90 active:border-neutral-300/90 transition-colors">
      <Search className="size-5 text-neutral-600" />
      <input
        type="text"
        placeholder="Search content..."
        className="focus-within:outline-0 w-full text-sm text-neutral-800 font-normal"
      />
    </div>
  );
}

function SidebarMainContentMenuSection({
  section,
  index,
}: {
  section: CourseInfoSectionType;
  index: number;
}) {
  const [sectionOpened, setSectionOpened] = useState(false);
  const completedCount = [...section.chapters, ...section.questions].filter(
    (item) => item.done
  ).length;
  const combinedLength = [...section.chapters, ...section.questions].length;
  return (
    <div
      className={cn(
        "w-full px-3 py-4 border-t-[1.5px] border-neutral-200 hover:bg-neutral-100 active:bg-neutral-100 transition-colors cursor-pointer",
        index === courseSections.length - 1 && "border-b-[1.5px]"
      )}
    >
      <div
        className="flex gap-3 items-start w-full"
        onClick={() => setSectionOpened((prev) => !prev)}
      >
        <ChevronDown
          className={cn(
            "size-4 text-neutral-500 mt-0.5 shrink-0 transition-transform",
            sectionOpened && "rotate-180"
          )}
        />
        <div className="space-y-1 w-full">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-medium text-neutral-800">
              {section.title}
            </h3>
            {completedCount === combinedLength && (
              <div className="flex items-center justify-center p-1.5 rounded-full bg-emerald-400 shrink-0">
                <Check className="size-3.5 text-white shrink-0" />
              </div>
            )}
          </div>
          <div className="flex gap-2 items-center text-xs font-normal text-neutral-600">
            <p>
              {completedCount} / {combinedLength}
            </p>
            <span className="w-px shrink-0 h-3 bg-neutral-400"></span>
            <p>{section.readTime}</p>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-rows-[0fr] w-full overflow-hidden transition-[grid-template_rows] ease-in-out duration-300",
          sectionOpened && "grid-rows-[1fr] "
        )}
      >
        <div className="overflow-hidden py-3 pt-4">
          {section.chapters.map((chapt, ind) => (
            <div
              key={ind}
              className="pl-5.5 lg:pl-6 pr-3 py-2 hover:bg-neutral-200/30 rounded-md flex items-start gap-3.5 lg:gap-4"
            >
              <Checkbox
                checked={chapt.done}
                className="data-[state=checked]:border-emerald-500 shrink-0 mt-0.5 border-2 shadow-none size-4.5 data-[state=checked]:bg-emerald-500 data-[state=checked]:text-white dark:data-[state=checked]:border-emerald-500 dark:data-[state=checked]:bg-emerald-500"
              />
              <div className="space-y-2">
                <h3
                  className={cn(
                    "text-[13px] leading-normal font-normal text-neutral-500 hover:text-neutral-800/94 transition-colors tracking-wide",
                    chapt.done && "text-neutral-800"
                  )}
                >
                  {ind + 1}. {chapt.title}
                </h3>
                <div className="flex items-center text-neutral-600 gap-1.5">
                  <BookOpen className="size-3.5 text-neutral-500" />
                  <p className="text-xs text-neutral-500">{chapt.readTime}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const getUserBadgeStyle = (userType: UserType) => {
  switch (userType) {
    case "teacher":
      return "bg-blue-500/10 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-400 dark:border-blue-800";
    case "moderator":
      return "bg-purple-500/10 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-400 dark:border-purple-800";
    case "student":
      return "bg-slate-500/10 text-slate-700 border-slate-200 dark:bg-slate-500/20 dark:text-slate-400 dark:border-slate-800";
  }
};

const getAvatarStyle = (userType: UserType) => {
  switch (userType) {
    case "teacher":
      return "bg-blue-500 text-white";
    case "moderator":
      return "bg-purple-500 text-white";
    case "student":
      return "bg-slate-400 text-white";
  }
};

function SidebarDiscussionMenu() {
  const [newComment, setNewComment] = useState("");
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(
    new Set()
  );

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      setNewComment("");
    }
  };

  const toggleReplies = (commentId: string) => {
    setExpandedReplies((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b px-4 py-3 pt-0.5 bg-neutral-50">
        <div className="flex gap-3 items-start">
          <div className="h-8 w-8 mt-0.5 rounded-full bg-neutral-400 text-white flex items-center justify-center text-xs font-semibold shrink-0">
            ME
          </div>
          <div className="flex-1 space-y-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment to this discussion..."
              className="w-full min-h-[60px] text-sm rounded-md border bg-background px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  handleSubmitComment();
                }
              }}
            />
            <div className="flex justify-between items-center">
              <span className="text-xs text-neutral-500">
                Cmd/Ctrl + Enter to post
              </span>
              <Button
                size="sm"
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="h-7 text-xs gap-1.5"
              >
                <Send className="h-3 w-3" />
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="divide-y">
          {discussionData.map((comment) => (
            <div
              key={comment.id}
              className="px-4 py-4 hover:bg-neutral-100 rounded-sm transition-colors"
            >
              <div className="flex gap-3">
                {/* Avatar */}
                <div
                  className={cn(
                    "h-9 w-9 rounded-full flex items-center justify-center text-xs font-semibold shrink-0",
                    getAvatarStyle(comment.userType)
                  )}
                >
                  {comment.avatar}
                </div>

                {/* Comment Content */}
                <div className="flex-1 min-w-0 space-y-2">
                  {/* Header */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-neutral-800">
                      {comment.author}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-medium px-1.5 py-0.5 rounded border uppercase tracking-wide",
                        getUserBadgeStyle(comment.userType)
                      )}
                    >
                      {comment.userType}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {comment.timestamp}
                    </span>
                  </div>

                  {/* Content */}
                  <p className="text-xs text-neutral-800/92 leading-relaxed">
                    {comment.content}
                  </p>

                  {/* Footer Actions */}
                  <div className="flex items-center gap-4 pt-1">
                    <button className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors group">
                      <ThumbsUp className="h-3.5 w-3.5" />
                      <span className="font-medium">{comment.likes}</span>
                    </button>
                    <button
                      onClick={() => toggleReplies(comment.id)}
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors"
                    >
                      <Reply className="h-3.5 w-3.5" />
                      <span className="font-medium">
                        {expandedReplies.has(comment.id) ? "Hide" : "View"}{" "}
                        Replies ({comment.replies})
                      </span>
                    </button>
                  </div>

                  {expandedReplies.has(comment.id) &&
                    comment.replyList &&
                    comment.replyList.length > 0 && (
                      <div className="mt-4 space-y-3 pl-4 border-l-2 border-neutral-100">
                        {comment.replyList.map((reply) => (
                          <div key={reply.id} className="flex gap-2.5">
                            <div
                              className={cn(
                                "h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0",
                                getAvatarStyle(reply.userType)
                              )}
                            >
                              {reply.avatar}
                            </div>

                            <div className="flex-1 min-w-0 space-y-1.5">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-medium text-neutral-800">
                                  {reply.author}
                                </span>
                                <span
                                  className={cn(
                                    "text-[9px] font-medium px-1 py-0.5 rounded border uppercase tracking-wide",
                                    getUserBadgeStyle(reply.userType)
                                  )}
                                >
                                  {reply.userType}
                                </span>
                                <span className="text-[11px] text-neutral-500">
                                  {reply.timestamp}
                                </span>
                              </div>

                              <p className="text-xs text-neutral-800/92 leading-relaxed">
                                {reply.content}
                              </p>

                              <div className="flex items-center gap-3 pt-0.5">
                                <button className="flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-800 transition-colors group">
                                  <ThumbsUp className="h-3 w-3" />
                                  <span className="font-medium">
                                    {reply.likes}
                                  </span>
                                </button>
                                <button className="text-[11px] text-neutral-500 hover:text-neutral-800 transition-colors">
                                  Reply
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Hint */}
        <div className="px-4 py-8 text-center text-sm text-neutral-500">
          <MessageSquare className="size-7 lg:size-9 mx-auto mb-2 opacity-40" />
          <p>End of discussions</p>
        </div>
      </div>
    </div>
  );
}

function SidebarMainContentMenu() {
  return (
    <div>
      {courseSections.map((item, index) => (
        <SidebarMainContentMenuSection
          index={index}
          key={index}
          section={item}
        />
      ))}
    </div>
  );
}

export function CourseSidebar() {
  const { toggleSidebar, open, openMobile } = useSidebar();
  const [activeMenu, setActiveMenu] = useState("content");
  return (
    <Sidebar side="right" className="font-geist z-50">
      <SidebarHeader className="relative p-4 pl-8 pt-6 lg:pt-6.5 pb-0">
        {(open || openMobile) && (
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center p-1.5 rounded-full border border-neutral-200 text-neutral-600 z-70 absolute -left-4 bg-neutral-50 hover:bg-neutral-100 active:bg-neutral-100 transition-colors top-4 cursor-pointer"
          >
            <X className="size-4" />
          </button>
        )}
        <ContentMenuHeader
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      </SidebarHeader>
      <hr className="bg-neutral-200 h-0.5 lg:h-0.5" />
      <SidebarContent>
        <SidebarGroup className="pb-2 px-4 mt-3 mb-0">
          <SidebarContentSearch />
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            {activeMenu === "content" ? (
              <SidebarMainContentMenu />
            ) : (
              <SidebarDiscussionMenu />
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
