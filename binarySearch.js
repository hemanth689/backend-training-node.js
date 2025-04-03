function bsearch(elements, val)
{
    var lb = 0;
    var ub = elements.length-1;
    var mid;
    while(lb<=ub)    //we should stop the loop once lb and ub pointers cross each other.
    {
        mid = Math.floor((lb+ub)/2);  //when we perform division operation we will get decimal values. so we should use ceil() or floor() methods.
        if(elements[mid] === val)
        {
            console.log(`${val} is found at index ${mid}`);   //Once you found the value you should get out of the loop otherwise it goes to infinite.
            return;
        }
        else if(val <= elements[mid])
        {
            ub=mid-1;  //target value is on left half.
        }
        else
        {
            lb=mid+1;  //target value is on right half.
        }
    }
    console.log(`${val} is not found...`);
}
const elements = [10,20,25,30,45,50,68,79,90];
bsearch(elements, 45);