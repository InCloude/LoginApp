var entrar = {
    initialize: function(email,senha) {
        $('#btn-submit').click(function(){
             $.ajax({
                url: "http://terapp.inclou.de/index.php/app/login",
                method: "POST",
                data: "&0="+ email+"&1="+senha,
                dataType: "text",
                success: function(result){
                    alert(result+"\nLogou!");
                },
                fail: function(result){
                    alert(result+"\nFalhou!");
                }
            });
        });
    }
};