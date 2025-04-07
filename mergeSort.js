/* merge sort algorithm is used to sort the array based on divide and conquer technique. It will split the array into two halves.
until it comes to single unit. After that it will merge the two halves in sorting order.

*/
//merge() function is used to merge the two subarrays.
function merge(num,lowerBound,mid,upperBound)
{
    const temp = [];     //take an empty array to push the sorted elements.
    let left=lowerBound, right=mid+1;           //Here we have two subarrays which are sorted itself.
    //left is pointing to first element of first subarray and right is pointing to first element of second subarray.
    //Inorder to sort these subarrays. we have to loop until the end of two subarrays. Here mid is points to last element of first subarray.
    while(left<=mid && right <= upperBound)
    {
        //check whether first element of first subarray is lesser than first element of second subarray.
        if(num[left]<=num[right])   
        {
            temp.push(num[left]);       //adding element at last in temp array.
            left++;                    
        }
        else
        {
            temp.push(num[right]);
            right++;                    //increment right
        }    
    }
    //If the left subarray has elements then we can directly add to temp because it already sorted.
    while(left<=mid)
    {
        temp.push(num[left]);
        left++;
    }
    //Incase of rightsubarray also we can directly add those.
    while(right<=upperBound)
    {
        temp.push(num[right]);
        right++;
    }
    //we have to make changes in original array as well. we have to copy elements from temp.
    for(let i=lowerBound;i<=upperBound;i++)
    {
        num[i]=temp[i-lowerBound];  //here (i-lb) means every time temp is starts from 0. we have to copy values from index 0;
    }
}

function mergeSort(numbers,lowerBound,upperBound)
{
    if(lowerBound>=upperBound) return;      //This is the base condition. It will check subarray has single element or not to stop dividing.
    const mid = Math.floor((lowerBound+upperBound)/2);      //calculate the mid value.
    mergeSort(numbers,lowerBound,mid);              //calling mergeSort() function to divide left subarray.
    mergeSort(numbers,mid+1,upperBound);            //calling this function to divide right subarray.
    merge(numbers,lowerBound,mid,upperBound);               //Once dividing is over it starts to merge the two subarray.
}

const numbers = [9,4,1,7,2,9,7,6,2,0,8,5,1];
mergeSort(numbers,0,numbers.length-1);   //calling the mergeSort() function to divide the array.
console.log(numbers);  //prints the sorted array.
