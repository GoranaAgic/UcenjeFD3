$('#klik').click(function(){
    $('#pozdrav').text('Hello world')
    $('#makniPozdrav').show()
    return false
})

$('#makniPozdrav').hide()

$('#makniPozdrav').click(function(){
    $('#pozdrav').text('')
    $(this).hide() //$('#makniPozdrav).hide()
})


// sve mogućnosti su dostupne na
//http://api.jquery.com/
// 354 različitih mogućnosti