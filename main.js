// input the value
function insert(num){
    document.form.textview.value = document.form.textview.value+num
}
// shows equal
function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}
// cleans the value
function clean(){
    document.form.textview.value = " ";
}
// cleans one number for each pressing
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}