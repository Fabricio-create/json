let urlAPI = 'https://gilsonpolito-api.herokuapp.com/alunos';

$(document).ready(function(){

    $.ajax({
       type: 'GET',
       contentType: 'application/json',
       url: urlAPI,
       dataType: 'json' ,
       success: function(data, textStatus, jqXHR){
                $.each(data, function(index, itemData){
                    insereLinha(itemData.id, itemData.nome, itemData.site);

                });
       } ,
       error: function(jqXHR, textStatus, errorThrown){
       alert('Status: ' + textStatus +
            'n/Tipo:'  + errorThrown + 
            '/nMensagem: ' + jqXHR. responseText);     
      }
    });
});
    
  
function insereLinha(id, nome, site){

     let linha =  '<tr>' +
                        '<td class="col-xs-2">' + 
                        '<a href="#" class="action_edit" value"' + id +
                         '"><img src="imagens/editar.jpeg" /></a>' +
                         '<a href="#" class="action_delete" value="' + id +
                        '"><img src="imagens/excluir.jpeg" /></a>' + 
                         '</td>' + 
                        '<td class-"col - xs-4">' +
                             nome + 
                        '</td>'+
                        '<td class="col-xs-6">' + 
                             site + 
                        '</td>'
                  '</tr>';

    $('#alunoTable').append(linha);

}

/*$('#add-to-list').on('click', (evento) =>{
      evento.preventDefault();
     
      $ajax({
          type: 'post'
          contentType: 'application/json',
          url : urlAPI,
          dataType: 'json',
          data: formTOJSON(),
          success: function(data, textStatus, jqXHR){
            $.each(data, function(index, iTemData){
                insereLinha(itemData.id, itemData.nome, itemData.site);


            })
            error: function(jqXHR, textStatus, errorThrown){
            alert('Status: ' + textStatus, errorThrown 'n/Tipo:' 
            + errorThrown + '/nMensagem: ' + jqXHR. responseText);
        },
  
    })
})

function formTOJSON(){
    return JSON.stringify({
         "id": $('idHidden').val(),
         "nome": $('#nomeId').val(),
         "site": $('#emailId').val()

    });

}    
*/