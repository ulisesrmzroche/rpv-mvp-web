import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  store: Ember.inject.service(),
  model(){
    return RSVP.hash({
      newUser: this.store.createRecord('user')
    })
  },
});
