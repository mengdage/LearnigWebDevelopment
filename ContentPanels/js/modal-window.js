var modal = (function(){
  var $modal = $("<div class='modal'>");
  var $content = $("<div class='modal-content'>");
  var $close = $("<button class='modal-close'>close</button>");

  $close.on("click", function(e){
    e.preventDefault();

    modal.close();

  });
  $modal.append($content, $close);

  return {
    open: function(settings){
      $content.empty().html(settings.content);
      $content.css({
        width: settings.width || "auto",
        height: settings.height || "auto"
      });

      $modal.appendTo('body');
      modal.center();
      $(window).on('resize', modal.center);

    },
    center: function(){
      var t = Math.max(($(window).height() - $modal.outerHeight())/2, 0);
      var l = Math.max(($(window).width() - $modal.outerWidth())/2, 0);
      $modal.css({
        left: l,
        top: t
      });

    },
    close: function(){
      $content.empty();
      $modal.detach();
      $(window).off('resize', modal.center);
    }

  }

})();
