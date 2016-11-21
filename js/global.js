$(document).ready(function() {


    $('.tabs li').on('click', function() {

        var tab = $(this)

        $('.tab, .tabs li').removeClass('active')

        tab.addClass('active')
        $('#' + tab.data('tab')).addClass('active')

        if ($(this).data('url')) {

            // $('#' + tab.data('tab')).load($(this).data('url'))
            // $('#portfolio').load('portfolio.html')

            $.ajax({
                method: 'GET',
                url: tab.data('url'),
                cache: false,
                success: function(page) {
                    $('#' + tab.data('tab')).html(page)
                    $( "form" ).validate({
                        rules: {
                            phone: {
                                required: true,
                                phoneUS: true
                            }
                        }
                    });
                },
                error: function() {
                    alert('No page found!')
                }
            })

        }

    })

    $('.tabs li:first').click()


    // var text = $('h1').html()
    //
    // for (let i = 0; i < 5; i++) {
    //     $('h1:last').after('<h1>' + text + ' - ' + i + '</h1>')
    // }

    // $('#box').css({backgroundColor: 'red'})
    // $('#box').append('<button>Click Me</button>')

})
