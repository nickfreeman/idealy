$(function(){

	adjustItems($(window).width());
	$(window).resize(function() {
	    adjustItems($(window).width());
	});

    var container = $('#masonry-container');

    $('#masonry-container').masonry({
      itemSelector : '.item',
      columnWidth: function( containerWidth) {
                if (containerWidth > 480) {
                	return 240;
                } else {
                	var colWidth = containerWidth * 0.5;
                	return colWidth;
                }
              },
      isAnimated: true,
      isFitWidth: true
    });

    $(".like-button").click(function(){
    	var likeCount = this.parentNode.getElementsByClassName('like-count')[0].innerHTML;
    	likeCount++;
    	this.parentNode.getElementsByClassName('like-count')[0].innerHTML = likeCount;
    });

    $(".follow-button").click(function(){
        console.error('blah');
    	var followCount = this.parentNode.getElementsByClassName('follow-count')[0].innerHTML;
    	followCount++;
    	this.parentNode.getElementsByClassName('follow-count')[0].innerHTML = followCount;
    });

    $(".contributorButton").click(function(){
    });

    $(window).load(function(){
        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 210,
            itemMargin: 20,
            mousewheel: false,
            controlNav: false,
            keyboard: false,
            slideshow: false,
        });
    });

    $(window).bind('load', function() {
        $(".updates.description").dotdotdot();
    });

    //$('a').imageLightbox();

    //$( selector ).imageLightbox(
    //    {
    //    selector:       'id="imagelightbox"',   // string;
    //    allowedTypes:   'png|jpg|jpeg|gif',     // string;
    //    animationSpeed: 250,                    // integer;
    //    preloadNext:    true,                   // bool;            silently preload the next image
    //    enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
    //    quitOnEnd:      false,                  // bool;            quit after viewing the last image
    //    quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
    //    quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
    //    onStart:        false,                  // function/bool;   calls function when the lightbox starts
    //    onEnd:          false,                  // function/bool;   calls function when the lightbox quits
    //    onLoadStart:    false,                  // function/bool;   calls function when the image load begins
    //    onLoadEnd:      false                   // function/bool;   calls function when the image finishes loading
    //});

    // Infinite Scroll
    container.infinitescroll({
        navSelector  : '#page-nav',    // selector for the paged navigation
        nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
        itemSelector : '.box',     // selector for all items you'll retrieve
        loading: {
            finishedMsg: 'No more pages to load.',
            img: 'http://i.imgur.com/6RMhx.gif'
            }
        },
        // trigger Masonry as a callback
        function( newElements ) {
            // hide new items while they are loading
            var $newElems = $( newElements ).css({ opacity: 0 });
            // ensure that images load before adding to masonry layout
            $newElems.imagesLoaded(function(){
              // show elems now they're ready
              $newElems.animate({ opacity: 1 });
              $container.masonry( 'appended', $newElems, true );
        });
    });
});

function adjustItems(width) {
	width = parseInt(width);
	var elements = getElementsByClassName(document, "item"), n = elements.length;
   	var elements2 = getElementsByClassName(document, "item w2"), n2 = elements2.length;
   	var elements3 = getElementsByClassName(document, "img-container"), n3 = elements3.length;
   	var elements4 = getElementsByClassName(document, "pw2"), n4 = elements4.length;
    var elements5 = getElementsByClassName(document, "ideaLink"), n5 = elements5.length;
    var elements6 = getElementsByClassName(document, "ideaLink w2"), n6 = elements6.length;
    var elements7 = getElementsByClassName(document, "item-buttons-w2"), n7 = elements7.length;

	if (width < 480) {
   		for (var i = 0; i < n; i++) {
		    var e = elements[i];
		    e.style.width=width*.45 + "px";
		    e.style.height=width*.45 + "px";
		    // e.style.marginLeft=width*0.05 + "px";
		    // e.style.marginRight=width*0.05 + "px";
		    // e.style.marginBottom = 0;
		    // e.style.marginRight = 0;
		    e.style.margin=width*0.025 + "px";
		}
		for (var i = 0; i < n2; i++) {
		    var e2 = elements2[i];
		    e2.style.width=width*.95 + "px";
		    e2.style.height=width*.45 + "px";
		}
		for (var i = 0; i < n3; i++) {
		    var e3 = elements3[i];
		    e3.style.width=width*.45 + "px";
		    e3.style.height=width*.45 + "px";
		}
		for (var i = 0; i < n4; i++) {
		    var e4 = elements4[i];
		    e4.style.width=width*.40 + "px";
		    e4.style.height=width*.40 + "px";
		}
    for (var i = 0; i < n5; i++) {
        var e5 = elements5[i];
        e5.style.width=width*.40 + "px";
        e5.style.height=width*.33 + "px";
    }
    for (var i = 0; i < n6; i++) {
        var e6 = elements6[i];
        e6.style.width=width*.90 + "px";
        e6.style.height=width*.33 + "px";
    }
    for (var i = 0; i < n7; i++) {
        var e7 = elements7[i];
        e7.style.left = width*.45 + 32 + "px";
    }
  } else {
    for (var i = 0; i < n; i++) {
		    var e = elements[i];
		    e.style.width=220 + "px";
		    e.style.height=220 + "px";
		    e.style.margin=10 + "px";
		}
		for (var i = 0; i < n2; i++) {
		    var e2 = elements2[i];
		    e2.style.width=460 + "px";
		    e2.style.height=220 + "px";
		}
		for (var i = 0; i < n3; i++) {
		    var e3 = elements3[i];
		    e3.style.width=220 + "px";
		    e3.style.height=220 + "px";
		}
		for (var i = 0; i < n4; i++) {
		    var e4 = elements4[i];
		    e4.style.width=220 + "px";
		    e4.style.height=220 + "px";
		}
    for (var i = 0; i < n5; i++) {
        var e5 = elements5[i];
        e5.style.width=190 + "px";
        e5.style.height=170 + "px";
    }
    for (var i = 0; i < n6; i++) {
        var e6 = elements6[i];
        e6.style.width=430 + "px";
        e6.style.height=170 + "px";
    }
    for (var i = 0; i < n7; i++) {
        var e7 = elements7[i];
        e7.style.left = 255 + "px";
    }
    	$("stylesheet").attr("href", "/assets/home.css.scss");
    }
}

function getElementsByClassName(node,classname) {
  if (node.getElementsByClassName) { // use native implementation if available
    return node.getElementsByClassName(classname);
  } else {
    return (function getElementsByClass(searchClass,node) {
        if ( node == null )
          node = document;
        var classElements = [],
            els = node.getElementsByTagName("*"),
            elsLen = els.length,
            pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)"), i, j;

        for (i = 0, j = 0; i < elsLen; i++) {
          if ( pattern.test(els[i].className) ) {
              classElements[j] = els[i];
              j++;
          }
        }
        return classElements;
    })(classname, node);
  }
}

function updateCountdown() {
    // 140 is the max message length
    var remaining = 140 - jQuery('#idea_blurb').val().length;
    jQuery('#idea-countdown').text(remaining)
    //.text(remaining + ' characters remaining');
}

jQuery(document).ready(function($) {
  if ($('#idea_blurb').length) {
    updateCountdown();
    $('#idea_blurb').change(updateCountdown);
    $('#idea_blurb').keyup(updateCountdown);
  }
});

function expandTick(updateid){
    var updates_tick = document.getElementsByClassName("updates tick " + updateid)[0];
    var updates_desc = document.getElementsByClassName("updates description " + updateid)[0];
    if (updates_tick.style["maxHeight"] == "50px" || updates_tick.style["maxHeight"] == "") { // TODO fix this max-height hack
        var content = $(".updates.description").triggerHandler("originalContent");
        $(".updates.description." + updateid + ".p").append(content);
        $(".updates.description." + updateid).trigger("destroy");
        updates_tick.style["maxHeight"]="500px";
        updates_desc.style["maxHeight"]="500px";
    } else {
        updates_tick.style["maxHeight"]="50px";
        updates_desc.style["maxHeight"]="50px";
        $(".updates.description." + updateid).dotdotdot();
    }
};


