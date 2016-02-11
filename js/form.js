$('#formname').submit(function() {
    var post_data = $('#formname').serialize();
    $.ajax({
    	// Set in the HTML so is easier to edit
        url:$('#formname').attr('action'),
        data : post_data,
        dataType:'json',
        type:'POST',
        success:function(data){
            var textbox = document.querySelector("#email");
            textbox.style.display = "none";
            var button = document.querySelector("#submissionBtn");
            button.style.display = "none";
            var thanks = document.querySelector("#thanks");
            thanks.style = button.style;
            thanks.style.display = "inline";
            // button.innerText = "Merci";
            // button.disabled = true;
            console.log("success!");
            // flash a message? 
        }
    });
});