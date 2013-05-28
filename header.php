<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">

        <!-- plugins -->
        <!-- home -->
        <link href="css/easySlider.css" rel="stylesheet" type="text/css" media="screen" />
        <link rel="stylesheet" type="text/css" href="css/orbit-1.2.3.css" />
        <link rel="stylesheet" href="css/carosel.css" type="text/css" media="screen" />
        <!-- lojas -->
        <link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.2.css" media="screen" />

        <!-- principais -->
<!--    <link rel="stylesheet" type="text/css" href="css/style.css" /> -->
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>

        <!--[if IE]>
            <style type="text/css">
                .timer { display: none !important; }
                div.caption { background:transparent; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000,endColorstr=#99000000);zoom: 1; }
            </style>
        <![endif]-->
    </head>

    <div class="centraliza">
    <section class="header">
        <section class="logoHeader">
            <h1><a href="index.php" title="Ir à página inicial"><span>Grupo Itavema</span></a></h1>
        </section>
        <section class="buscaHeader">
            <form name="busca" id="busca" method="post" action="#">
                <input type="text" name="busca" id="busca" class="" value="Busque seu carro aqui" />
                <input type="button" class="buscar" value="" />
            </form>
        </section>
        <section class="linksHeader">
            <form class="irParaHeader">
                <select onchange="if(this.value!=''){window.location.replace(this.value);}">
                    <option value="">Ir para</option>
                    <option value="" label="---------------------------------------------" />
                    <option value="//www.itavema.com.br">
                        Página Inicial do Grupo Itavema
                    </option>
                    <option value="" label="---------------------------------------------" />
                    <option value="">Carros Nacionais</option>
                    <option value="//fiat.itavema.com.br">>
                        Fiat
                    </option>
                    <option value="//ford.itavema.com.br">>
                        Ford
                    </option>
                    <option value="//gm.itavema.com.br">>
                        GM
                    </option>
                    <option value="//peugeot.itavema.com.br">>
                        Peugeot
                    </option>
                    <option value="//renault.itavema.com.br">>
                        Renault
                    </option>
                    <option value="//toyota.itavema.com.br">>
                        Toyota
                    </option>
                    <option value="//volkswagen.itavema.com.br">>
                        Volkswagen
                    </option>
                    <option value="" label="---------------------------------------------" />
                    <option value="">Carros Importados</option>
                    <option value="//chrysler.itavema.com.br">>
                        Chrysler
                    </option>
                    <option value="//dodge.itavema.com.br">>
                        Dodge
                    </option>
                    <option value="//jeep.itavema.com.br">>
                        Jeep
                    </option>
                    <option value="//landrover.itavema.com.br">>
                        Land Rover
                    </option>
                    <option value="//mercedes.itavema.com.br">>
                        Mercedes-Benz
                    </option>
                    <option value="//nissan.itavema.com.br">>
                        Nissan
                    </option>
                    <option value="//toyota.itavema.com.br">>
                        Toyota
                    </option>
                    <option value="//volvo.itavema.com.br">>
                        Volvo
                    </option>
                    <option value="//hyundai.itavema.com.br">>
                        Hyundai
                    </option>
                    <option value="//citroen.itavema.com.br">>
                        Citroen
                    </option>
                    <option value="" label="--------------------------------------------------" />
                    <option value="">Motos</option>
                    <option value="//dafra.itavema.com.br">>
                        Dafra
                    </option>
                    <option value="//mvagusta.itavema.com.br">>
                        MV Agusta
                    </option>
                    <option value="" label="--------------------------------------------------" />
                    <option value="">Bicicletas elétricas</option>
                    <option value="//ebike.itavema.com.br">>
                        E-Bike
                    </option>
                    <option value="" label="--------------------------------------------------" />
                    <option value="">Carros Seminovos</option>
                    <option value="//seminovos.itavema.com.br">>
                        Seminovos Plus
                    </option>
                    <option value="" label="--------------------------------------------------" />
                </select>
            </form>

            <ul>
                <li><a href="#" title="">Itavema Grupo</a></li>
                <li class="last"><a href="https://www.elancers.net/frames/itavema/frame_geral.asp" title="Trabalhe Conosco" target="_blank">Trabalhe Conosco</a></li>
            </ul>
        </section> <!-- linksHeader -->
        <section class="socialIcons">
            <a href="#" title="Itavema no Facebook" class="facebook"></a>
            <a href="#" title="Itavema no Twitter" class="twitter"></a>
            <a href="#" title="Itavema no Youtube" class="youtube"></a>
        </section>
        <nav class="menuHeader">
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="empresa.php">Quem somos</a></li>
                <li><a href="lojas.php" class="laranja">Lojas</a></li>
                <li><a href="servicos.php">Serviços</a></li>
                <li><a href="vendas_diretas.php">Vendas diretas</a></li>
                <li><a href="avaliacao.php">Avalie seu usado</a></li>
                <li><a href="contato.php" class="last">Contato</a></li>
            </ul>
        </nav>
    </section><!--header-->
</div><!--centraliza-->


