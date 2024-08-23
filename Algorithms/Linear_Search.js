function Linear_Search(list, st, end, value)
{
    for(i = st; i< end;i++)
    {
        if(list[i] === value)
        {
            return i;
        }
    }

    return -1;
}

module.exports = Linear_Search;