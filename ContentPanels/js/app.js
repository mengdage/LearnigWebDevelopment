$(
  function(){

// accordion
  $(".accordion").on("click", ".accordion-control", function(e){
    e.preventDefault();
    // print("hello");
    // console.log("hello");
    $(this)
    .next(".accordion-panel")
    .not(":animated")
    .slideToggle();
  });


  // tabbed panels
  $(".tabbed-panel").each(function(){
    var $this = $(this);
    var $tab  = $this.find("li.active");
    var $link = $tab.find("a");
    var $panel = $($link.attr("href"));

    $this.on("click", ".tabbed-control", function(e){
      e.preventDefault();
      $link = $(this);
      console.log($link);
      var id = $link.attr("href");
      if(id && !$link.is(".active")){
        $tab.removeClass("active");
        $panel.removeClass("active");

        $panel = $(id).addClass("active");
        $tab = $link.parent().addClass("active");
      }

    });


  });

  // modal window
  var $content = $("#content");
  $content.detach();
  $("#showModal").on("click", function(){
  modal.open({
    content: $content
  });

});


  }
);
