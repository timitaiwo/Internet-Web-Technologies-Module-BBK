let biggest_value = (first, second) => first > second ? first : second;


// Question 1
// ques_one_elem = document.getElementById("test_id_one");

// let first_val = Number(window.prompt("What is your first integer?"));
// let second_value = Number(window.prompt("What is your second integer?"));
// let ques_one_biggest = biggest_value(first_val, second_value);

// ques_one_elem.innerHTML = `<p>The larger of ${first_val} and ${second_value} is ${ques_one_biggest}`;


// Question 2
let when_button_clicked = () => {

    let first_value = document.getElementById("first_word").value;
    first_value = Number(first_value);
    let second_value = document.getElementById("second_word").value;
    second_value = Number(second_value);

    let ques_two_biggest = biggest_value(first_value, second_value);

    ques_two_result = document.getElementById("ques_two_result");

    ques_two_result.innerHTML = `<p>The larger of ${first_value} and ${second_value} is ${ques_two_biggest}`;

}


let ques_two_button = document.getElementById("ques_two_button");
ques_two_button.addEventListener('click', when_button_clicked)









    