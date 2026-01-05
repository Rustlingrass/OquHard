import TaskDescription from "./TaskDescription";
import TaskIDE from "./TaskIDE";

export default function TaskContent() {
  return (
    <section className="w-full lg:max-w-[960px] lg:mt-4 lg:mx-auto pb-20 space-y-8">
      <TaskDescription />
      <TaskIDE />
    </section>
  );
}
