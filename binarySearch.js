function bsearch(elements, value)
{
    var lowerBound = 0;
    var upperBound = elements.length-1;
    var mid;
    while(lowerBound<=upperBound)    //we should stop the loop once lb and ub pointers cross each other.
    {
        mid = Math.floor((lowerBound+upperBound)/2);  //when we perform division operation we will get decimal values. so we should use ceil() or floor() methods.
        if(elements[mid] === value)
        {
            console.log(`${value} is found at index ${mid}`);   //Once you found the value you should get out of the loop otherwise it goes to infinite.
            return;
        }
        else if(value <= elements[mid])
        {
            upperBound=mid-1;  //target value is on left half.
        }
        else
        {
            lowerBound=mid+1;  //target value is on right half.
        }
    }
    console.log(`${value} is not found...`);
}
const elements = [10,20,25,30,45,50,68,79,90];
bsearch(elements, 45);