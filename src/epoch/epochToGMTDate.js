import dateString from './epoch'

function epochToGMTDate(value) {
  if (!value && value !== 0) return ''
  var date = new Date()
  date.setTime(value * 1000)
  return dateString(date, +0.00)
}
export default epochToGMTDate
