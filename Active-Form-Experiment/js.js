var i = 0;

var questionSample = $("#questionSample").html();

function QuestionAdd() {

    var tempQuestionSample = questionSample;

    let questionSampleDiv = $('<div>', {
        "id": "questionSample" + i,
        "class": "questionSample"
    });

    let questionNumber = $('<h4>', {
        "text": "Question " + (i + 1),
    });

    let hrLine = $('<hr>', {
        "style": "width:50%",
        "class": "mx-auto border border-primary"
    });

    $("#questionContainer").append(

        questionSampleDiv.append(

            questionNumber,
            $(tempQuestionSample).show(),
            hrLine,

        ),
    );

    $(questionSampleDiv).find(".Q_Type").attr("id", "Q_Type" + i);
    $(questionSampleDiv).find(".Q_Name").attr("id", "Q_Name" + i);
    $(questionSampleDiv).find(".Q_Title").attr("id", "Q_Title" + i);
    $(questionSampleDiv).find(".Q_isRequired").attr("id", "Q_isRequired" + i);
    $(questionSampleDiv).find(".Q_Order").attr("id", "Q_Order" + i);

    $(questionSampleDiv).find(".Q_Choices_Button").attr("data-id", i + 1);

    i++;

}

var j = 0;

var choicesSample = $("#choicesSample").html();

function ChoicesAdd(element) {

    var tempChoicesSample = choicesSample;

    let choicesSampleDiv = $('<div>', {
        "id": "choicesSample" + j,
        "class": "choicesSample",
    });

    var dataId = $(element).attr("data-id");

    $($(".choicesContainer")[dataId]).append(

        choicesSampleDiv.append(

            $(tempChoicesSample).show()

        ),
    );

    $(choicesSampleDiv).find(".Q_ChoiceValue").attr("id", "Q_ChoiceValue" + j);
    $(choicesSampleDiv).find(".Q_ChoiceText").attr("id", "Q_ChoiceText" + j);
    $(choicesSampleDiv).find(".Q_ChoiceOrder").attr("id", "Q_ChoiceOrder" + j);

    j++;
}

function Submit() {
    var surveyType = $("#surveyType").val();
    var description = $("#description").val();
    var title = $("#title").val();
    var logo = $("#logo").val();
    var logoPosition = $("#logoPosition").val();
    var pagePrevText = $("#pagePrevText").val();
    var pageNextText = $("#pageNextText").val();
    var completeText = $("#completeText").val();
    var startSurveyText = $("#startSurveyText").val();
    var completingSurvey = $("#completingSurvey").val();

    let questionSamples = $('.questionSample');

    var questions_data = Array();

    for (i = 0; i < questionSamples.length; i++) {

        let questionSample = questionSamples[i];
        let question_data = {
            "type": $(questionSample).find('.Q_Type').val(),
            "name": $(questionSample).find('.Q_Name').val(),
            "title": $(questionSample).find('.Q_Q_Title').val(),
            "isRequired": $(questionSample).find('.Q_isRequired').val(),
            "order": $(questionSample).find('.Q_Order').val(),

            "choices": Array()
        }
        let choicesContainer = $(questionSamples).find('.choicesSample');

        for (let y = 0; y < choicesContainer.length; y++) {
            let choice_data = choicesContainer[y];

            question_data.choices = {
                "choicesValue": $(choice_data).find('.Q_ChoiceValue').val(),
                "choicesText": $(choice_data).find('.Q_ChoiceText').val(),
                "choicesOrder": $(choice_data).find('.Q_ChoiceOrder').val(),
            }
        }
        questions_data.push(question_data)

    }

    let toSent = {

        "surveyType": surveyType,
        "description": description,
        "title": title,
        "logo": logo,
        "logoPosition": logoPosition,
        "pagePrevText": pagePrevText,
        "pageNextText": pageNextText,
        "completeText": completeText,
        "startSurveyText": startSurveyText,
        "completingSurvey": completingSurvey,

        "questions": questions_data,

    }

    $.ajax({
        url: "",
        type: "POST",
        headers: {
            "": ""
        },
        data: toSent
    })

}

/* Form Validation */
(function () {
    'use strict';
    window.addEventListener('load', function () {

        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();