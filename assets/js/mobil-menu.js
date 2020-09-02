$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
    } else {
        $('.menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
    }
});

