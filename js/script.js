function price()
{
    //alert("Welcome to price");
    var pp=parseInt(document.getElementById("pp").innerHTML);
    //alert(pp);
    var qty=parseInt(document.getElementById("qty").value);
    document.getElementById("pno").innerHTML=qty+ " items";
    document.getElementById("pno2").innerHTML=qty+ " items";
    //alert(qty);
    var pprice=parseInt(qty*pp);
    //alert(pprice);
    document.getElementById("sp").innerHTML=pprice;
    document.getElementById("sp1").innerHTML=pprice;
}