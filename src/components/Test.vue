<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >

    <v-card-title>
     A Test Card
    </v-card-title>

    <v-card-subtitle>
      Where we are doing all test
    </v-card-subtitle>

    <v-card-actions>
        <Dialog activatorname="Edit" title="A Test Edit Dialog" v-bind:fields="fields" v-bind:models="models" @save="onSave"></Dialog>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
import { GlobalMixin } from '../mixins/globalmixin'
import Dialog from './Dialog';
  export default {
    name:'Test',
    mixins:[GlobalMixin],
    components: {
        Dialog
    },
    mounted(){
      this.log(this.getRandomNumber(1,100));
    },
    data: () => ({
      show: false,
      models: {
                name: '',
                email: '',
                gender: '',
                aggree: false
            },
            fields: [
                {
                    type: 'v-text-field',
                    text: 'Name',
                    model_id: 'name',
                    rules: [v => !!v || 'Name is required',v => (v && v.length <= 5) || 'Name must be less than 4 characters'],
                    required: true,
                    disabled: false,
                }, 
                {
                    type: 'v-text-field',
                    text: 'Email',
                    model_id: 'email',
                    rules: [v => !!v || 'E-mail is required',v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
                    required: true,
                    disabled: false,
                },
                {
                    type: 'v-select',
                    text: 'Gender',
                    items: ['male', 'female'],
                    model_id: 'gender',
                    rules: [v => !!v || 'You must select a Gender'],
                    required: true,
                    disabled: false,
                },  
                {
                    type: 'v-checkbox',
                    text: 'Agree',
                    model_id: 'aggree',
                    rules: [v => !!v || 'You must agree'],
                    required: true,
                    disabled: false,
                }
            ] 
    }),
    methods: {
    onSave(data) {
      alert('valid form data'+JSON.stringify(data));
    }
  },
  }
</script>