$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
});
function send_handle(){

    let num=document.getElementById("Telefone").value;
  
    let msg= document.getElementById("Pontuação").value;
  
      let name= document.getElementById("Nome").value;
    
    var win = window.open(`https://wa.me/${num}?text=%20Olá%20${name}%20sua%20pontuação%20foi:%20${msg}`, '_blank');
  }
