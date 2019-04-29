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

const   workArchives = document.querySelectorAll('.js-work-archive'),
        windowHeight = window.innerHeight;

document.addEventListener('mousemove', function ( event ) {    

    const   mouseY = event.clientY,
            mouseYAsPercentOfWindow = mouseY / windowHeight;

    [...workArchives].forEach( function ( workArchive ) {

        workArchive.classList.remove('no-js');

        const   elemHeight = workArchive.offsetHeight,
                mouseYPercentRelativeToElem = elemHeight * mouseYAsPercentOfWindow,
                getProperElemTranslation = workArchive.offsetHeight - mouseYPercentRelativeToElem - ( elemHeight / 2 );

        if ( window.innerWidth > 1024 ) {

            workArchive.style.transform = `translateY(${ getProperElemTranslation }px)`;

        }

        window.addEventListener( 'resize', function () {

            workArchive.style.transform = `translateY(0px)`;

        } )

    } )

} )