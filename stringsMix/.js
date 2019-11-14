function mix(s1, s2) {
  const obj = {
    1: {},
    2: {},
};
const len = s1.length > s2.length ? s1.length : s2.length;
let cnt = 0;
	while (cnt < len) 
	{
		if (s1[cnt] && s1[cnt].match(/^[a-z]/)) createObj(s1[cnt], obj['1']);
		if (s2[cnt] && s2[cnt].match(/^[a-z]/)) createObj(s2[cnt], obj['2']);
		cnt++;
	}
	function createObj(isChar, obj) 
	{
		if (isChar && isChar.match(/^[a-z]/))
		{
			if (!obj[isChar]) 
				obj[isChar] = 1;
			else
				obj[isChar]++;
		}
	}
    //compare the values of the strings
	const arr = [];
	for (let char in obj['1']) 
	{
		if (obj['1'][char] > 1 || obj['2'][char] > 1) 
		{
			if (obj['1'][char] && !obj['2'][char]) 
			{
				arr.push(`1:${char.repeat(obj['1'][char])}`);
			} 
			else 
			{
				if (obj['1'][char] > obj['2'][char]) 
				{
					arr.push(`1:${char.repeat(obj['1'][char])}`);
				} 
				else if (obj['1'][char] === obj['2'][char]) 
				{
					arr.push(`=:${char.repeat(obj['1'][char])}`);
				} 
				else if (obj['1'][char] < obj['2'][char]) 
				{
					arr.push(`2:${char.repeat(obj['2'][char])}`);
				}
			}
		}
	}
	for (let char in obj['2']) {
		if (obj['2'][char] > 1 && (!obj['1'][char] && obj['2'][char])) 
		{
			arr.push(`2:${char.repeat(obj['2'][char])}`);
		}
	}
	arr.sort((a, b) => 
	{
		let [n1, str1] = a.split(':');
		let [n2, str2] = b.split(':');
		let sort = 0;

		if (str1.length > str2.length) 
		{
			sort = -1;
		} 
		else if (str1.length < str2.length)
	    {
			sort = 1;
		} 
		else if (str1.length === str2.length) 
		{
			if (n1 > n2) {
				sort = 1;
			} else if (n1 < n2) {
				sort = -1;
			} else if (n1 === n2) {
				if (str1 > str2) {
					sort = 1;
				} else if (str1 < str2) {
					sort = -1;
				}
			}
		}
	return sort;
	});
	console.log(arr);
	return arr.join('/');
}
