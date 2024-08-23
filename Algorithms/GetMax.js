function GetMax(list, st, end)
{
    maxi = -1e9;
    for(i = st;i<end;i++)
    {
        if(list[i] > maxi)
        {
            maxi = list[i];
        }
    }

    return maxi;
}
module.exports = GetMax;
