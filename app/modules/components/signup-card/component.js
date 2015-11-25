import Ember from 'ember';

export default Ember.Component.extend({
  providers: Ember.computed(function(){
    return [
      Ember.Object.create({ name: "Facebook" }),
      Ember.Object.create({ name: "Twitter"}),
      Ember.Object.create({ name: "Google"}),
    ]
  }),
  actions: {
    signupWith(provider){
      this.attrs.save({provider: provider});
    }
  }
});
