$(document).ready(function(){

   $.ajax({
       type: 'GET'
       contentType: 'application/json',
       url: 'https://gilsonpolito-api.herkuapp.com/alunos',
       dataType: 'json' ,
       success: function(data, textStatus, jqXHR){
                $.each(data, function(index, iTemData){
                    insereLinha(itemData.id, itemData.nome, itemData.site);

                })
       } ,
       error: function(jqXHR, textStatus, errorThrown)
                alert('Status: ' + textStatus, errorThrown 'n/Tipo:' + errorThrown + '/nMensagem: ' + jqXHR. responseText);{

                }
    
                
     })

   

})
  
function insereLinha(id, nome, site){



     let linha = '<tr>'
     '<td class=\'col-xs-2\'>' +
     '<a href=\ '#\' class=\' action_edit\' value=\' ' + id +
     '"> 
     '<img src=\ 'imagens/editar.jpeg\' /></a>' 
     + <img src=\ 'imagens/excluir.jpeg\' />' + '</td>''</td class-\'col - xs-4\'>' + nome + 
     '<td>'
     </td class=\'col-xs-6\'>' + site + 
     '</td>'
     </tr>
    $('#alunoTable').append(linha);
}