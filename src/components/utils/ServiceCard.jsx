function ServiceCard({ icon, title, description, className = "" }) {
  return (
    <div
      className={`border border-gray-500 dark:border-purple2 p-6 rounded-2xl col-span-7 relative z-10 bg-light-purple dark:bg-blue-dark space-y-2 ${className}`}
    >
      <div className="flex gap-4 items-center justify-center md:justify-start text-2xl text-regular font-semibold md:text-bold">
        <div className="text-purple dark:text-purple2 hidden sm:block">{icon}</div> {/* Icon color changes based on theme */}
        <h3 className="capitalize">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
