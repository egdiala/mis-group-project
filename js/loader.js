$(document).ready(function (){
    $('#sidenavCollapse').on('click', function(){
        $('#sidenav').toggleClass('active')
    })
    
});
$('#confirm').on('show.bs.modal', function(event){
    $('#parent').removeClass('fadeIn');
});
$('#confirm').on('hidden.bs.modal', function(e){
    $('#parent').addClass('fadeIn');
})