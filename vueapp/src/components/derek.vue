<template>
	<body class="theBody">
   		<div class="derek" id="theDiv">
        		<h1> <a href="https://bootstrap-vue.js.org/docs/components/dropdown/">Derek</a></h1>
   			
		</div>
		<div>
			<h2>Count: {{count}} </h2>
			<b-progress :value="count" :max="max" show-progress animated></b-progress>
		</div>
 

<div>
  <b-dropdown id="ddown1"  text="This is a dropdown menu" class="m-md-2">
    <b-dropdown-item-button v-on:click="count++">Add One </b-dropdown-item-button>
    <b-dropdown-item-button v-on:click="count--">Subtract One</b-dropdown-item-button>
    <b-dropdown-item-button v-on:click="count = 0">Reset</b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item disabled>Pointless Button</b-dropdown-item>
  </b-dropdown>
</div>


	</body>
</template>





<script>
    export default {
        name: 'derek',
        data () {
		return{
		count: 0,
		max:10	
		
            }
        },
        methods: {

        },
        
    }

</script>

<style scoped>
    .contacted {
        text-decoration: line-through	
    } 


    h1 {
        text-align: center
    }

    .derek {
	background-color: blue
      }
	
    .stuff {
	background-color: green
    }

</style>
