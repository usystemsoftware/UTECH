const StatBox = ({ icon, value, label }) => {
  return (
    <div className="py-8 px-4 flex flex-col items-center justify-center border border-cyan-500">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-2xl font-bold">{value}</h3>
      <p className="mt-1 text-sm font-medium">{label}</p>
    </div>
  );
};
