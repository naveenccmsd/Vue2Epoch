import dateString from './epoch'

function dateStringToEpoch(strDate) {
  return Date.parse(strDate) / 1000
}
export default dateStringToEpoch
