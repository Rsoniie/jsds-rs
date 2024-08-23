console.log("Binary Search page is read");

function Binary_Search(list, st, end , value)
{ 
   var mid = (st+end)/2;
   
   while(st <= end)
   {
      if(list[mid] == value)
      {
         return mid;
      }
      else if(list[mid] > value)
      {
         end = mid-1;  
      }
      else
      {
        st = mid+1;
      }

      mid = (st+end)/2;
   }

   return -1;
}

module.exports = Binary_Search;