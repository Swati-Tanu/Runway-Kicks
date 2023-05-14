let cardNum=document.getElementById('number');
    let cvv=document.getElementById('cvv');


    
    function confirm(){
        if(cardNum.value.length==16 && cvv.value.length==3){ 
            alert('Payment successful')
            window.location='order.html'
        }

        else {
            alert('Incorrect credentials')
        }
    }