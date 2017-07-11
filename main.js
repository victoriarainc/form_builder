// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  // console.log( first );
  // Log the string "First Name"
  // console.log( first.label );
})();


// -------- Your Code Goes Below this Line --------

// ==================== This is the long way ==============
// ============== to do it ================================
// let form = document.querySelector("#fields");
//
// let firstname = document.createElement( "input" );
// firstname.placeholder = "First Name";
// firstname.type = "input";
// firstname.id = "user-first-name";
//
// let lastname = document.createElement( "input" );
// let email = document.createElement( "input" );
// let url = document.createElement( "input" );
// let lang = document.createElement( "select" );
// let comments = document.createElement( "textarea" );
// let mobilenum = document.createElement( "input" );
// let homenum = document.createElement( "input" );
//
//
// form.appendChild(firstname);
// form.appendChild(lastname);
// form.appendChild(email);
// form.appendChild(url);
// form.appendChild(lang);
// form.appendChild(comments);
// form.appendChild(mobilenum);
// form.appendChild(homenum);

// firstname.setAttribute ("src", formData[i].icon);
// lastname.setAttribute ("src", formData[i].icon);
// email.setAttribute ("src", formData[i].icon);
// url.setAttribute ("src", formData[i].icon);
// lang.setAttribute ("src", formData[i].icon);
// comments.setAttribute ("src", formData[i].icon);
// mobilenum.setAttribute ("src", formData[i].icon);
// homenum.setAttribute ("src", formData[i].icon);
//
// firstname.appendChild (First Name);
// lastname.appendChild ();
// email.appendChild ();
// url.appendChild ();
// lang.appendChild ();
// comments.appendChild ();
// mobilenum.appendChild ();
// homenum.appendChild ();

// for (var i = 0; i < formData.length; i++) {
//   if(formData[i].type === "select") {
//     // let inputlabel = document.createElement("label");
//     // let inputtype = document.createElement("input");
//     // label.innerHTML = formData[i].label;
//     // form.appendChild(inputlabel);
//     // form.appendChild(inputtype);
//
//   }
//   else if(formData[i].type === "textarea"){
//     // let selectlabel = document.createElement("select");
//     // let selecttype = document.createElement("select");
//     // label.innerHTML = formData[i].label;
//     // form.appendChild(selectlabel);
//     // form.appendChild(selecttype);
//   }
//   else {
//     // let textarealabel = document.createElement("textarea");
//     // let textareatype = document.createElement("textarea");
//     // label.innerHTML = formData[i].label;
//     // form.appendChild(textarealabel);
//     // form.appendChild(textareatype);  let label = document.createElement('label');
//       let label = document.createElement('label')
//       let type = document.createElement('input');
//       label.innerHTML = formData[i].label;
//       wholeform.appendChild(label);
//       wholeform.appendChild(input);
//   }
//   }
let form = document.querySelector("#fields");
for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === 'textarea') {
    // textarea things
    let comment_input = document.createElement('textarea');
    comment_input.placeholder = formData[i].label;
    comment_input.id = formData[i].id;
    comment_input.type = formData[i].type;
    form.appendChild(comment_input);
  } else if (formData[i].type === 'select') {
    // select things
    let select_input = document.createElement('select');
    // select_input.value = formData[i].label;
    select_input.id = formData[i].id;
    select_input.type = formData[i].type;

    let option = document.createElement('option');
    option.text = formData[i].label;
    select_input.appendChild(option);


      for (let j = 0; j < formData[i].options.length; j++) {
        let option = document.createElement('option');
        option.value = formData[i].options[j].value;
        option.text = formData[i].options[j].label;
        select_input.appendChild(option);
      }

    form.appendChild(select_input);

  } else if (formData[i].type === 'email') {
    let email_input = document.createElement('input');
    email_input.id = formData[i].id;
    email_input.type = formData[i].type;
    email_input.placeholder = formData[i].label;
    form.appendChild(email_input);

  } else {
    let input = document.createElement('input');
    input.placeholder = formData[i].label;
    input.id = formData[i].id;
    input.type = formData[i].type;
    form.appendChild(input);
  }
};
