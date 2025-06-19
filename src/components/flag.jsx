const flagMap = {
  us: "/icons/us.svg",
  co: "/icons/co.svg",
};

export default function Flag({ code = "us", className = "" }) {
  const src = flagMap[code.toLowerCase()] || flagMap.us;

  return (
    <img
      src={src}
      alt={`Flag of ${code.toUpperCase()}`}
      className={className}
      loading="lazy"
    />
  );
}
