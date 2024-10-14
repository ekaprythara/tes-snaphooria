// Mencari Nilai Terbesar
const numbers = [1, 5, 3, 7, 2];

const getHighestNum = (array) => {
	return Math.max(...array);
}

const result = getHighestNum(numbers);

console.log(result); // 7

// Mengurutkan Angka dari Terkecil ke Terbesar
const numbers2 = [3, 1, 5, 2, 4];

const sortAscending = (array) => {
  return array.sort((a, b) => a - b);
}

const result2 = sortAscending(numbers2);

console.log(result2)  // [1, 2, 3, 4, 5]
