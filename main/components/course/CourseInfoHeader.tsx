import CourseStats from "./CourseStats";

export default function CourseInfoHeader() {
  return (
    <section className="space-y-4 lg:space-y-6 px-[25px]">
      <h2 className="text-2xl lg:text-3xl font-semibold text-neutral-800">
        The complete advanced Data Structures and Algorithms course in C++
      </h2>
      <CourseStats />
      <p className="text-sm lg:text-[0.91rem] lg:leading-normal lg:tracking-wide lg:tracking text-pretty text-neutral-600">
        An in-depth, contest-focused curriculum that builds algorithmic
        thinking, efficient implementations, and robust problem-solving
        strategies. Hands-on lessons, real contest problems, and timed practice
        sessions help students develop intuition for data structures and
        optimization. Guided solutions, coding best practices, and
        interview-focused challenges prepare learners for both competitions and
        technical interviews.
      </p>
    </section>
  );
}
