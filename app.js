const app = Vue.createApp({
  data() {
    return {
      boxAClicked: false,
      boxBClicked: false,
      boxCClicked: false
    };
  },

  computed: {
    
  },

  watch: {

  },

  methods: {
    boxClicked(box) {
      switch(box) {
        case 'A':
          this.boxAClicked = true
          break
        case 'B':
          this.boxBClicked = true
          break
        case 'C':
          this.boxCClicked = true
          break
      }
    }
  }
});

app.mount('#styling');
