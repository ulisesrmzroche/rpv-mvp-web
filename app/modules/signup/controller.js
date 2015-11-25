import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function(provider){
      let user = this.get('model.newUser')
      return user.save().then((user)=>{
        console.log(user, provider)
      })
    }
  }
});
