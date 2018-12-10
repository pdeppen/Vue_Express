<template>

        <body class="theBody">
         <div class="container">
    <a href="#" title="Click The Buttons Below" data-toggle="popover" data-trigger="hover" data-content="Some content" class = "red-tooltip">Hover Over Me For Advice</a>

</div>
                <div class="Tyler" id="theDiv">
                        <h1> <a>Tyler</a></h1>
                </div>
               <div class="tyler">
                <!-- for loop -->
        <li v-for="text in textFromDB" class = "list-group-item">
            <button @click="buttonFunction(text.text)" class = "btn btn-default btn-block">Click me: I contain database stuff </button>
        </li>
    </div>

 

<div class="container-fluid bg-1 text-center">
  <h3 class="margin">The Buttons Have</h3>
  <img src="https://www.insightsintoimpact.com/wp-content/uploads/2018/01/database-graphic-hi-res.jpg" class="img-responsive img-circle margin" style="display:inline"  width="850" height="350">
  <h3>Information Inside Them</h3>
</div>


<br>
<br>
<br>
<br>
  <div class="container">
  <h2>This Is How The Database Is Set Up</h2>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Database Name: project_db</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>This is the first row from the database</td>
      </tr>
      <tr>
       <td> This text is from the database text</td>
      </tr>
    </tbody>
  </table>
</div>

<br>
<br>
<br>
<br>

	
</div>
        </body>
</template>
<script>
    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        name: 'tyler',
        data () {
            return {
                textFromDB: []
            }
        },
        methods: {
            displayText() {
                AuthenticationService.tylerDisplayText()
                    .then(response => this.textFromDB = response.data)
                    .catch(response => console.log(response))
            },
            buttonFunction(text) {
                alert(text)
            }
            
            
        },
        mounted () {
            this.displayText()
        }
    }
    

</script>

<style scoped>
    .contacted {
        text-decoration: line-through
    }

    .Tyler {
        background-color: coral
    }
    .btn {
      background-color:DeepSkyBlue
}

    h1 {
        text-align: center
    }
  body {
    background-color: coral
}
  .red-tooltip {
   background-color:white
 }
.body {
  padding-top: 20px;
}
 
</style>


