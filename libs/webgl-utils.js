/*
 * WebGL Utils
 * Helper functions for WebGL context creation and initialization.
 */
window.WebGLUtils = {
  setupWebGL: function(canvas, opt_attribs, opt_onError) {
    function handleCreationError(msg) {
      if (opt_onError) {
        opt_onError(msg);
      }
      var container = canvas.parentNode;
      if (container) {
        var str = window.WebGLRenderingContext ? 
          'The browser seems to support WebGL, but failed to initialize it.' :
          'The browser does not seem to support WebGL.';
        if (window.WebGLRenderingContext) {
          str += ' Please check your GPU settings or driver update.';
        }
        container.innerHTML = '<div style="margin: auto; width:500px; font-weight:bold; margin-top:20px; color:red;">' + str + '</div>';
      }
      return null;
    }

    if (!window.WebGLRenderingContext) {
      handleCreationError("WebGL not supported");
      return null;
    }

    var context = create3DContext(canvas, opt_attribs);
    if (!context) {
      if (!handleCreationError()) {
        throw new Error("WebGL not supported");
      }
    }
    return context;
  }
};

function create3DContext(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch(e) {}
    if (context) {
      break;
    }
  }
  return context;
}
