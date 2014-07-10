//main.js//


$(document).ready(function(){

    $('input#team-submit').on('click', function() {
//	$('input#team-submit').remove();
	var name = $('select#team-select').val();
	if (name != 'Show All Colleges') {
	   // alert(name);
	    $.post('get_stats.php', {name: name}, function(stats) {
		$('div#team-data').html(stats);
	    });
	}
	
});

    $('input#team-submit2').on('click', function() {
//	$('input#team-submit2').remove();

        var name = $('select#team-select2').val();
        if (name != 'Show All Colleges') {
           // alert(name);                                                                                                                
            $.post('get_stats.php', {name: name}, function(stats) {
               $('div#team-data2').html(stats);
	    });

	    }

    });


//works
    $(document).on('click', '.player-data', function(event){
	var current = $(this);
//        $(this).next('tr').children();
        var position = $(this).find('td').next().next().html();
        var player = $(this).find('td').html();

       if(current.next('tr').hasClass('expanded')){
	   current.next('tr').removeClass('expanded');
	   current.next('tr').addClass('retracted');
	   current.next('tr').slideUp();
        }
       else {
	    current.next('tr').removeClass('retracted');
	    current.next('tr').addClass('expanded');
	    current.next('tr').slideDown();
	}
       if (position != '' && player != '') {
	   $.post('player_data2.php', {position:position, player:player}, function(stats){
	       current.next('tr').next('tr').html(stats);
	       current.next('tr').next('tr').slideDown();
	   });
       }		
   });
   

//end document.ready
});


