///// EXO 1

var divArray = $("#ce > div");
//Fonction de la Question 1
function func1(){
    divArray.eq(0).css('color','red');
      
}


//Fonction de la Question 2
function func2(){
    var firstDiv = divArray.eq(0).detach();
    $("#ce").append(firstDiv);
}

//Fonction de la Question 3
function func3(){
    var lastDiv = divArray.eq(divArray.length-1).detach();
    $("#ce").prepend(lastDiv);
}


//Fonction de la Question 4
function func4(){
    var divArrayf = $("#ce > div");
    var N= (divArrayf.length)+ 1;
    var nouvelleDiv = $("<div>").text("Nombre totale de div est : "+N).css('color','blue');
    $("#ce").append(nouvelleDiv);
}
//Fonction de la Question 5
function func5(){
    for( let i=0;i<divArray.length;i++ ){
        var texteDansLaDiv = divArray.eq(i).text();
        divArray.eq(i).text(i+1 +"." +texteDansLaDiv);

    }
}


///// EXO 2 
var divArray2 = $("#ce1 > .box");
    divArray2.eq(0).click(function(){
    for( let i=0;i<divArray2.length;i++ ){
        divArray2.eq(i).hide(1000*i);
        }
    setTimeout(function() {
            for( let i=0;i<divArray2.length;i++  ){
                divArray2.eq(i).show(1000*i);
            }}
            ,1000*(divArray2.length));
});

///// EXO 5
var lineArray = $("table tr > .r");
//Fonction de la Question 1
function func5_1(){
    for( let i=0;i<lineArray.length-2;i+3 ){
        let st=lineArray.eq(i).text()*lineArray.eq(i+1).text();
        lineArray.eq(i+2).text(" "+st);
        }
}


//Fonction de la Question 2
function func5_2(){
    var firstDiv = divArray.eq(0).detach();
    $("#ce5").append(firstDiv);
}

//Fonction de la Question 3
function func5_3(){
    divArray.eq(0).css('color','red');
      
}



  

