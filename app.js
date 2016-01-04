/**
 * Created by ericanderson on 1/4/16.
 */

$(document).ready(function(){
    getCat('ceiling');
    enable();

})

function getCat(type) {

    var giphy = 'http://api.giphy.com/v1/gifs/search?q=' + type + '+cat&api_key=dc6zaTOxFJmzC';

    $.ajax("" + giphy).then(function(response){

        $(".content").text('');
        var $content = response['data'][0]['images']['original']['url'];
        $(".content").append("<img src=" + $content + " />");
    });
}

function enable() {
    $("#cat").on("submit", function(event){
        event.preventDefault();
        var values = {};

        var serializedArray = $("#cat").serializeArray();

        $.each(serializedArray, function(i, field){
            values[field.name] = field.value;
        })

        getCat(values.type);
    });
}