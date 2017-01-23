import Ember from 'ember';
import SparkPageControllerMixin from 'ember-sparks-web/mixins/spark-page-controller-mixin';

import styleClasses from 'ember-select-spark/components/select-spark/styles';

export default Ember.Controller.extend(SparkPageControllerMixin, {
  styleClasses,

  options: [
    {
      value: 'uk',
      label: "United Kingdom",
    },
    {
      value: 'se',
      label: "Sweden",
    },
    {
      value: 'fr',
      label: "France",
    },
  ],

});

