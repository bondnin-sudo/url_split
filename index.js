function domainName(url){
  if (url.split("//www.").length === 2) {
    return url.split("//www.")[1].split(".")[0]
  }
  if (url.split("//").length === 2) {
    return url.split("//")[1].split(".")[0]
  }
  if (url.split("www.").length === 2) {
    return url.split("www.")[1].split(".")[0]
  }
  return url.split(".")[0]
}