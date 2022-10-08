
// will loop through the years and find the first object whose cond returns true based on callback
function superbowlWin(record){
  const win = record.find(({result}) => result === "W");
  if (win){
    return win.year;
  }
  else {
    return undefined
  }
}
   
    
  
  
//will find the first year
