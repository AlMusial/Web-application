let sendBlocked = false;

$(() => {
    $("#sendNewTask").click(() => {
        if (sendBlocked) return;
        let input = $("#myInput").val(); // textarea content
        if (input.length < 3) return; // at least 3 chars to add

        sendBlocked = true;
        $.post("/ajax/addNewTask", {
            taskName: input
        }, (data) => {
            sendBlocked = false;
            if (data.status === true) {
                $("#myInput").val("");  // clean textarea content
                newElement();
            }
            else {
                alert("Something went wrong.");
            }
        });
    })

    $('body').on('click', '.deleteTask', function () {
        
        let taskId = $(this).siblings("input").val();
        $(this).closest("li").remove();
        $.get('/getTasks')
        $.post("/ajax/deleteTask", {
            taskId: taskId
        })
        });
    }) 

function newElement() {
    $.get("/ajax/getTasks", (data) => {
        let html = $("#myUl").html();
        let i= data.length-1;
        html += `<li><p>${data[i].name}</p><a href=\"http://localhost:3000/profile/edit/${data[i]._id}\">edit</a><br></br><button class='deleteTask', type='button'>delete</button><input type="hidden", name="taskId", id="taskId", value=task._id></input></li>`;
        $("#myUl").html(html);
    });
}
