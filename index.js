function getQueryString(uri = window.location.href, except = []) {
  const url = decodeURIComponent(uri)
  const exceptStr = except.join('')
  const result = url && url.match(new RegExp(`[?#&/${exceptStr}][^?#&/${exceptStr}]+=[^?#&/${exceptStr}]+`, 'g'))
  // console.info(result)
  if (result) {
    return result.map(elem => elem.substring(1)).reduce((acc, elem) => {
      const elemList = elem.split('=')
      acc[elemList[0]] = elemList[1]
      return acc
    }, {})
  } else {
    return {}
  }
}

module.exports = getQueryString