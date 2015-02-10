/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
    "use strict";

    //variables are car classes. Array contains subclass and index number
    var street = [["Street Options"], ["SS", 0.835, 0], ["AS", 0.829, 0], ["BS", 0.826, 0], ["CS", 0.814, 0], ["DS", 0.812, 0], ["ES", 0.808, 0], ["FS", 0.810, 0], ["GS", 0.806, 0], ["HS", 0.796, 0], ["SSR", 0.859, 0]],
        street_touring = [["Street Touring Options"], ["STF", 0.801, 0], ["STS", 0.828, 0], ["STX", 0.831, 0], ["STR", 0.838, 0], ["STU", 0.844, 0]],
        street_prepared = [["Street Prepared Options"], ["SSP", 0.871, 0], ["ASP", 0.865, 0], ["BSP", 0.863, 0], ["CSP", 0.861, 0], ["DSP", 0.854, 0], ["ESP", 0.849, 0], ["FSP", 0.840, 0]],
        cam = [["CAM Options"], ["CAM-C", 0.830, 0], ["CAM-T", 0.825, 0], ["CAM-S", 0.836, 0]],
        prepared = [["Prepared Options"], ["XP", 0.905, 0], ["BP", 0.881, 0], ["CP", 0.864, 0], ["DP", 0.879, 0], ["EP", 0.874, 0], ["FP", 0.880, 0]],
        street_mod = [["Street Mod Options"], ["SMF", 0.853, 0], ["SM", 0.870, 0], ["SSM", 0.882, 0]],
        mod = [["Mod Options"], ["AM", 1, 0], ["BM", 0.965, 0], ["CM", 0.922, 0], ["DM", 0.92, 0], ["EM", 0.926, 0], ["FM", 0.924, 0], ["FSAE", 0.989, 0], ["KM", 0.975, 0]],
        junior = [["Junior Options"], ["JA", 0.880, 0], ["JB", 0.842, 0], ["JC", 0.741, 0]],
        subclass_iter = 0;

    function calcIndex() {
        $("#car_subclass").change(function () {});
        $("#time").change(function () {

        });
    }
        //function pushes text into html car_subclass dropdown list based on car_class chosen
    function subclasslist() {
        $("#car_class").change(function () {
            $("#car_subclass").empty();
            var scca_class = ($("#car_class").val());
            switch (scca_class) {
            case "street":
                for (subclass_iter = 0; subclass_iter < street.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + street[subclass_iter] + ">" + street[subclass_iter][0] + "</option>");
                }
                break;
            case "street_touring":
                for (subclass_iter = 0; subclass_iter < street_touring.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_touring[subclass_iter] + ">" + street_touring[subclass_iter][0] + "</option>");
                }
                break;
            case "street_prepared":
                for (subclass_iter = 0; subclass_iter < street_prepared.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_prepared[subclass_iter] + ">" + street_prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "cam":
                for (subclass_iter = 0; subclass_iter < cam.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + cam[subclass_iter] + ">" + cam[subclass_iter][0] + "</option>");
                }
                break;
            case "prepared":
                for (subclass_iter = 0; subclass_iter < prepared.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + prepared[subclass_iter] + ">" + prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "street_mod":
                for (subclass_iter = 0; subclass_iter < street_mod.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_mod[subclass_iter] + ">" + street_mod[subclass_iter][0] + "</option>");
                }
                break;
            case "mod":
                for (subclass_iter = 0; subclass_iter < mod.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + mod[subclass_iter] + ">" + mod[subclass_iter][0] + "</option>");
                }
                break;
            case "junior":
                for (subclass_iter = 0; subclass_iter < junior.length; subclass_iter += 1) {
                    $("#car_subclass").append("<option class='subclass' value=" + junior[subclass_iter] + ">" + junior[subclass_iter][0] + "</option>");
                }
                break;
            default:
            }
            calcIndex();
        });
    }

        //function pushes text into html comp_subclass dropdown list based on comp_class chosen
    function comp_subclasslist() {
        $("#comp_class").change(function () {
            $("#comp_subclass").empty();
            var scca_class = ($("#comp_class").val());
            switch (scca_class) {
            case "street":
                for (subclass_iter = 0; subclass_iter < street.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street[subclass_iter] + ">" + street[subclass_iter][0] + "</option>");
                }
                break;
            case "street_touring":
                for (subclass_iter = 0; subclass_iter < street_touring.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_touring[subclass_iter] + ">" + street_touring[subclass_iter][0] + "</option>");
                }
                break;
            case "street_prepared":
                for (subclass_iter = 0; subclass_iter < street_prepared.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_prepared[subclass_iter] + ">" + street_prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "cam":
                for (subclass_iter = 0; subclass_iter < cam.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + cam[subclass_iter] + ">" + cam[subclass_iter][0] + "</option>");
                }
                break;
            case "prepared":
                for (subclass_iter = 0; subclass_iter < prepared.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c-subclass' value=" + prepared[subclass_iter] + ">" + prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "street_mod":
                for (subclass_iter = 0; subclass_iter < street_mod.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_mod[subclass_iter] + ">" + street_mod[subclass_iter][0] + "</option>");
                }
                break;
            case "mod":
                for (subclass_iter = 0; subclass_iter < mod.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + mod[subclass_iter] + ">" + mod[subclass_iter][0] + "</option>");
                }
                break;
            case "junior":
                for (subclass_iter = 0; subclass_iter < junior.length; subclass_iter += 1) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + junior[subclass_iter] + ">" + junior[subclass_iter][0] + "</option>");
                }
                break;
            default:
            }

        });
    }


    $("#results").click(function (indexTime, comp_indexTime) {
        var indexClass = ($("#car_subclass").val()),
            index = indexClass.split(",")[1],
            comp_indexClass = ($("#comp_subclass").val()),
            comp_index = comp_indexClass.split(",")[1],
            winningTime = null,
            diff_time = 0;
        console.log(index);
        indexTime = $("#time").val() * index;
        console.log("Player 1: " + indexTime);
        console.log(comp_index);
        comp_indexTime = $("#comp_time").val() * comp_index;
        console.log("Player 2: " + comp_indexTime);

        if (indexTime === 0 && comp_indexTime > 0) {
            winningTime = (comp_indexTime / index).toFixed(3);
            $("#resultComment").text("You will need better than " + winningTime + " to win.");
        } else if (indexTime > 0 && comp_indexTime === 0) {
            winningTime = (indexTime / comp_index).toFixed(3);
            $("#resultComment").text("Your competitor will need better than " + winningTime + " to win.");
        } else if (indexTime < comp_indexTime) {
            diff_time = (comp_indexTime-indexTime).toFixed(3);
            $("#resultComment").text("You won by " + diff_time +"!");
        } else if (indexTime > comp_indexTime) {
            $("#resultComment").text("Sorry, you lost by " + + diff_time + ".");
        } else if (indexTime === comp_indexTime) {
            $("#resultComment").text("We have a tie.");
        } else {
            $("#resultComment").text("Sorry, we don't have enough information.");

        }

    });



    $('.classlist').hide(); //hide the class list until no prosolo is checked
    $('.comp_classlist').hide(); //hide the class list until no prosolo is checked

    //Function reveals class list in dropdown if prosolo is not chosen and hides it if it is chosen.

    $('#cat').change(function () {
        var cat = $('input:radio[name=category]:checked').val();
        if (cat === "yes") {
            $("#prosoloresponse").text("There are no indices for ProSolo yet.");
            $('.classlist').hide();
            $('.comp_classlist').hide();
        } else {
            if (cat === "no") {
                $("#prosoloresponse").empty();
                $('.classlist').show();
                $('.comp_classlist').show();
                subclasslist(); //populates subclass dropdown
                comp_subclasslist();
            }
        }

    });

});
