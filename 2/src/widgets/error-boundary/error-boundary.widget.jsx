export const ErrorBoundaryWidget = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-4/12">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Оййй...
        </h5>
        <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Произошла непредвиденная ошибка
        </p>
      </div>
    </div>
  );
};
