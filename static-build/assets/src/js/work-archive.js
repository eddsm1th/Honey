    
    const   workArchive = document.querySelector('.js-work-archive'),
            windowHeight = window.innerHeight;

    if ( workArchive ) {

        const   workArchiveItems = workArchive.querySelectorAll('.js-work-archive-item'),
                workArchiveBox = workArchive.querySelector('.js-work-archive-box'),
                workArchiveDecoration = workArchive.querySelector('.js-work-archive-decoration'),
                workArchiveDecorationImg = workArchiveDecoration.querySelector('img');

        document.addEventListener('mousemove', function ( event ) {    

            const   mouseY = event.clientY,
                    mouseYAsPercentOfWindow = mouseY / windowHeight;

            workArchiveBox.classList.remove('no-js');

            const   elemHeight = workArchiveBox.offsetHeight,
                    mouseYPercentRelativeToElem = elemHeight * mouseYAsPercentOfWindow,
                    getProperElemTranslation = workArchiveBox.offsetHeight - mouseYPercentRelativeToElem - ( elemHeight / 2 );

            if ( window.innerWidth > 1024 ) {

                workArchiveBox.style.transform = `translateY(${ getProperElemTranslation }px)`;

            }

            window.addEventListener( 'resize', function () {

                if ( window.innerWidth < 1024 ) {

                    workArchiveBox.style.transform = `translateY(0px)`;

                }

            } )

        } )

        workArchiveItems.forEach( function ( workArchiveItem ) {

            const   highlightImage = workArchiveItem.dataset.highlightImageSrc,
                    highlightColour = workArchiveItem.dataset.highlightColour;

            workArchiveItem.addEventListener( 'mouseenter', function () {

                if ( !workArchiveDecoration.classList.contains('hello') && highlightImage != null && highlightImage != '' ) {

                    workArchiveDecoration.classList.add('hello');

                }

                workArchiveDecoration.style.backgroundColor = ( highlightColour != null && highlightColour != '' ) ? highlightColour : 'rgb(0, 200, 253)';

                if ( highlightImage != null && highlightImage != '' ) {

                    workArchiveDecorationImg.src = highlightImage;

                }

            } )

        } )

    }