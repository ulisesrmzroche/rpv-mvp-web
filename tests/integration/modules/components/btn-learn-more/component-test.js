import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('btn-learn-more', 'Integration | Component | btn learn more', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{btn-learn-more}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#btn-learn-more}}
      template block text
    {{/btn-learn-more}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
