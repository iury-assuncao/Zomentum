

let body = document.getElementsByTagName('body').innerHTML =
`

<!--Menu-->
<header>

        <a id="logo"href="index.html"><img src="imgs/desk/logo.svg" ></a>
  
      
      <nav id="nav">
        <button aria-label="Abrir Menu" id="btn-mobile" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
          <span id="hamburger"></span>
        </button>
        <ul id="menu" role="menu">
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services </a> </li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contactlink"><button id="botaomenu">Get a demo</button></a></li>
        </ul>
      </nav>
    </header>




<section class="azul">

     <div class="textos">

       
        <p class="maior">Find the right partners to fuel your business growth</p>

        <p class="menor">Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>

    </div>

    <div class="img">

        <img src="imgs/desk/figuraazulesq.svg" alt="figura da esquerda">
    
        <button>Register today</button>

        <img src="imgs/desk/figuraazuldir.svg" alt="figura da direita">
   
    </div>



</section>


<section class="secao2" id="features">

<h2 >List. Sell. Grow</h2>

<div class="list">

    <div class="conteudo">
        <img src="./imgs/icon1.svg" alt="Icon 1 da seção list">
        <p>Be a part of the only  All-In-One platform for IT </p>
    </div>

    

    <div class="conteudo">
        <img src="./imgs/icon2.svg" alt="Icon 2 da seção list">
        <p>Come closer to finding your next customer</p>
    </div>

    <div class="conteudo">
        <img src="./imgs/icon3.svg" alt="Icon 3 da seção list">
        <p>Grow your business with a single click</p>
    </div>

</div>

</section>

<section class="secao3" id="services">

<img id="figure1desk"src="imgs/desk/frame1.svg" alt="figura 1 desktop">

<img id="figure1mobile"src="imgs/mobile/frame1.svg" alt="figura 1 mobile">

<div id="texto">

    <h3>Your channel program on steroids</h3>

    <p>Tired of finding MSPs that can help you boost your channel sales?  You’re in luck, because they’re all here.</p>

</div>

</section>


<section class="secao4">

<img id="figure2desk"src="imgs/mobile/frame2.svg" alt="figura 2 desktop">

<img id="figure2mobile"src="imgs/mobile/frame2.svg" alt="figura 2 mobile">

<div id="texto">

    <h3>Become the vendor everyone wants to buy from</h3>

    <p>Gain brand authority and visibility with the help of the largest IT service ecosystem. Find customers who are looking for your solution right now!</p>

    <div id="seta">
        <a href="#" id="textoseta">Signup now</a>
        <a href="#"><img href="#" src="imgs/seta.svg"></a>
                
    </div>

</div>

</section>

<section class="secao5">

<img id="figure3desk"src="imgs/mobile/frame3.svg" alt="figura 3 desktop">

<img id="figure3mobile"src="imgs/mobile/frame3.svg" alt="figura 3 mobile">

<div id="texto">

    <h3>It’s like having Your best Salesman on autopilot</h3>

    <p>Share collaterals and documents that are automatically branded. Leverage a rich partner network that sells your solution exactly the way your best salesman would.</p>

    <div id="seta">
        <a href="#" id="textoseta">Signup now</a>
        <a href="#"><img href="#" src="imgs/seta.svg"></a>
                
    </div>

</div>

</section>

<section class="secao6">

<img id="figure4desk"src="imgs/mobile/frame4.svg" alt="figura 3 desktop">

<img id="figure4mobile"src="imgs/mobile/frame4.svg" alt="figura 3 mobile">

<div id="texto">

    <h3>Track your channel performance</h3>

    <p>Monitor the health and revenue of your channel program and streamline your campaign to win more customers within Zomentum.</p>

    <div id="seta">
        <a href="#" id="textoseta">Signup now</a>
        <a href="#"><img href="#" src="imgs/seta.svg"></a>
                
    </div>

</div>

</section>

<footer id="contact">

<div class="footer">

    <div id="footer">


        <div class="collumn">

            <h4>Product</h4>

            <div id="collumn">

                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Integrations</a>
                <a href="#">Product</a>

            </div>
    

    

        </div>

        <div class="collumn">

            <h4>Company</h4>

            <div id="collumn">


                <a href="#">About us</a>
                <a href="#">Contact us</a>
                <a href="#">Submit a ticket</a>
                <a href="#">Privacy policy</a>
                <a href="#">Terms & conditions</a>
        
            </div>
            
        </div>

    </div>        

    <div id="footer">        
    

        <div class="collumn">

            <h4>Guides</h4>

            <div id="collumn">

                <a href="#">MSP</a>
                <a href="#">MSP Sales</a>


            </div>

        </div>   

            

        <div class="collumn">

            <h4>Contact Us</h4>

            <div id="collumn">

                <a href="#">Adress</a>

            </div>    
            

        </div>

    </div>       

</div>


<p>
    <script src="date.js"> 
    </script>
</p>


</footer>

<script src="menu.js">

</script>



`

document.write(body)


