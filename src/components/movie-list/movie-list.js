


 export async function fetchMoviesData(url) {
    const response = await fetch(url);
    const data = await response.json();
  // console.log (data.results)
    if (data?.success === false)
      throw new Error(
        `Error: ${data?.status_message ?? "something whent wrong"}`
      );
  
    return data;
  }
