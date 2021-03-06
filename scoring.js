$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = subject_points.reduce(function(a, b){
    return a + b;
    });
    $("#sum_indicate").text(sum);
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
  };
  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    } else {
      return "D";
    }
  };
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "Pass";
    for(let i=0; i<number; i++) {
      if (subject_points[i] < 60) {
        judge = "Failure";
        break;
      }
    }
    return judge;
  };
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}, ${pass_or_failure}.</label>`);
  };
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  $('#btn-declaration').click(function() {
    $('#alert-indicate').remove();
    $('#declaration').text(judgement());
  });
});
