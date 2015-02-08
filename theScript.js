$(document).ready(function () {


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
            };
        }

    });

    //function pushes text into html car_subclass dropdown list based on car_class chosen
    //TO-DO: use (var key in obj) to simplify this.
    function subclasslist() {
        $("#car_class").change(function () {
            $("#car_subclass").empty();
            scca_class = ($("#car_class").val());
            switch (scca_class) {
            case "street":
                for (subclass_iter = 0; subclass_iter < street.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + street[subclass_iter] + ">" + street[subclass_iter][0] + "</option>");
                }
                break;
            case "street_touring":
                for (subclass_iter = 0; subclass_iter < street_touring.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_touring[subclass_iter] + ">" + street_touring[subclass_iter][0] + "</option>");
                }
                break;
            case "street_prepared":
                for (subclass_iter = 0; subclass_iter < street_prepared.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_prepared[subclass_iter] + ">" + street_prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "cam":
                for (subclass_iter = 0; subclass_iter < cam.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + cam[subclass_iter] + ">" + cam[subclass_iter][0] + "</option>");
                }
                break;
            case "prepared":
                for (subclass_iter = 0; subclass_iter < prepared.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + prepared[subclass_iter] + ">" + prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "street_mod":
                for (subclass_iter = 0; subclass_iter < street_mod.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + street_mod[subclass_iter] + ">" + street_mod[subclass_iter][0] + "</option>");
                }
                break;
            case "mod":
                for (subclass_iter = 0; subclass_iter < mod.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + mod[subclass_iter] + ">" + mod[subclass_iter][0] + "</option>");
                }
                break;
            case "junior":
                for (subclass_iter = 0; subclass_iter < junior.length; subclass_iter++) {
                    $("#car_subclass").append("<option class='subclass' value=" + junior[subclass_iter] + ">" + junior[subclass_iter][0] + "</option>");
                }
                break;
            default:
            }
            calcIndex();
        });
    };

    function calcIndex() {
        $("#car_subclass").change(function () {


        });
        $("#time").change(function () {

        });
    }

    function comp_subclasslist() {
        $("#comp_class").change(function () {
            $("#comp_subclass").empty();
            scca_class = ($("#comp_class").val());
            switch (scca_class) {
            case "street":
                for (subclass_iter = 0; subclass_iter < street.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street[subclass_iter] + ">" + street[subclass_iter][0] + "</option>");
                }
                break;
            case "street_touring":
                for (subclass_iter = 0; subclass_iter < street_touring.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_touring[subclass_iter] + ">" + street_touring[subclass_iter][0] + "</option>");
                }
                break;
            case "street_prepared":
                for (subclass_iter = 0; subclass_iter < street_prepared.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_prepared[subclass_iter] + ">" + street_prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "cam":
                for (subclass_iter = 0; subclass_iter < cam.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + cam[subclass_iter] + ">" + cam[subclass_iter][0] + "</option>");
                }
                break;
            case "prepared":
                for (subclass_iter = 0; subclass_iter < prepared.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c-subclass' value=" + prepared[subclass_iter] + ">" + prepared[subclass_iter][0] + "</option>");
                }
                break;
            case "street_mod":
                for (subclass_iter = 0; subclass_iter < street_mod.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + street_mod[subclass_iter] + ">" + street_mod[subclass_iter][0] + "</option>");
                }
                break;
            case "mod":
                for (subclass_iter = 0; subclass_iter < mod.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + mod[subclass_iter] + ">" + mod[subclass_iter][0] + "</option>");
                }
                break;
            case "junior":
                for (subclass_iter = 0; subclass_iter < junior.length; subclass_iter++) {
                    $("#comp_subclass").append("<option class='c_subclass' value=" + junior[subclass_iter] + ">" + junior[subclass_iter][0] + "</option>");
                }
                break;
            default:
            }

        });
    };


    //I MADE CHANGES AFTER THIS

    $("#results").click(function (indexTime, comp_indexTime) {
        var indexClass = ($("#car_subclass").val());
        var index = indexClass.split(",")[1];
        console.log(index);
        var indexTime = $("#time").val() * index;
        console.log("Player 1: " + indexTime);

        var comp_indexClass = ($("#comp_subclass").val());
        var comp_index = comp_indexClass.split(",")[1];
        console.log(comp_index);
        var comp_indexTime = $("#comp_time").val() * comp_index;
        console.log("Player 2: " + comp_indexTime);

        if (indexTime === 0 && comp_indexTime > 0) {
            var winningTime = (comp_indexTime / index).toFixed(3);;
            $("#resultComment").text("You will need better than " + winningTime + " to win.");
        } else if (indexTime > 0 && comp_indexTime === 0) {
            var winningTime = (indexTime / comp_index).toFixed(3);;
            $("#resultComment").text("Your competitor will need better than " + winningTime + " to win.");
        } else if (indexTime < comp_indexTime) {
            $("#resultComment").text("You won!");
        } else if (indexTime > comp_indexTime) {
            $("#resultComment").text("Sorry, you lost.");
        } else if (indexTime === comp_indexTime) {
            $("#resultComment").text("We have a tie.");
        } else {
            $("#resultComment").text("Sorry, we don't have enough information.");

        }

    });


    //variables are car classes. Array contains subclass and index number
    var street = [["Street Options"], ["SS", 0.835], ["AS", 0.829], ["BS", 0.826], ["CS", 0.814], ["DS", 0.812], ["ES", 0.808], ["FS", 0.810], ["GS", 0.806], ["HS", 0.796], ["SSR", 0.859]];
    var street_touring = [["Street Touring Options"], ["STF", 0.801], ["STS", 0.828], ["STX", 0.831], ["STR", 0.838], ["STU", 0.844]];
    var street_prepared = [["Street Prepared Options"], ["SSP", 0.871], ["ASP", 0.865], ["BSP", 0.863], ["CSP", 0.861], ["DSP", 0.854], ["ESP", 0.849], ["FSP", 0.840]];
    var cam = [["CAM Options"], ["CAM-C", 0.830], ["CAM-T", 0.825], ["CAM-S", 0.836]];
    var prepared = [["Prepared Options"], ["XP", 0.905], ["BP", 0.881], ["CP", 0.864], ["DP", 0.879], ["EP", 0.874], ["FP", 0.880]];
    var street_mod = [["Street Mod Options"], ["SMF", 0.853], ["SM", 0.870], ["SSM", 0.882]];
    var mod = [["Mod Options"], ["AM", 1], ["BM", 0.965], ["CM", 0.922]["DM", 0.92], ["EM", 0.926], ["FM", 0.924], ["FSAE", 0.989]];
    var junior = [["Junior Options"], ["KM", 0.975], ["JA", 0.880], ["JB", 0.842], ["JC", 0.741]];
});
