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
          this.boxAClicked = this.boxAClicked ? false : true
          break
        case 'B':
          this.boxBClicked = this.boxBClicked ? false : true
          break
        case 'C':
          this.boxCClicked = this.boxCClicked ? false : true
          break
      }
    }
  }
});

app.mount('#styling');
