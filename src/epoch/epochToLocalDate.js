import dateString from './epoch'

function getOffset(date) {
  return parseFloat(date.getTimezoneOffset() / 60 * -1).toFixed(2)
}

function epochToLocalDate(value) {
  if (!value && value !== 0) return ''
  var date = new Date()
  date.setTime(value * 1000)
  return dateString(date, getOffset(date))
}
export default epochToLocalDate
