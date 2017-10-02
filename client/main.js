import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
<<<<<<< HEAD
=======
import { testEnvLog } from 'testEnv';
>>>>>>> f983ff4d159b3753e327d076449578906d4f02ea

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
<<<<<<< HEAD
=======
    testEnvLog(); // > logged from module 'testEnv'
>>>>>>> f983ff4d159b3753e327d076449578906d4f02ea
    instance.counter.set(instance.counter.get() + 1);
  },
});
