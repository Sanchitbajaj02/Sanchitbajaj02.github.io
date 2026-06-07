export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return date;
};
