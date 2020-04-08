const BASE_URL = 'http://skunkworks.ignitesol.com:8000/books/';

export const getBooks = (params, nextUrl) => {
  let urlParams = new URLSearchParams({ mime_type: "image/", ...params });
  let currentUrl = `${BASE_URL}?${urlParams}`;
  if(nextUrl && nextUrl !== "") {
      currentUrl = nextUrl;
  }
  return(fetch(currentUrl));
}

