$(document).ready(function () {
  //For Card Number formatted input
  var cardNum = document.getElementById("cr_no");
  cardNum.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = this.value[i];
      if (c < "0" || c > "9") {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(" ");
    this.selectionStart = this.selectionEnd = caretPosition;
  };

  //For Date formatted input
  var expMounth = document.getElementById("mm");
  var expYear = document.getElementById("yy");
  
  expMounth.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
      parts.push(sanitizedValue.substring(i, i + 2));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = this.value[i];
      if (c < "0" || c > "9") {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join("/");
    this.selectionStart = this.selectionEnd = caretPosition;
  };

  expYear.onkeyup = function (e) {
    if (this.value == this.lastValue) return;
    var caretPosition = this.selectionStart;
    var sanitizedValue = this.value.replace(/[^0-9]/gi, "");
    var parts = [];

    for (var i = 0, len = sanitizedValue.length; i < len; i += 2) {
      parts.push(sanitizedValue.substring(i, i + 2));
    }

    for (var i = caretPosition - 1; i >= 0; i--) {
      var c = this.value[i];
      if (c < "0" || c > "9") {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 2);

    this.value = this.lastValue = parts.join("/");
    this.selectionStart = this.selectionEnd = caretPosition;
  };

  // Tooltip
  $('a[data-toggle="tooltip"]').tooltip({
    animated: "fade",
    placement: "bottom",
    html: true,
  });

  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });
});

(function() {
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
