export const ImagePlaceholder: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <p aria-hidden="true" className="mb-4 text-base text-neutral-700 dark:text-white">
      <span className="inline-block min-h-[5em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50">
        {message ?? null}
      </span>
    </p>
  );
};
