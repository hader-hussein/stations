
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


/***img**** */
function changefile(index)
{
	var file=$('#files-t'+index);
	

}


   function readURLt(input, index) {
	console.log(index,input);
	if (input.files && input.files[0]) {
	  var reader = new FileReader();
   
	  reader.onload = function(e) {
		var container = document.getElementById('logoContainer-t' + index);
		
		var img = document.createElement('img');
		img.className = 'logo-preview';
		img.src = e.target.result;
		img.alt = 'Logo Preview';
		img.id = 'logo-preview-t' + index;
		container.appendChild(img);
	//     $('#logoContainer-t'+ index).attr('src', e.target.result);
	  }
   
	  reader.readAsDataURL(input.files[0]);
	}
   }
 
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

  //modele//  
	
	   function showPopup(index) {
		const inputField = document.getElementById("input-field"+index);
		
		const popupForm = document.querySelector("#popup-form"+index);
		popupForm.innerHTML = "";
		const numInputs = parseInt(inputField.value);
		
		// const inputValues = [];
		for (let i = 0; i < numInputs; i++) {
		  const input = document.createElement("input");
		  input.type = "text";
		  input.name = `input${i}`;
		  input.placeholder = `ارتفاع الخزان ${i + 1}(بالمتر) `;
		  input.value = "";
		  popupForm.appendChild(input);
		}
	     
		   popupForm.addEventListener("submit", function(event) {
			event.preventDefault();
			closePopup(index, popupForm);
		   });
	   }
	   function displayPopup(index)
	   {
		const popup = document.getElementById("myModal"+`${index}`);
		popup.style.display = "block";
	   }
	   
	//    function closePopup(index) {
	// 	const popup = document.getElementById("myModal"+`${index}`);
	// 	popup.style.display = "none";
		
	// 	const popupForm = document.querySelector(".popup-form");
	// 	while (popupForm.firstChild) {
	// 	  popupForm.removeChild(popupForm.firstChild);
	// 	}
	   
	// 	const uniqueValues = [];
	// 	const inputFields = document.querySelectorAll(".popup-input");
	// 	for (let i = 0; i < inputFields.length; i++) {
	// 	  const inputValue = inputFields[i].value;
	// 	  if (inputValue && !inputValue.includes(inputValue)) {
	// 	    uniqueValues.push(inputValue);
	// 	    inputValue.push(inputValue);
	// 	  }
	// 	}
	   
	// 	inputFields.value = uniqueValues.join(', ');
	//    }
	function closePopup(index, popupForm) {
		const popup = document.getElementById("myModal" + `${index}`);
		popup.style.display = "none";
	   
		const inputField = document.getElementById("input-field" + index);
		const inputValues = [];
		for (let i = 0; i < popupForm.children.length; i++) {
		  const input = popupForm.children[i];
		  if (input.type === "text") {
		    inputValues.push(input.value);
		  }
		}
	   
		inputField.value = inputValues.join(', ');
	   }