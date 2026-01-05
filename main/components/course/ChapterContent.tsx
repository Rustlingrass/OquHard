import Image from "next/image";
import chapter1 from "@/assets/images/chapter.png";

export default function ChapterContent() {
  return (
    <section className="w-full lg:max-w-[960px] lg:mt-4 lg:mx-auto">
      <div className="px-5 py-4 space-y-6 lg:space-y-10 pb-20">
        <Image
          src={chapter1}
          alt="chapter1"
          className="w-full lg:h-110 object-cover object-center lg:rounded-md lg:border-2 rounded-sm border border-neutral-200 min-h-40"
        />
        <div className="text-sm lg:text-[0.98rem] lg:font-normal lg:max-w-[94%] lg:tracking-wide lg:mx-auto leading-7 font-normal text-pretty text-neutral-800 max-w-none space-y-6 lg:space-y-7 px-0.5">
          <p className="">
            Reversing a linked list is one of the most fundamental operations
            you'll encounter. The goal is to transform a list where each node
            points to the next element into one where each node points to the
            previous element. This operation is essential in many algorithms and
            is frequently asked in technical interviews.
          </p>
          <p>
            The iterative approach uses three pointers: one to track the
            previous node, one for the current node, and one to store the next
            node before we change the pointer. We traverse through the list, and
            at each step, we reverse the link from the current node back to the
            previous node. This approach has O(n) time complexity and O(1) space
            complexity, making it the most efficient solution.
          </p>
          <p>
            A recursive approach also works well, where we recursively reach the
            end of the list and then reverse pointers on the way back. While
            elegant, this uses O(n) space due to the call stack, so the
            iterative method is generally preferred for production code.
          </p>

          <h2 className="text-base lg:text-lg font-semibold">
            Merging Two Sorted Linked Lists
          </h2>
          <p>
            Merging two sorted linked lists combines the strengths of both lists
            while maintaining sorted order. This operation is crucial in
            divide-and-conquer algorithms like merge sort and is often used in
            real-world applications such as combining data streams or merging
            log files.
          </p>
          <p>
            The process is straightforward: we compare the values of nodes from
            both lists and append the smaller one to our result list. We
            maintain a pointer to the current position in the result list and
            advance it after each insertion. Once one list is exhausted, we
            attach the remaining nodes from the other list.
          </p>
          <p>
            Time complexity for merging is O(m + n), where m and n are the
            lengths of the two lists, since we visit each node exactly once.
            Space complexity is O(1) if we don't count the output list, as we
            only use a few pointers. This makes merging efficient even for large
            datasets.
          </p>
        </div>
      </div>
    </section>
  );
}
