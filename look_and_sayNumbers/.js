function lookAndSay(data,len){
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length
  
  let count = 1;
  let result = '';
  
  function countSeq(data)
  {
    let newNum = '';
    //loop
    for(let i = 0; i < data.length; i++)
    {
      if(data[i] === data[i+1])
      {
        count++;
      }
      else if(data[i] !== data[i+1])
      {
        newNum += (count.toString()+data[i]);
        count = 1;
      }
    }
    return newNum;
  }
  
  if(len===1 && data.length===1)
  {
    result += (count.toString()+data[i]);
    return result;
  }
  else if(len === 1)
  {
    result += countSeq(data);
    return result;
  }
  if(len>1)
  {
    let countResult = countSeq(data);
    result+=countResult+ ','
    console.log(result);
    result +=lookAndSay(countResult, len-1);
    console.log(result);
  }
  return result.split(',');
}
