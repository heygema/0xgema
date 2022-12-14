export function getArticleDate(date: string) {
  const year = new Date(date).toLocaleString("en-US", {
    year: "numeric",
  });
  const month = new Date(date).toLocaleString("en-US", {
    month: "long",
  });
  const day = new Date(date).toLocaleString("en-US", {
    day: "2-digit",
  });

  return {
    year,
    month,
    day,
  };
}
