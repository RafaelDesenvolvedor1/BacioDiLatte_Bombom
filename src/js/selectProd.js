$('#belga').click(()=>{
    $('.wallpaper').removeClass('active')
    $('#wallpBelga').addClass('active')


    // elipse 

    removeElipsesClass()
    $('.elipse').addClass('elipseBelga')

})

$('#dilatte').click(()=>{
    $('.wallpaper').removeClass('active')
    $('#wallpDilatte').addClass('active')

     // elipse 

     removeElipsesClass()
     $('.elipse').addClass('elipseDilatte')
})

$('#framboesa').click(()=>{
    $('.wallpaper').removeClass('active')
    $('#wallpFramboesa').addClass('active')

     // elipse 

     removeElipsesClass()
     $('.elipse').addClass('elipseFramboesa')
})

$('#pistachio').click(()=>{
    $('.wallpaper').removeClass('active')
    $('#wallpPistachio').addClass('active')

     // elipse 

     removeElipsesClass()
     $('.elipse').addClass('elipsePistachio')
})



function removeElipsesClass(){
    $('.elipse').removeClass('elipsePistachio')
    $('.elipse').removeClass('elipseBelga')
    $('.elipse').removeClass('elipseDilatte')
    $('.elipse').removeClass('elipseFramboesa')
}