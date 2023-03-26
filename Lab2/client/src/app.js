function run() {
  new Vue({
    el: "#app",
    data: {
      users: [],
      usersService: null,
      formUserCity: "",
      formUserName: "",
    },
    created: async function () {
      this.usersService = users();
      //this.usersService.post({name:"TESST", city:"Cluj"}).then((response) => {this.users=response.data.data});
      this.usersService.get().then((response) => {
        this.users = response.data;
        console.log(this.users);
      });
    },
    methods: {},
  });
}
const button = document.getElementById("btnDeleteUser");
button.addEventListener("click", handleDeleteUser);

async function handleDeleteUser(event) {
  this.usersService = users();
  const userName = document.getElementById("userName").value;
  const user = { name: userName, city: "" };
  await this.usersService.deleteUser(user);
}

document.addEventListener("DOMContentLoaded", () => {
  run();
});
