export const isValidUrl = (url) => {
  var urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!urlPattern.test(url);
};

export const isValidHalfBack = ( url, takensUrls, backHalf)  => {
  console.log(takensUrls);
  console.log(backHalf);
  console.log(url);
  if (takensUrls.includes(backHalf) || !isValidUrl(url+backHalf)) return false;
  return true;
};
