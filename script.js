var a= gsap.timeline({
      scrollTrigger:{
        trigger:".one",
        start:"0%  0%",
        end:"160% 50%",
        scrub:true,
    
      }
})

a.to('#fanta',{
    top:"90%",
    left:"0%",
    zIndex:"8"
},"o")
a.to('#orange-cut',{
    top:"135%",
    left:"20%",
    height:"40vh",
},'o')
a.to('#orange',{
    top:"130%",
    left:"70%"
},'o')

a.to('#leaf',{
    top:"100%",
    left:"90%",
    rotate:"-360",
    height:"20vh"
},'o')

a.to('#leaf2',{
    top:"90%",
    left:"10%",
    zIndex:"999",
    rotate:"-360"

},'o')


var a= gsap.timeline({
      scrollTrigger:{
        trigger:".one",
        start:"90%  20%",
        end:"200% 30%",
        scrub:true,
    
      }
})

a.to('#fanta',{
    top:"205%",
    left:"27%",
    zIndex:"8"
},'o')

a.to('#orange-cut',{
    top:"192%",
    left:"39%",
    height:"42vh",
},'o')