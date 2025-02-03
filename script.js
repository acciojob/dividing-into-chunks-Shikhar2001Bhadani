const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let chunks = [];
	let currentChunks = [];
	let currentSum = 0;
	for (let num of arr) {
		if(currentSum+num<=n){
			currentChunks.push(num);
			currentSum +=num;
		}
		else{
			chunks.push(currentChunks);
			currentChunks=[num];
			currentSum = num;
		}
			
	}
	if(currentChunks.length>0){
		chunks.push(currentChunks);
	}
	return chunks;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
