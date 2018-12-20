$(() => {
    $('[data-toggle="tooltip"]').tooltip();
    $(".linknya, footer a[href='#myPage']").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    });
});
var readURL = (event, elementNya, classnya) => {
    $(classnya).slideUp('slow');
    $(classnya + '-text').text('');
    if (event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById(elementNya);
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
        $(classnya).slideDown('slow');
    } else {
        $(classnya).slideUp('slow');
        $(classnya + '-text').text('');
    }
    setTimeout((e) => {
        // console.log(event.target.files);
        $(classnya).slideUp('slow');
        var files = event.target.files;
        if (files.length > 0) {
            $(classnya + '-text').text('Sudah input Photo');
        }else{
            $(classnya + '-text').text('');
        }
    }, 10000)
}