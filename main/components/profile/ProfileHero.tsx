import { AvatarImage } from "../course/Avatar";

export default function ProfileHero() {
  return (
    <section className="space-y-6">
      <div className="rounded-lg bg-linear-to-br from-stone-100/80 via-gray-100 to-slate-100 p-7 pb-9 flex flex-col items-center justify-center gap-4 lg:gap-5 lg:min-h-97">
        <AvatarImage className="size-18 lg:size-22" />
        <div className="space-y-1 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-700">
            Margs The Dev
          </h2>
          <p className="text-base lg:text-lg font-normal text-neutral-600 tracking-wide">
            Account & settings
          </p>
        </div>
        <div className="flex gap-6 lg:gap-10 mt-3 lg:mt-6">
          <div className="text-center">
            <h3 className="text-base lg:text-xl font-semibold text-neutral-800">
              140 min
            </h3>
            <p className="text-sm font-normal text-neutral-600">
              Total time learning
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-base lg:text-xl font-semibold text-neutral-800">
              2 days
            </h3>
            <p className="text-sm font-normal text-neutral-600">
              Current streak
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
