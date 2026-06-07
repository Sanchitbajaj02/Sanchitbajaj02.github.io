export const getBlogs = async () => {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=solitrix02`,
      {
        method: "GET",
        headers: {
          accept: "application/vnd.forem.api-v1+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data && Array.isArray(data) ? data.slice(0, 10) : [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
