function upper_bound(list, st, end, val)
{
    var mid = (st + end)/2;
    var ans = Math.INT_MAX;
    while(st <= end)
    {
        if(list[mid] > val)
        {
            ans = mid;
            end = mid-1;
        }
        else 
        {
            st = mid+1;
        }
    }

    if(ans == Math.INT_MAX)
    {
        ans = 1;
    }

    return ans;
}

module.exports = upper_bound;