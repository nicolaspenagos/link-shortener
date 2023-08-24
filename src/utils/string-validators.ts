export const isValidUrl = (url: string) => {
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

export const isValidHalfBack = (
  url: String,
  takensUrls: string[],
  backHalf: string
) => {
  console.log(takensUrls);
  if (takensUrls.includes(backHalf) || !isValidUrl(url + backHalf))
    return false;
  return true;
};

export const parseUrlProtocol = (url: string) => {
  const pattern = /^(http|https|ftp|ftps):\/\//;
  if (!pattern.test(url)) {
    return "http://" + url;
  }
  return url;
};
