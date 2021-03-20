// @ts-check

// BEGIN (write your solution here)
// @ts-check

class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  hasProfessionalAccess() {
    return this.user.isAdmin();
  }

  hasPremiumAccess() {
    return this.user.isAdmin();
  }
}

export default FakeSubscription;
// END
