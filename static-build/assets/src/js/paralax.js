    const   paralaxItems = document.querySelectorAll( '.js-paralax' );

    if ( paralaxItems ) {

        const maxParalax = window.innerWidth * .02;

        document.addEventListener('mousemove', function ( e ) {

            const   mouseX = e.clientX,
                    mouseY = e.clientY,
                    paralaxXamount = getParalaxAmount( mouseX, window.innerWidth ),
                    paralaxYamount = getParalaxAmount( mouseY, window.innerHeight );

            [...paralaxItems].forEach( function ( paralaxItem ) {

                const multiplier = paralaxItem.dataset.paralaxMultiplier ? parseInt(paralaxItem.dataset.paralaxMultiplier) : 1;

                paralaxItem.style.transform = `translate(${paralaxXamount * multiplier}px, ${paralaxYamount * multiplier}px)`;

            } )

            function getParalaxAmount ( mousePosition, windowDimension ) {

                let     mousePosAsPercentOfWindow = mousePosition / windowDimension,
                        varAboveAsValueOfMaxParalax = maxParalax * mousePosAsPercentOfWindow,
                        calculateRelativeTravel = varAboveAsValueOfMaxParalax - ( maxParalax / 2 );

                return calculateRelativeTravel;

            }

        } )

    }