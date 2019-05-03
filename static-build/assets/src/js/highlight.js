
    const   highlights = document.querySelectorAll('.js-highlight'),
            highlightBillboard = document.querySelector('.js-highlight-billboard')

    if ( highlights && highlightBillboard ) {

        [...highlights].forEach( function ( highlight ) {

            const highlightImagePath = highlight.dataset.highlightSrc;

            highlight.addEventListener( 'mouseenter', function () {

                highlightBillboard.querySelector('img').src = highlightImagePath;

                highlightBillboard.classList.add('hello');

            } )

            highlight.addEventListener( 'mouseleave', function () {

                highlightBillboard.classList.remove('hello');

            } )

        } )

        window.addEventListener( 'mousemove', function ( event ) {

            highlightBillboard.style.transform = `translate(${ event.clientX + 1 }px, ${ event.clientY }px)`;

        } )

    }