
// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then(response => response.json())
// // .then(json => displayNum(json));

// //   json.forEach(user => {
// //     const newUser = `
// // <p> the user id ${user.id} and username ${user.username} ${user.email}
// //  ${user.address.city} </p>`;
// //     body.append(newRow);
// // });



// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         // Process the JSON data here
//         displayNum(json);

//         // Iterate over the JSON data and append to body
//         json.forEach(user => {
//             const newUser = `
//          the user id ${user.id} and username ${user.username} ${user.email}
//         ${user.address.city} `;
//             $("#selected-number").append(newUser);
//             console.log(newUser);
//             // Append user data directly to the showResult div
//         });
//     });




// function displayNum() {

//     //     const showResult = document.createElement('div');
//     //     $("body").append(showResult);
//     // showResult.innerHTML += newUser; 
//     //    console.log($("#selected-number"))

// }


// again:

// const selectedNum = document.createElement('select');
// selectedNum.setAttribute('id', 'selected-number');

// const defaultOption = document.createElement('option');
// defaultOption.setAttribute('value', ''); // Set value to empty string
// defaultOption.innerHTML = ''; // Set innerHTML to empty string
// selectedNum.appendChild(defaultOption);

// for (let i = 1; i <= 10; i++) {
//     const option = document.createElement('option');
//     option.setAttribute('value', i);
//     option.innerHTML = i;
//     selectedNum.appendChild(option);
// }

// document.body.appendChild(selectedNum);

// selectedNum.addEventListener('change', function () {
//     const selectedValue = selectedNum.value;
//     console.log("Selected value:", selectedValue);

//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(json => {
//             const user = json[selectedValue - 1]; // Adjusting index to match the selected value
//             const newRow = `User ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, City: ${user.address.city}`;
//             console.log(newRow);
//             const showElement = document.createElement('div');
//             // Set the inner HTML of the new div element to the newRow content
//             showElement.innerHTML = newRow;

//             // Append the new div element to the HTML body
//             document.body.appendChild(showElement);
//         });
// });

// with jquery

$(function() {
    // Create the select element
    const selectedNum = $('<select>').attr('id', 'selected-number');

    // Add the default empty option
    const defaultOption = $('<option>').attr('value', '').html('');
    selectedNum.append(defaultOption);

    // Add options from 1 to 10
    for (let i = 1; i <= 10; i++) {
        const option = $('<option>').attr('value', i).html(i);
        selectedNum.append(option);
    }

    // Append the select element to the body
    $('body').append(selectedNum);

    // Add change event listener inside the jQuery function
    selectedNum.on('change', function () {
        const selectedValue = selectedNum.val();
        console.log("Selected value:", selectedValue);

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                const user = json[selectedValue - 1]; // Adjusting index to match the selected value
                const newRow = `User ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, City: ${user.address.city}`;
                console.log(newRow);
                const showElement = document.createElement('div');
                // Set the inner HTML of the new div element to the newRow content
                showElement.innerHTML = newRow;

                // Append the new div element to the HTML body
                document.body.appendChild(showElement);
            });
    });
});
