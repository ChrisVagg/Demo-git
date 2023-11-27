const searchInsert=(nums,target,left,right,pos)=>{
  
    if(left>right)
      return pos;
    
    let mid=Math.floor((right+left)/2);
    
    if(nums[mid]===target)
      return mid;
  
    if(target<nums[mid])
      return searchInsert(nums,target,left,mid-1,mid)
    
    return searchInsert(nums,target,mid+1,right,mid)
  
}