const app = Vue.createApp({
  // Also works:  template: "<h1>Hello World {{firstName}}<h1/>",
  data() {
    return {
      firstName: "Sakata",
      lastName: "Gintoki",
      email: "Gintoki@gmail.com",
      gender: "male",
      picture:
        "https://pbs.twimg.com/profile_images/731462042662494208/lhxjirl-_400x400.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      //console.log(results);

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email  
      this.gender = results[0].gender
      this.picture = results[0].picture.large
results[0]        
    },
  },
});

app.mount("#app");
