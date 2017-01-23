import Ember from 'ember';
import layout from './template';
import styles from './styles';

import SparkComponent from 'ember-sparks/components/spark-component';

const {
  computed
} = Ember;

export default SparkComponent.extend({
  layout,
  styles,

  _selectOptions: computed('options', function() {
    let options = this.get('options');

    let isHashArr = (typeof options[0] === "object");

    // Already in the right format:
    if (isHashArr) {
      return options;
    }

    /*
     * If it's just an array of strings,
     * we convert them into objects!
     */
    let hashOptions = [];

    options.forEach((label) => {
      let optionObj = {
        value: label,
        label: label,
      };

      hashOptions.push(optionObj);
    });

    return hashOptions;
  }),

  actions: {

    onChange(e) {
      let value = e.target.value;

      this.sendAction('onChange', value, ...arguments);
    },

  },

});
