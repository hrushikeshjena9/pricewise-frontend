// Banner Slider Js

// (function () {
//   const second = 1000,
//         minute = second * 60,
//         hour = minute * 60,
//         day = hour * 24;

//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//       dd = String(today.getDate()).padStart(2, "0"),
//       mm = String(today.getMonth() + 1).padStart(2, "0"),
//       yyyy = today.getFullYear(),
//       nextYear = yyyy + 1,
//       dayMonth = "09/30/",
//       birthday = dayMonth + yyyy;
  
//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//     birthday = dayMonth + nextYear;
//   }
//   //end
  
//   const countDown = new Date(birthday).getTime(),
//       x = setInterval(function() {    

//         const now = new Date().getTime(),
//               distance = countDown - now;

//         document.getElementById("days").innerText = Math.floor(distance / (day)),
//           document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//           document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//           document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//         //do something later when date is reached
//         if (distance < 0) {
//           document.getElementById("countdown").style.display = "none";
//           clearInterval(x);
//         }
//         //seconds
//       }, 0)
//   }());

$(window).scroll(function() {
  $('.stat-number:not(.animated)').each(function() {
    // Get the initial text value and replace comma with dot for parsing
    var textValue = $(this).text().replace(",", ".");
    // Get the decimal precision (number of digits after the dot)
    var size = textValue.split(".")[1] ? textValue.split(".")[1].length : 0;

    // Add the 'animated' class and start the animation
    $(this).addClass('animated').prop('Counter', 0).animate({
      Counter: parseFloat(textValue) // Parse the corrected number
    }, {
      duration: 5000,
      step: function(now) {
        // Convert the value back to string with the correct decimal precision and replace dot with comma
        var formattedValue = now.toFixed(size).replace(".", ",");
        $(this).text(formattedValue);
      }
    });
  });

  $('.count:not(.animated)').each(function() {
    // Get the initial text value and replace comma with dot for parsing
    var textValue = $(this).text().replace(",", ".");
    
    // Add the 'animated' class and start the animation
    $(this).addClass('animated').prop('Counter', 0).animate({
      Counter: parseFloat(textValue) // Parse the corrected number
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        // Format the number with thousand separators and replace dot with comma
        var formattedValue = now.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".").replace(".", ",");
        $(this).text(formattedValue);
      }
    });
  });
});






// anil commented it -------------------------
//  document.getElementById("serviceSelect").addEventListener("change", function() {
//     var selectedOption = this.value;
    
//     document.querySelectorAll("#faqBox > div").forEach(function(faq) {
//         faq.style.display = "none";
//     });

//     document.getElementById(selectedOption + "FAQ").style.display = "block";
// });


 // Close other accordion items when one is clicked
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var isOpen = this.classList.contains('show');
      accordionItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          var otherCollapse = otherItem.querySelector('.collapse');
          var otherAccordionButton = otherItem.querySelector('.accordion-button');
          if (otherCollapse.classList.contains('show')) {
            otherCollapse.classList.remove('show');
            otherAccordionButton.classList.add('collapsed');
          }
        }
      });
      if (!isOpen) {
        var collapse = this.querySelector('.collapse');
        var accordionButton = this.querySelector('.accordion-button');
        collapse.classList.add('show');
        accordionButton.classList.remove('collapsed');
      }
    });
  });





$(document).ready(function() {
  // Add 'selected' class to the first .img-btn element onload
  $('.img-btn:first').addClass('selected');

  // Handle radio button change event
  $('.img-btn input[type="radio"]').change(function() {
    if ($(this).is(":checked")) {
      $('.img-btn').removeClass('selected'); // Remove selected class from all .img-btn elements
      $(this).closest('.img-btn').addClass('selected'); // Add selected class to the closest .img-btn element
    }
  });
});


//  Mobile Menu
$("#cssmenu").menumaker({
  title: "",
  format: "multitoggle",
});

function toggleContent(divId) {
  var divs = document.getElementsByClassName("content");
  for (var i = 0; i < divs.length; i++) {
      divs[i].style.display = "none"; // Hide all content
  }
  var selectedDiv = document.getElementById(divId);
  selectedDiv.style.display = "block"; // Show selected div
}


// $(window).scroll(function() {
//   var sticky = $('.header'),
//     scroll = $(window).scrollTop();

//   if (scroll >= 100) sticky.addClass('fixedhead');
//   else sticky.removeClass('fixedhead');
// });


// Go To Top
jQuery(document).ready(function () {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".back-to-top").fadeIn(duration);
    } else {
      jQuery(".back-to-top").fadeOut(duration);
    }
  });

  jQuery(".back-to-top").click(function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
});




     // Script to handle selection of dropdown items
$(document).ready(function() {
  // Set the initial dropdown button text to "Personal" with the icon
  $(".btn-secondary").html('<i class="fas fa-user"></i> Personal');

  $(".dropdown-menu a").click(function() {
    var selectedValue = $(this).data("value");
    // Update button text with the selected option value and its corresponding icon
    $(".btn-secondary").html($(this).html());
  });
});


  $(document).ready(function() {
      // Set the default icon and name
      var defaultIcon = '<i class="fas fa-user"></i>';
      var defaultName = 'Personal';
      $('#defaultIcon').html(defaultIcon + ' ' + defaultName);

      $(".dropdown-menu a").click(function() {
          var selectedIcon = $(this).find("i").clone();
          var selectedValue = $(this).data("value");
          var selectedName = $(this).text().trim();

          // Update input field placeholder
          $("#username").attr("placeholder", "E.g. " + selectedValue);
          // Update the icon and name inside the input field
          $('#defaultIcon').html(selectedIcon.clone().add('<span>' + selectedName + '</span>'));
      });
  });




    // Script to show/hide additional input box based on radio button selection
  document.addEventListener("DOMContentLoaded", function() {
    var radioButtons = document.querySelectorAll('input[name="postalAddressDifferent"]');
    var additionalInputRow = document.getElementById('additionalInputRow');

    // Function to toggle visibility of additional input box
    function toggleAdditionalInput() {
      if (document.getElementById('yes') && document.getElementById('yes').checked) {
        additionalInputRow.style.display = 'block';
      } else {
        additionalInputRow && additionalInputRow.style.display == 'none';
      }
    }

    // Initially call toggle function
    toggleAdditionalInput();

    // Add event listener to each radio button
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('change', toggleAdditionalInput);
    });
  });

// Toggle Password Visibility
  // document.querySelector('.toggle-password').addEventListener('click', function () {
  //     const passwordInput = document.getElementById('password');
  //     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  //     passwordInput.setAttribute('type', type);
  //     this.classList.toggle('fa-eye');
  //     this.classList.toggle('fa-eye-slash');
  // });
 

  // Sunset animation
