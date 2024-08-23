function GetMin(list, st, end)
{
    mini = 1e9;
    for(i = st;i<end;i++)
    {
        if(list[i] < mini)
        {
            mini = list[i];
        }
    }

    return mini;
}
module.exports = GetMin;
