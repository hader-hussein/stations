
const navigateToFormStep = (stepNumber) => {
  
	document.querySelectorAll(".form-step").forEach((formStepElement) => {
	    formStepElement.classList.add("d-none");
	});
   
	document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
	    formStepHeader.classList.add("form-stepper-unfinished");
	    formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
	});
  
	document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    
	const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
	
	formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
	formStepCircle.classList.add("form-stepper-active");
    
	for (let index = 0; index < stepNumber; index++) {
	   
	    const formStepCircle = document.querySelector('li[step="' + index + '"]');
	   
	    if (formStepCircle) {
		  
		   formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
		   formStepCircle.classList.add("form-stepper-completed");
	    }
	}
 };
 
 document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    
	formNavigationBtn.addEventListener("click", () => {
	   
	    const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
	   
	    navigateToFormStep(stepNumber);
	});
 });
 (function($) {
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
 
	$('.accordion a').click(function(j) {
	    var dropDown = $(this).closest('li').find('.table-content');
 
	    $(this).closest('.accordion').find('.table-content').not(dropDown).slideUp();
 
	    if ($(this).hasClass('active')) {
		   $(this).removeClass('active');
	    } else {
		   $(this).closest('.accordion').find('a.active').removeClass('active');
		   $(this).addClass('active');
	    }
 
	    dropDown.stop(false, true).slideToggle();
 
	    j.preventDefault();
	});
 })(jQuery);
   /**********profil-img********** */
   $("#filesr").change(function (){
	var fileName = $(this).val();
	if(fileName.length >0){
$(this).parent().children('span').html(fileName);
	}
	else{
		$(this).parent().children('span').html("Choose");

	}
});
//file input preview
function readURLr(input) {
	if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
					$('#logoContainerr img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
	}
}
$("#filesr").change(function(){
	readURLr(this);
});
/******* */
$("#files").change(function (){
	var fileName = $(this).val();
	if(fileName.length >0){
$(this).parent().children('span').html(fileName);
	}
	else{
		$(this).parent().children('span').html("Choose");

	}
});
//file input preview
function readURL(input) {
	if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
					$('#logoContainer img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
	}
}
$("#files").change(function(){
	readURL(this);
});
/********************* */
/******* */
$("#files-t").change(function (){
	var fileName = $(this).val();
	if(fileName.length >0){
$(this).parent().children('span').html(fileName);
	}
	else{
		$(this).parent().children('span').html("Choose");

	}
});
//file input preview
function readURLt(input) {
	if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
					$('#logoContainer-t img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
	}
}
$("#files-t").change(function(){
	readURLt(this);
});
 /**********profil-img********** */
 $("#file-history").change(function (){
	var fileName = $(this).val();
	if(fileName.length >0){
$(this).parent().children('span').html(fileName);
	}
	else{
		$(this).parent().children('span').html("Choose");

	}
});
//file input preview
function readImg(input) {
	if (input.files && input.files[0]) {
			var reader = new FileReader();            
			reader.onload = function (e) {
					$('#img-history img').attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
	}
}
$("#file-history").change(function(){
	readImg(this);
});

        // Get the modal
        var modal = document.getElementById("myModal");
        
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
          modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = 'none';
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
        