    <!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">

        <?php

            $title_tag_array = ["Don't spoil Endgame",
                                "Where do gold fish live",
                                "2B || !2B", "Fire and blood",
                                "Ain't nothing to f**k with",
                                "Don't do drugs", "Do or do not"];

            $random_title_tag = $title_tag_array[ ( floor( mt_rand( 0, count( $title_tag_array ) - 1 ) ) ) ];

        ?>

        <title>EddSmith.com | <?php echo $random_title_tag; ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
        <link rel="stylesheet" href="assets/dist/css/main.css">
    </head>
    <body>

        <div class="highlight__billboard js-highlight-billboard">
            <img>
        </div>

        <nav class="overlay">

            <ul class="overlay__wrapper">
                <li class="overlay__text overlay__text--top-left">
                    <a href="#contact">Say hello</a>
                </li>
                <li class="overlay__text overlay__text--top-right">
                    <a href="#blog">Blog</a>
                </li>
                <li class="overlay__text overlay__text--bottom-left overlay__text--title">
                    <a href="#">EddSmith.com</a>
                </li>
                <li class="overlay__text overlay__text--bottom-right">
                    <a href="#work">Work</a>
                </li>
            </ul>

        </nav>

        <header class="about" id="about">

            <div class="about__container">

                <article class="about__content">
            
                    <h2><span class="highlight js-highlight" data-highlight-src="assets/dist/images/what-up.gif">What&nbsp;up!</span> I'm Edd. I am a front end developer based in&nbsp;Derbyshire.</h2>

                    <h2>I'm currently working at BigBrandIdeas, but you can look at some projects I've been working on&nbsp;<a href="#work">below</a>.</h2>

                    <h2>I also write every now and again about anything that comes into my mind. If you feel like reading some pretty mediocre writing about completely meaningless topics - check out my&nbsp;<a href="#blog">blog</a>.</h2>

                </article>

            </div>

        </header>

        <main>

            <section class="work" id="work">
                
                <div class="work__container">
                    
                    <div class="work__wrap js-work-archive">

                        <div class="work__inner js-work-archive-box
                         no-js">
                        
                            <a class="work__item js-work-archive-item" data-highlight-image-src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" data-highlight-colour="#f00">
                                <h3>Devil Apparel Landing Page</h3>
                            </a>

                            <a class="work__item js-work-archive-item" data-highlight-image-src="https://helpx.adobe.com/uk/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg" data-highlight-colour="#f0f">
                                <h3>FilmSmith Media Website</h3>
                            </a>

                            <a class="work__item js-work-archive-item" data-highlight-image-src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                <h3>The Pack Horse Hayfield Website</h3>
                            </a>

                            <a class="work__item js-work-archive-item" data-highlight-image-src="https://helpx.adobe.com/uk/stock/how-to/visual-reverse-image-search/_jcr_content/main-pars/image.img.jpg/visual-reverse-image-search-v2_1000x560.jpg" data-highlight-colour="#0f0">
                                <h3>Example Work Item Four</h3>
                            </a>

                        </div>

                        <div class="work__decoration js-work-archive-decoration">
                            <img src="http://via.placeholder.com/413x600.png">
                        </div>

                    </div>

                </div>

            </section>

            <section class="blog" id="blog">
                
                <div class="blog__container">
                    
                    <div class="blog__intro">
                        
                       <p>Sometime I like to write about anything that interests me. This could be anyfrom an album or movie review to a recent experience.</p>

                       <p>Take a look...</p>

                    </div>

                    <div class="blog__archive">
                        
                        <div class="blog__archive-item">
                            
                            <img src="http://via.placeholder.com/400x300.jpg">

                        </div>

                        <div class="blog__archive-item">
                            
                            <img src="http://via.placeholder.com/400x300.jpg">

                        </div>

                        <div class="blog__archive-item">
                            
                            <img src="http://via.placeholder.com/400x300.jpg">

                        </div>

                    </div>

                </div>

            </section>

        </main>

        <footer class="container">
            <p>This is the foota :)</p>
        </footer>

    </body>

    <script type="text/javascript" src="assets/dist/js/main.js"></script>
</html>
