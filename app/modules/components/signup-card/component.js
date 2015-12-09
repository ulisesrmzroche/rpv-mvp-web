import Ember from 'ember';

export default Ember.Component.extend({
  providers: Ember.computed(function(){
    let providers = ["Facebook", "Twitter", "Google", "Email"].map((provider)=>{
      return Ember.Object.create({name: provider})
    })
    return providers;
  }),
  willSignupWithEmail: false,
  actions: {
    signupWith(provider){
      if (provider.get('name') === 'email') {
        return this._signupWithEmail()
      }

      this.createUser(provider)
    },
  },

  _signupWithEmail(){
    this.set('willSignupWithEmail', true);
  },

  _createUser(provider){
    let user = this.get('model.newUser')
    return user.save().then((user)=>{
      console.log(user, provider)
    })
  },

});
