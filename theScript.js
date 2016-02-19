/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    "use strict";
    $("#compinputs").hide();
    $("#results").hide();
    $(".main2").hide();
    setEquivListener();
    $("#add-comp").click(function() {
        // debugger;
        $("#compare").hide();
        $("#compinputs").show();
        $("#results").show();
    });

    function setEquivListener() {
        console.log("listener set")
        $(".see-equiv").click(function(){
            console.log($("#time").val());
            if ($("#time").val()) {
                $('html,body').animate({
                scrollTop: $(".main2").offset().top - 10
                });
            } else {
                console.log("here");
                alert("Enter your class");
            }
        });
    }
                                                                //Declare racing classes as variables. Arrays contains subclass and index number
    
    var street = [["Street Options"], ["SS", 0.835, 0], ["AS", 0.833, 0], ["BS", 0.826, 0], ["CS", 0.819, 0], ["DS", 0.811, 0], ["ES", 0.807, 0], ["FS", 0.814, 0], ["GS", 0.806, 0], ["HS", 0.798, 0], ["HCS", 0.817, 0], ["SSR", 0.860, 0]],
        street_touring = [["Street Touring Options"], ["STF", 0.809, 0], ["STS", 0.832, 0], ["STX", 0.836, 0], ["STR", 0.841, 0], ["STU", 0.845, 0], ["STP", 0.837, 0]],
        street_prepared = [["Street Prepared Options"], ["SSP", 0.872, 0], ["ASP", 0.865, 0], ["BSP", 0.863, 0], ["CSP", 0.867, 0], ["DSP", 0.855, 0], ["ESP", 0.852, 0], ["FSP", 0.840, 0]],
        cam = [["CAM Options"], ["CAM-C", 0.830, 0], ["CAM-T", 0.834, 0], ["CAM-S", 0.848, 0]],
        prepared = [["Prepared Options"], ["XP", 0.907, 0], ["BP", 0.883, 0], ["CP", 0.864, 0], ["DP", 0.879, 0], ["EP", 0.871, 0], ["FP", 0.880, 0], ["HCR", 0.838, 0]],
        street_mod = [["Street Mod Options"], ["SMF", 0.861, 0], ["SM", 0.870, 0], ["SSM", 0.882, 0]],
        mod = [["Mod Options"], ["AM", 1, 0], ["BM", 0.966, 0], ["CM", 0.916, 0], ["DM", 0.919, 0], ["EM", 0.920, 0], ["FM", 0.926, 0], ["FSAE", 0.982, 0], ["KM", 0.954, 0]],
        junior = [["Junior Options"], ["JA", 0.878, 0], ["JB", 0.842, 0], ["JC", 0.734, 0]],
        scca_class,
        subclass,
        runner,
        list,
        sublist;


                                                                //Push text into html subclass dropdown lists based on class chosen
    function subclasslist(player) {
        
        var subclass_iter = 0,
            myclass = "";
            
        if (player === 1) {
            scca_class = ($("#car_class").val());
            sublist = "#car_subclass";
        } else if (player === 2) {
            scca_class = ($("#comp_class").val());
            sublist = "#comp_subclass";
        }                                                       //Change string value to variable value
        switch (scca_class) {
        case "street":
            myclass = street;
            break;
        case "street_touring":
            myclass = street_touring;
            break;
        case "street_prepared":
            myclass = street_prepared;
            break;
        case "cam":
            myclass = cam;
            break;
        case "prepared":
            myclass = prepared;
            break;
        case "street_mod":
            myclass = street_mod;
            break;
        case "mod":
            myclass = mod;
            break;
        case "junior":
            myclass = junior;
            break;
        default:
        }
        for (subclass_iter = 0; subclass_iter < myclass.length; subclass_iter += 1) {
            list = '<option value="' + myclass[subclass_iter] + '">' + myclass[subclass_iter][0] + '</option>';
            $(sublist).append(list);
        }
        
    }
    
        

                                                                //Calculates resluts and returns message to user
    function run_results(player) {
        var indexClass = ($("#car_subclass").val()),
            index = indexClass.split(",")[1],
            comp_indexClass = ($("#comp_subclass").val()),
            comp_index = comp_indexClass.split(",")[1],
            winningTime = null,
            diff_time = 0,
            indexTime = $("#time").val() * index,
            comp_indexTime = $("#comp_time").val() * comp_index,
            table_loc = "",
            class_array = [street, street_touring, street_prepared, cam],
            class_array2 = [prepared, street_mod, mod, junior],
            item = "",
            listclass = "",
            subclass_iter = 1;
        console.log("Player 1: " + indexTime);
        
        console.log("Player 2: " + comp_indexTime);
        

        if (indexTime === 0 && comp_indexTime > 0) {
            winningTime = (comp_indexTime / index).toFixed(3);
            $("#resultComment").text("You will need better than " + winningTime + " to win.");
        } else if (indexTime > 0 && comp_indexTime === 0) {
            winningTime = (indexTime / comp_index).toFixed(3);
            $("#resultComment").text("Your competitor will need better than " + winningTime + " to win.");
        } else if (indexTime < comp_indexTime) {
            diff_time = (comp_indexTime - indexTime).toFixed(3);
            $("#resultComment").text("You won by " + diff_time + "!");
        } else if (indexTime > comp_indexTime) {
            diff_time = (indexTime - comp_indexTime).toFixed(3);
            $("#resultComment").text("Sorry, you lost by " + diff_time + ".");
        } else if (indexTime === comp_indexTime) {
            if ((indexTime + comp_indexTime) > 0) {
                $("#resultComment").text("We have a tie.");
            } else {
                $("#resultComment").text("Enter at least one time.");
            }
        } else {
            $("#resultComment").text("Both racers' classes are needed.");
        }


        if (player === 1 && indexTime > 0) {
            $(".main2").show();
            table_loc = "#index_table";
            makeDropdown(table_loc, class_array);

            table_loc = "#index_table2";
            makeDropdown(table_loc, class_array2);
       }

        function makeDropdown(table_loc, class_array){
            for (item in class_array) {
                    listclass = class_array[item];
                    // console.log(listclass);
                    for (subclass_iter = 1; subclass_iter < listclass.length; subclass_iter += 1) {
                        $(table_loc).append(listclass[subclass_iter][0] + "&emsp;" + (indexTime / listclass[subclass_iter][1]).toFixed(3) + "<br />");
                    }
                    $(table_loc).append("<br>");
            }
        }
    }


                                                                //Respond to user inputs
                                                                //populate subclass dropdown
    $("#car_class").change(function () {
        $("#car_subclass").empty();
        $("#index_table").empty();
        $("#index_table2").empty();
        runner = 1;
        subclasslist(runner);
    });
    $("#comp_class").change(function () {
        $("#comp_subclass").empty();
        $("#comp_index_table").empty();
        runner = 2;
        subclasslist(runner);
    });
                                                                //determine index number and return to view
    $("#car_subclass").change(function () {
        var indexClass = ($("#car_subclass").val()),
            index = indexClass.split(",")[1];
        $("#cl_num").text(index);
        $('#time').removeAttr('disabled'); 
    });
    $("#comp_subclass").change(function () {
        var indexClass = ($("#comp_subclass").val()),
            index = indexClass.split(",")[1];
        $("#comp_num").text(index);
        $('#comp_time').removeAttr('disabled'); 
    });
                                                                //Update results display with changes
    $("#time").change(function () {
        $("#index_table").empty();
        $("#index_table2").empty();
        $(".main2").hide();
        run_results(1);
        $("#car_subclass").change(function () {
            run_results(1);
    });
    });
    $("#comp_time").change(function () {
        run_results();
        $("#comp_subclass").change(function () {
            run_results();
    });
    });


});