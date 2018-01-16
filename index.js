let flag=0
let start=0,end=20;
var render=(Data)=>{
	Data.forEach((item)=>{
	  $('#add').append(`<div class="col-xs-4 col-md-2 myStyle" >
        <a href=${item} target="_blank">
          <img class="img-responsive"  src="${item}" >
        </a>
    </div>`)
	
	
	 /* $('#add').append(`<div class="col-xs-4 col-md-2 myStyle" >
        <a href=${item} target="_blank">
         <video width="400" controls>
  <source src=${item} type="video/mp4">
</video>
        </a>
    </div>`) */
	
})
}



var func=()=>{
console.log("here")
$.ajax({
        type: "GET",
        url: "http://localhost:7001/service?s="+start+"&e="+end,
        data: { 'pageNum': $('#pageNum').val() },
        dataType: "json",
        success: function (response) {
				start=end;
				end=end+20;
               // $('#add').append(response.html);
			   console.log(response);
			   render(response.html);
				$('.lds-spinner').remove();
				flag=0;
				$('.lds-spinner').remove();
				
			console.log("hello");
		if($(window).height() >= document.body.offsetHeight ){
			funcAn();
			 func();
		 }
  }
        });
}

$(window).on('load', function(){
	
    func();
			console.log($(document).height());
   		 console.log($(this).scrollTop());
		 console.log($(this).innerHeight());
		
});


$(window).on('scroll', function(){

		console.log($(document).height());
   		 console.log($(this).scrollTop());
		 console.log($(this).innerHeight());
		 	 if(($(this).scrollTop() + $(this).innerHeight() >= $(document).height()) && (flag==0)){
		 flag=1
		 funcAn();
      func();   
   }  
});



















var funcAn=()=>{
//	console.log("funcAN")
$('#ann').append(`<svg class="lds-spinner annspiln" width="50px"  height="50px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(30 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(60 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(90 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(120 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(150 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(180 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(210 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(240 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(270 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(300 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(330 50 50)">
  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#51CACC">
    <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g></svg>`
)	
	
}