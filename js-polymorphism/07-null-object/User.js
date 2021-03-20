// @ts-check

import FakeSubscription from './FakeSubscription.js';

class User {
  constructor(email, currentSubscription = null) {
    this.email = email;
    // BEGIN (write your solution here)
    if (currentSubscription === null) {
      this.currentSubscription = new FakeSubscription(this);
    } else {
      this.currentSubscription = currentSubscription;
    }
    // END
  }

  getCurrentSubscription() {
    return this.currentSubscription;
  }

  isAdmin() {
    return this.email === 'rakhim@hexlet.io';
  }
}

export default User;
