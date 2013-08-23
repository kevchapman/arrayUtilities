#arrayUtilities
Array functions
##api
| contains('string') | return a boolen if the array contains the string
| containsProp('key','val') | returns an array of objects if they contain the prop and value passed
##Usage
``` html
<script>
	var array1 = [
		'one',
		'two',
		'three',
		'four'
	];
	var array2 = [
		{
			name:'name1',
			age:22
		},
		{
			name:'name2',
			age:18
		},
		{
			name:'name3',
			age:22
		},
		{
			name:'name1',
			age:8
		}
	];
	array1.contains('one'); // true;
	array1.contains('five'); // false;
	array2.containsProp('name','name2'); // [{name: 'name2', age: 18}];
	array2.containsProp('name','bob'); // []
</script>
```