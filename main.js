$(document).ready(function (){
    $('#ok').hide();
    $('#okimg').hide();
    $('#notok').hide();
    $('#notokimg').hide();
    $('#btn').click(function(){
        var x1 = $('#width').val();
        var x2 = $('#height').val();
        var x3 = $('#colors').val();
        var res = x1 * x2;
        var i = 0;
        while(x3 % 2 == 0)
        {
            x3 /= 2;
            i++;
        }
        res *= i;
        res = res/1000;
        if(res < 10)
        {
            $('.number').html(res);
            $('#ok').show();
            $('#okimg').show();
        }
        else 
        {
            $('.number').html(res);
            $('#notok').show();
            $('#notokimg').show();
        }
    });
});
