import moment from 'moment';

export function format_date(date, format = "MMMM D, YYYY") {
  var $moment;
  if(date) {
    $moment = moment(date);
  }
  else {
    $moment = moment();
  }
  
  return $moment.format(format);
}