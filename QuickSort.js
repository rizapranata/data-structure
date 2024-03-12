function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
  
    const left = arr.filter(element => element < pivot);
    const middle = arr.filter(element => element === pivot);
    const right = arr.filter(element => element > pivot);

    console.log("pivot:", pivot);
    console.log("left:", left);
    console.log("middle:", middle);
    console.log("right:", right);
  
    // return [...quicksort(left), ...middle, ...quicksort(right)];
  }
  
  // Example usage:
  const unsortedArray = [3, 1, 4, 1, 15, 9, 2, 6, 5, 3, 5];
  const sortedArray = quicksort(unsortedArray);
  console.log(sortedArray);

  
  export default quicksort;