function dirReduc(arr){
  // ...
  for(var i=0; i<arr.length; i++)
  {
    if(arr[i] === "NORTH" && arr[i+1] ==="SOUTH" )
    {
      arr.splice(i, 2);
      i = i - 2;
      continue;
    }
    if(arr[i] === "EAST" && arr[i+1] ==="WEST" )
    {
      arr.splice(i, 2);
      i = i - 2;
      continue;
    }
    if(arr[i] === "WEST" && arr[i+1] ==="EAST" )
    {
      arr.splice(i, 2);
      i = i - 2;
      continue;
    }
    if(arr[i] === "SOUTH" && arr[i+1] ==="NORTH" )
    {
      arr.splice(i, 2);
      i = i - 2;
      continue;
    }
  }
    return arr;
}
