//main.js//


$(document).ready(function(){

    $('input#team-submit').on('click', function() {
	var name = $('select#team-select').val();
        if (name != 'Choose College') {
	    jQuery.post("/api/players", {college:name}, function (data, textStatus, jqXHR) {
		console.dir(data);
		$('div#team-data').html(data+'</table>'); 
	    });
	}	
});

    $('input#team-submit2').on('click', function() {
        var name = $('select#team-select2').val();
        if (name != 'Show All Colleges') {
	    jQuery.post("/api/players", {college:name}, function (data, textStatus, jqXHR) {                                    
		$('div#team-data2').html(data+'</table>');
            });
	    }
    });

    $('input#compare-submit').on('click', function() {                                                                                     
        var position = $('select.position-list').val();
        var college1 = $('select#team-select').val();
	var college2 = $('select#team-select2').val();

	if (college1 != 'Choose College' && position != "All Positions") {
            //alert(college1);                                                                                                                            
            $.post('get_stats2.php', {name:college1, position:position}, function(stats) {
                $('div#team-data').html(stats);
            });

        }
        if (college2 != 'Choose College' && position != "All Positions") {
            //alert(college2);                                                                                                                              
            $.post('get_stats2.php', {name:college2, position:position}, function(stats) {
                $('div#team-data2').html(stats);
            });
        }

        if (college1 != 'Choose College' && position == "All Positions") {
            //alert(college1);                                                                                                                             
            $.post('get_stats.php', {name:college1}, function(stats) {
		$('div#team-data').html(stats);
            });

        }
	if (college2 != 'Choose College' && position == "All Positions") {
            //alert(college2);
            $.post('get_stats.php', {name:college2}, function(stats) {
                $('div#team-data2').html(stats);
            });
	}

	if (college1 != 'Choose College' && college2 != 'Choose College' && position != 'All Positions') {
            $.post('compare_stats2.php', {position:position, college1:college1, college2:college2}, function(stats) {
               $('div#compared-data').html(stats);
           });
	    $.post('compare_stats3.php', {position:position, college1:college1, college2:college2}, function(stats) {
		$('div#compared-data2').html(stats);
            });
        }

    });



    $(document).on('click', '.player-data', function(event){
//	alert(".player-data");
	event.stopPropagation();
	event.preventDefault();
	
	$(this).css("background-color", "#E5E4E2");
        
	var current = $(this);
//        $(this).next('tr').children();
        var position = $(this).find('td').next().next().html();
        var player = $(this).find('td').html();
//	alert(player+'is a'+position);
	  
	if(current.next('tr').next('tr').is(':empty')) {

	    jQuery.post("/api/stats", {position:position, player:player}, function (data, textStatus, jqXHR) {
//		console.log("Get resposne:");
		console.dir(data);
//		console.log(textStatus);
//		console.dir(jqXHR);
//		$('div#team-data').html(data+'</table>'); 
		current.next('tr').html(data[0]).next('tr').html(data[1]).next('tr').html(data[2]).next('tr').html(data[3]);
	      });
	

//	if((current.next('tr').next('tr').css('display') == 'none'))
//	{
	};
	    current.next('tr').slideDown().next('tr').slideDown().next('tr').slideDown().next('tr').slideDown();
            current.removeClass("player-data");
            current.addClass('toggle-ready');	
    });


    $(document).on('click', '.toggle-ready', function() {
	$(this).addClass('player-data');
        $(this).removeClass('toggle-ready');
//        $(this).css('border','none');                                                      
//	$(this).css('border','none');                                                        
        $(this).next('tr').slideUp().next('tr').slideUp().next('tr').slideUp().next('tr').slideUp(function(){
            $(this).css("background-color", "white");
	});
    });

    $(document).on("mouseenter", ".player-data", function() {
	$(this).css("background-color", "#E5E4E2");
    });

		 
    $(document).on("mouseout", ".player-data", function() {
	
	if(!$(this).hasClass('toggle-ready')){
	 
		$(this).css("background-color", "white");
	}
   
    });


//end document.ready
});		 

