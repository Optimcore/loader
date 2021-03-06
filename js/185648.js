(function() {

  // var scripts = document.getElementsByTagName('script');
  // var parser = document.createElement('a');
  // parser.href = scripts[scripts.length-1].src;
  // var path = parser.pathname;
  // var a = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));

  var scripts = document.getElementsByTagName('script');
  var url = scripts[scripts.length - 1].src;
  var a = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));

  // console.log('a: '+a);

  /**
   * basic validation
   */
  if (isNaN(a)) {
    return;
  }

  /**
   * load experiment settings
   */
  document.write('<s'+'cript src="//www.optimcore.com/deploy/v1/settings.js?a='+a+'&url='+encodeURIComponent(document.URL)+'&random='+Math.random()+'" type="text/javascript">'+'<\/s'+'cript>');

  /**
   * load jQuery (if not already loaded)
   */
  if (typeof window.jQuery === "undefined") {
    document.write('<s'+'cript src="//code.jquery.com/jquery-1.4.2.min.js" type="text/javascript">'+'<\/s'+'cript>');
  }

  /**
   * load Optimcore
   */
  document.write("<script type=\"text/javascript\">if (\"boolean\" == typeof(_op_cor_settings_loaded)) { document.write('<s'+'cript src=\"//code.optimcore.com/optcor.js\" type=\"text/javascript\">'+'</s'+'cript>'); }</script>");

  /**
   * initialise Optimcore
   */
  document.write('<s'+'cript type="text/javascript">if ("boolean" == typeof(_op_cor_settings_loaded) && "function" == typeof(_op_cor_top_initialize)) { _op_cor_top_initialize(); opc_$(document).ready(function() { _op_cor_bottom_initialize(); }); }<\/s'+'cript>');

})();