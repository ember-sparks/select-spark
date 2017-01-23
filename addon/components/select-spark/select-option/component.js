import Ember from 'ember';
import layout from './template';

const {
  Component,
  computed,
} = Ember;

/* 
 * This component mostly exists just so that we can avoid
 * requiring ember-truth-helpers as a dependency for selected="true"
 */

export default Ember.Component.extend({
  layout,
  tagName: 'option',

  attributeBindings: [
    'value',
    'isSelected:selected',
  ],

  isSelected: computed('selectedValue', 'value', function() {
    let selectedValue = this.get('selectedValue');
    let value = this.get('value');

    return (selectedValue === value);
  }),

});

