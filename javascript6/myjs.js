var shuzu = ['关羽','张飞','马超','赵云','黄忠','刘备','姜维','曹操'];
console.log(shuzu.length);
for (i = 0; i <= shuzu.length-1; i++){
    console.log(shuzu[i]);
}
console.log(shuzu.length);


var date = [2,6,1,7,4];
var sum = 0;
var average = 0;
for(i = 0; i<= date.length-1; i++){
   sum = sum + date[i];// sum += date[i];
};
average = sum / date.length;
alert(sum);
alert(average);
console.log(sum,average);

/* var numbe = [2,6,1,77,52,25,7];
var max = 2;
for(i = 1; i <= 7; i++){
    if (max < numbe[i]){
        console.log(numbe[i]);
    }else {
        console.log(number[i]);
    }
} */
var numbe = [2,6,1,77,52,25,7];
var max = numbe[0];
for (i = 1; i < numbe.length; i++){
    if(max < numbe[i]){
        max = numbe[i]
    }
}
alert(max);

var numb = [2,6,1,77,52,25,7];
var min = numb[0];
for (i = 1; i < numb.length; i++){
    if(numb[i] < min){
        min = numb[i];
    };
}
alert(min);













