// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

$("li, button").mouseenter(function(){
    $(this).toggleClass("focus");
}
);

$("li, btn").mouseleave(function(){
    $(this).toggleClass("focus");
}
);


$(".aboutMe").click(function(){            
    document.getElementById("aboutMeH1").scrollIntoView();
  });


$(".myWork").click(function(){            
    document.getElementById("myworkH1").scrollIntoView();
  });

