function calcular(){
let item1=document.getElementById('prod1');//1er item factura
let item2=document.getElementById('prod2');//2do item factura
let item3=document.getElementById('prod3');//3er item factura
//1er item factura
if(item1.selectedIndex==0){//cuando se pide nada en item factura
    document.getElementById('desc01').value="";//descricion
    document.getElementById('vau01').value=0; //valor precio u
    document.getElementById('cant01').value=0; //cantidad
    document.getElementById('vat01').value=0; //valor total
}
if(item1.selectedIndex==1){ 
    document.getElementById('desc01').value="Hamburguesa americana+Gaseosa+Papas F"; //descripcion del combo
    document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor unitario
    document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
    }
    if(item2.selectedIndex==1){ 
        document.getElementById('desc01').value="Perro Americano+Gaseosa+Papas F"; //descripcion del combo
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor unitario
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
        }
        if(item3.selectedIndex==1){ 
            document.getElementById('desc01').value="Pizza americana+Gaseosa+Papas F"; //descripcion del combo
            document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor unitario
            document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
            }
            //2do item factura**
if(item2.selectedIndex==0){//cuando se pide nada en item factura
    document.getElementById('desc02').value="";//descricion
    document.getElementById('vau02').value=0; //valor precio u
    document.getElementById('cant02').value=0; //cantidad
    document.getElementById('vat02').value=0; //valor total
}
if(item2.selectedIndex==1){ 
    document.getElementById('desc02').value="Hamburguesa americana+Gaseosa+Papas F"; //descripcion del combo
    document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor unitario
    document.getElementById('vat02').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
    }
    if(item2.selectedIndex==2){ 
        document.getElementById('desc02').value="Perro Americano+Gaseosa+Papas F"; //descripcion del combo
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor unitario
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); //valor total
        }
        if(item2.selectedIndex==3){ 
            document.getElementById('desc02').value="Pizza americana+Gaseosa+Papas F"; //descripcion del combo
            document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor unitario
            document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);// valor total
            }
 //3er item factura***********
    if(item3.selectedIndex==0){//cuando se pide nada en item factura
    document.getElementById('desc03').value="";//descricion
    document.getElementById('vau03').value=0; //valor precio u
    document.getElementById('cant03').value=0; //cantidad
    document.getElementById('vat03').value=0; //valor total
}
if(item3.selectedIndex==1){ 
    document.getElementById('desc03').value="Hamburguesa americana+Gaseosa+Papas F"; //descripcion del combo
    document.getElementById('vau03').value=item2.options[item3.selectedIndex].value; //valor unitario
    document.getElementById('vat03').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); // valor total
    }
    if(item3.selectedIndex==2){ 
        document.getElementById('desc03').value="Perro Americano+Gaseosa+Papas F"; //descripcion del combo
        document.getElementById('vau03').value=item2.options[item3.selectedIndex].value; //valor unitario
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);//valor total
        }
        if(item3.selectedIndex==3){ 
            document.getElementById('desc03').value="Pizza americana+Gaseosa+Papas F"; //descripcion del combo
            document.getElementById('vau03').value=item2.options[item3.selectedIndex].value; //valor unitario
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); // valor total
            }
            //calcular los adicionales 
            if (document.getElementById('radio4').checked){ //marca cerbeza 
                document.getElementById('adic0').value=3000;
            }else if(document.getElementById('radio5').checked){ //marca helado
                document.getElementById('adic0').value=2500;
            }else if(document.getElementById('radio6').checked){ //marca jugo hit
                document.getElementById('adic0').value=2300;
}
//calcular subtotal **********
document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)||0).toFixed(0);
//calcular IVA
document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19||0).toFixed(0);
//calcular el descuento
if(document.getElementById('radio1').checked){ // marcado efectivo
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10||0).toFixed(0);
}else if(document.getElementById('radio2').checked){ //mercado nequi
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
}else if(document.getElementById('radio3').checked){ //mercado tarjeta credito
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
}
// calcular el neto
document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)||0).toFixed(0);
}