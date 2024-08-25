// first Lower bound means greater than or equal to val

function lower_bound(list, st, end, val)
{
     var mid = (st+end)/2;
     var ans = Math.INT_MAX;
     while(st <= end)
     {
        if(list[mid] == val)
        {
            ans = Math.min(ans, mid);
            end = mid-1;
        }
        else if(list[mid] < val)
        {
            st = mid+1;
        }
        else 
        {
            end = mid - 1;
        }
     }

     if(ans = INT_MAX)
     {
        ans = -1;
     }

     return ans;
}

module.exports = lower_bound;