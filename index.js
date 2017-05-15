
// $(document).ready(function(){
// 	$('#filter_btn').filter('#r1').css("color", "red");
// })

// $(document).ready(function(){
$('#search_all_btn').click(function(){
	
	var bu = $('#BU').val();
    var pf = $('#PF option:selected').val();
    var pid = $('#PID option:selected').val();

    $('tbody tr').hide();

    if (pf == "" ){
    	$("td:contains('" + pid + "')").parent().show();
    } else if (pid == '' ){
    	$("td:contains('" + pf + "')").parent().show();
    } else {
    	if (pf == "N7000" && pid == "DS-X9334-K9") {
    		$('tbody tr').hide();
    		// alert("No record found");
    		$('tbody').append("<tr><td colspan='100%' style='text-align: center'>No Record Found!</td></tr>");
    		return;
    	} 
    	if (pf == "MDS9000" && pid == "N77-M324FQ-25L") {
    		$('tbody tr').hide();
    		// alert("No record found");
    		$('tbody').append("<tr><td colspan='100%' style='text-align: center'>No Record Found!</td></tr>");
    		return;
    	}
    	$("td:contains('" + pf + "')").parent().show();
    }


})



function color(el){
	var birth_age = el.text();
	if (birth_age < 15) {
		el.css('background-color', 'green');
	} else if (birth_age >= 15 && birth_age < 30){
		el.css('background-color', 'yellow');
	} else if (birth_age > 30) {
		el.css('background-color', 'red');
	}
}

color($('#birth_td1'));
color($('#birth_td2'));
color($('#birth_td3'));
color($('#birth_td4'));
color($('#birth_td5'));
color($('#birth_td6'));
color($('#birth_td7'));
color($('#birth_td8'));
color($('#birth_td9'));
color($('#birth_td10'));
color($('#birth_td11'));
color($('#birth_td12'));
color($('#birth_td13'));
color($('#birth_td14'));
color($('#birth_td15'));
color($('#birth_td16'));
color($('#birth_td17'));
color($('#birth_td18'));
color($('#birth_td19'));
color($('#birth_td20'));


$("td:contains('no')").css('background-color', 'green');
$("td:contains('regression')").css('background-color', 'yellow');