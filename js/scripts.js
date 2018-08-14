function replaceVowel(phrase) {
    alert(phrase);
    return phrase.replace(/['a', 'e', 'i', 'o', 'u']/gi, '-');

}


$(document).ready(function() {

  $("#txtInputForm").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#txtInput").val();
    var userInputArray = userInput;

    $(".output").text(replaceVowel(userInputArray));
    $(".toHide").hide();
    $('.output').show();
  });


});
