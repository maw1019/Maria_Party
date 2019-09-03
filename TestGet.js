$.ajax({
    type :"GET",
    url  : "/testServlet/myServlet",
    data : { 
        datafromtestFile : $("#input").val(),                            
        },
    dataType: "text",
    success : function(happy) {
        $("#output").html(happy);                            
}
})