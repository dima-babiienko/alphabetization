sortObject = function (){
    var arr = [], i;
    for(i in this){
        arr.push({index:i,content:this[i]});
        delete this[i];
    }
    arr.sort();
    for(i in arr){
        var item = arr[i];
        this[item.index] = item.content;
    }
    return this; // make chainable
}
var obj = {
    acronym: "OOP",
    definition: "Object-Oriented Programming",
    article: "http://wikipedia.org/OOP"
};
sortObject.apply(obj);