let urlAPI = 'https://gilsonpolito-api.herokuapp.com/alunos/';

$(document).ready(function(){

    $.ajax({
       type: 'GET',
       contentType: 'application/json',
       url: urlAPI,
       dataType: 'json',
       success: function(data, textStatus, jqXHR){
            $.each(data, function(index, itemData){
                insereLinha(itemData.id, itemData.nome, itemData.site);

            });
        },
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

$('update-to-list').on('click', (evento) =>{
    evento.preventDefault();
    $ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: urlAPI,
        dataType: 'json'
        data: formToJSON(),
        sucess: function(){
            $('AlunoTable tr').each(function(){
                if($(this).find('.action_edit').attr('value') ==
                $('#idHidden').val()){
                    $(this).find('#nameIdTb').html($('#nimeId').val());
                    $(this).find('#siteIdTb').html($('emailId').val());

                    $('#formAluno').get(0).reset();
                    $('#add-to-list').removeClass('d-none');
                    $('#update-to-list').addClass('d-none');
                    
                }
                                       
               
            })
            
        },

        error: function(jqXHR, textStatus, errorThrown){
            alert('Status: ' + textStatus +
                 'n/Tipo:'  + errorThrown + 
                 '/nMensagem: ' + jqXHR. responseText);     
            }

    })
}

$('#add-to-list').on('click', (evento) =>{
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
               
                handler();

            },
            error: function(jqXHR, textStatus, errorThrown){
               alert('Status: ' + textStatus, errorThrown 'n/Tipo:' 
               + errorThrown + '/nMensagem: ' + jqXHR. responseText);
            }
             
    })
})

function handler(){

    $(' .action_delete').each(function){
        $(this).click(function(evento)){
            evento.stopImmediatePropagation();
            evento.preventDefault();
            let tr = $(this).parent().parent()
            if(confirm('Deseja remover o aluno?')){
            $ajax({
                 type: 'DELETE'
                 contentType: 'application/json'
                 url:urlAPI + $(this).attr('value'),

                    sucess: function(){
                        tr.remove();
                    },

                    error: function(jqXHR, textStatus, errorThrown){
                        alert('Status: ' textStatus +
                        '\nTipo:' + errorThrown +
                        '\nMensagem:' + jqXHR, responseText);
                    }
            });
        });
    });

    $('action_edit').each(function(){
        $(this).click(function(evento){
        evento.preventDefault();
        $ajax({
            type: 'GET',
            contentType: 'application/json',
            url: urlAPI + $(this).attr('value'),

            sucess: (data){
              $('#idHidden').val(data.id);            
              $('#nomeId').val(data.nome); 
              $('#emailId').val(data.site);
            }
            
            error: function(jqXHR, textStatus, errorThrown){
               alert('Status: ' textStatus +
            '\nTipo:' + errorThrown +
            '\nMensagem:' + jqXHR, responseText);

            }
        
        });
      
    });

}

function formTOJSON(){
    return JSON.stringify({
         "id": $('idHidden').val(),
         "nome": $('#nomeId').val(),
         "site": $('#emailId').val()

    });

}    
