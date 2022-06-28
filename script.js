var idsTimeframe =['9', '10', '11', '12', '1', '2','3','4','5']
var hoursTime = ['09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00',  '14:00:00',  '15:00:00',  '16:00:00',  '17:00:00'];
//provides time frame and gives button
for (var i=0; i<idsTimeframe.length; i++) {
    var buttonEl = $(idsTimeframe[i]);
    var buttonEl = descriptionEl.parent().parent().find('button');
}

//saves to local storage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}
//not explicitly handled/default action
$('button').on('click', function) {
event.preventDefault
}


// saves to local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})