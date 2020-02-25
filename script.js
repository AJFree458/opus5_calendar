// Populate current day
var timeDay = moment().format("dddd, LL");
$("#currentDay").text(timeDay);

// Make global var for the timeblocks
var blockTime = $(".time-block");

// Retrieve data from the textarea
var getSched = $(".description");

// Current hour retrieve
var hrCurrent = moment().format("H");

// Retrieve schedule items
var toDoItems = [];

// Set up an array for the schedule
function startSched(){
//    console.log(toDoItems);

// run through each time block
    blockTime.each(function(){
        var thisTime = $(this);
        var thisTimeHr = parseInt(thisTime.attr("data-hour"));

        var schedObj = {
            // set hour to the data-hour
            hour: thisTimeHr,
            // get a string ready
            text: "",
        }
        // push to array
        toDoItems.push(schedObj);
    });
    // save to local storage
    localStorage.setItem("todos", JSON.stringify(toDoItems));
    console.log(toDoItems)

}

// Set the timeblock colors based on time
function colorTimeBlocks(){
    blockTime.each(function(){
        var thisBlock = $(this);
        var thisHour = parseInt(thisBlock.attr("data-hour"));

        // Add styling and take it away with if statements
        if (thisHour < hrCurrent) {
            thisBlock.addClass("past").removeClass("present future");
        }
        if (thisHour == hrCurrent) {
            thisBlock.addClass("present").removeClass("past future");
        }
        if (thisHour < hrCurrent) {
            thisBlock.addClass("future").removeClass("present past");
        }
    });
}

// To Do items need to be set to locale storage and retrieved from same and displayed


// Start certain functions
// Timeblocks color
colorTimeBlocks();

