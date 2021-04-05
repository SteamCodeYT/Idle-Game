$(document).ready(function(){
    var logs = 0;
    var stone = 0;
    var pickaxes = 0;
    var money = 0;
    var logPlus = 1;
    var stonePlus = 1;
    var autoLogPlus = 0;
    var autoChopperPrice = 100;
    var pickaxePrice = 50;
    var logPrice = 1;
    var menu;

    setInterval(function(){
        logs += autoLogPlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#chop").click(function(){
        logs += logPlus;
        changeInventory();
        changeMarket();
    });

    $("#mineStone").click(function(){
        if(pickaxes == 0){
            alert("You have nothing to mine stone with!");
        }else{
            stone += stonePlus;
            changeInventory();
        }
    });

    $("#sell1").click(function(){
        logs--;
        money += logPrice;
        changeInventory();
        changeMarket();
    });

    $("#sell10").click(function(){
        logs-=10;
        money += logPrice * 10;
        changeInventory();
        changeMarket();
    });

    $("#sellAll").click(function(){
        money += logPrice * logs;
        logs = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        money -= autoChopperPrice;
        autoLogPlus++;
        changeInventory();
        changeMarket();
    });

    $("#buyPickaxe").click(function(){
        money -= pickaxePrice;
        pickaxes++;
        changeInventory();
        changeMarket();
    });


    $("#visit").click(function(){
        menu = switchMenu("marketplace");
        changeMarket();
    });

    $("#return").click(function(){
        menu = switchMenu("main");
    });


    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(logs == 1){
            $("#logs").html("You now own " + logs + " log.");
        }else{
            $("#logs").html("You now own " + logs + " logs.");
        }

        if(stone > 0){
            $("#stone").html("You now own " + stone + " piece(s) of stone.");
        }else{
            $("#stone").html("");
        }

        if(pickaxes > 0){
            $("#pickaxes").html("You now own " + pickaxes + " pickaxe(s).");
        }else{
            $("#pickaxes").html("");
        }
    }

    function changeMarket(){
        if(logs > 0){
            $("#sellAll").css("display", "block");
        }else{
            $("#sellAll").css("display", "none");
        }
        if(logs >= 1){
            $("#sell1").css("display", "block");
        }else{
            $("#sell1").css("display", "none");
        }
        if(logs >= 10){
            $("#sell10").css("display", "block");
        }else{
            $("#sell10").css("display", "none");
        }

        if(money >= autoChopperPrice){
            $("#autoChopper").css("display", "block");
        }else{
            $("#autoChopper").css("display", "none");
        }

        if(money >= pickaxePrice){
            $("#buyPickaxe").css("display", "block");
        }else{
            $("#buyPickaxe").css("display", "none");
        }
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu;
    }
});