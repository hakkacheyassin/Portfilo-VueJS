import { namesRef } from "../../firebase.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitInput(e) {
        let domId = document.getElementById; 
      namesRef.push({
        name: this.name,
        email: this.email,
        message: this.message,
        edit: false,
      });

      this.name = '';
      this.email = '';
      this.message = '';

      e.preventDefault();

    },
  },
};
