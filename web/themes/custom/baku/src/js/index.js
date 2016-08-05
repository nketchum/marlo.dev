window.onload = function() {
  /**
   * Inline form field labels
   * @return void
   */
  function inFieldLabels(ele) {
    require('../../node_modules/jquery.infieldlabel/lib/jquery.infieldlabel');
    jQuery(ele).inFieldLabels();
  }
  inFieldLabels("label");

};
