<?php require 'database/lista_faqs.php'; ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Google FAQs</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="container">
            <section id="faqs">
                <?php
                foreach ($faqs as $faq) { ?>
                    <div class="faq">
                        <h1 class="titolo_faq"><?php echo $faq['domanda'] ?></h1>
                        <div class="risposta_faq">
                            <?php
                            foreach ($faq['risposta'] as $paragrafo_risposta) { ?>
                                <p><?php echo $paragrafo_risposta ?></p>
                                <?php
                            } ?>
                        </div>
                    </div> <?php
                }
                ?>
            </section>
        </div>
        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>
