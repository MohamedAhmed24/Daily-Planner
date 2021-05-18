$(document).ready(function() {



let nineAm = $("#9 .schedule");
let tenAm = $("#10 .schedule");
let elevenAm = $("#11 .schedule");
let twelvePm = $("#12 .schedule");
let onePm = $("#1 .schedule");
let twoPm = $("#2 .schedule");
let threePm = $("#3 .schedule");
let fourPm = ("#4 .schedule");
let fivePm =("#5 .schedule");
let time = moment();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


let saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    console.log("saveBtn clicked")
    let time = $(this).parent().attr("id");
    let schedule = $(this).siblings(".schedule").val().trim();
    localStorage.setItem(time, schedule);
});

function plannerTime(){
    let present = time.hours();

    $(".Time-block").each(function(){
        let thisSection = parseInt($(this).attr("id").split("-")[1]);

        if (thisSection<present){
            $(this).addClass("past");
        }
        else if (thisSection===present){
            $(this).removeClass("past");
            $(this).addClass("past");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
plannerTime();


nineAm.val(localStorage.getItem("9"))
tenAm.val(localStorage.getItem("10"))
elevenAm.val(localStorage.getItem("11"))
twelvePm.val(localStorage.getItem("12"))
onePm.val(localStorage.getItem("1"))
twoPm.val(localStorage.getItem("2"))
threePm.val(localStorage.getItem("3"))
fourPm.val(localStorage.getItem("4"))
fivePm.val(localStorage.getItem("5"))
})