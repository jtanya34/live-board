import moment from "moment-timezone";

export const timeDiff = (time) =>{
    const momentObj = moment(time);
  const diffInDays = momentObj.diff(moment(), 'days');
  if(diffInDays < 0){
      return "past"
  }else if(diffInDays === 0){
      return "live"
  }else{
      return "upcoming"
  }
}

export const timeDiffString = (time) =>{
    const momentObj = moment(time);
  const diffInDays = momentObj.diff(moment(), 'days');
  if(diffInDays < 0){
      return `${0-diffInDays} Days Ago`
  }else if(diffInDays === 0){
      return "live"
  }else{
      return `${diffInDays} Days Ahead`
  }
}