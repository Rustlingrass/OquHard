export default function Stats() {
  return (
    <section className="w-full px-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold text-gray-800">20+</h2>
          <p className="text-sm font-medium text-neutral-500">Total Modules</p>
        </div>
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold text-gray-800">100+</h2>
          <p className="text-sm font-medium text-neutral-500">
            Total Questions
          </p>
        </div>
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold text-gray-800">35+</h2>
          <p className="text-sm font-medium text-neutral-500">Hours Study</p>
        </div>
      </div>
    </section>
  );
}
