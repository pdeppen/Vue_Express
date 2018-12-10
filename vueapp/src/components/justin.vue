
<template>


  <div>
   <h1>Justin</h1>
        <p class="yeah">	yeah it is</p>
        
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls = "true"
                indicators = "true"
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide caption="Some Nice Mountains"
                        text="First"
                        img-src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></b-carousel-slide>


      <b-carousel-slide caption="Space"
                        img-src="http://www.esa.int/var/esa/storage/images/esa_multimedia/images/2013/02/the_heart_nebula/12512835-1-eng-GB/The_Heart_nebula_node_full_image_2.jpg"
      ></b-carousel-slide>


      <b-carousel-slide  caption="Absolute Unit"
                        img-src="https://pixel.nymag.com/imgs/fashion/daily/2018/11/26/27-knickers-giant-steer.w700.h467.jpg">
      </b-carousel-slide>



    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
    
        <div class = "container">
            <h2>Image Sources</h2>
            <ul class="list-group">
                <li v-for="path in paths" class = "list-group-item">
                    <b>Id:</b> {{path.id}} <b>Source:</b> {{path.path}} 
                </li>
            </ul>
        </div>
        
        
    <!-- Footer -->
    <mdb-footer color="blue" class="font-small pt-4 mt-4">
      <mdb-container class="text-left">
        <mdb-row>
          <mdb-col sm="6">
            <h5 class="title">Footer</h5>
            <p>This is a footer</p>
          </mdb-col>
          <mdb-col sm="6">
            <h5 class="title">Links</h5>
            <ul>
              <li class="list-unstyled"><a href="http://157.160.36.106:8081/Users">Users</a></li>
              <li class="list-unstyled"><a href="http://157.160.36.106:8081/">Philip</a></li>
              <li class="list-unstyled"><a href="http://157.160.36.106:8081/derek">Derek</a></li>
              <li class="list-unstyled"><a href="http://157.160.36.106:8081/tyler">Tyler</a></li>
            </ul>

          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2018 Copyright: <a href="http://157.160.36.106:8081/justin#!"> http://157.160.36.106:8081 </a>
        </mdb-container>
      </div>
    </mdb-footer>
    <!-- Footer -->

  </div>
  
</template>




<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
name: 'justin',
  data () {
    return {
      path: 'abc',
      id: '1',
      slide: 0,
      sliding: null,
      paths: []
    }
  },
  methods: {
    onSlideStart (slide) {
      console.log('onSlideStart', slide)
      this.sliding = true
    },
    onSlideEnd (slide) {
      console.log('onSlideEnd', slide)
      this.sliding = false
    },
    refreshImages() {
      AuthenticationService.displayImages()
      .then(response => (this.paths = response.data))
      .catch(response => console.log(response))
     }
    
  },
    /* this happens when page is loaded */
    mounted () {
        this.refreshImages()
    }
  

}
</script>


<style scoped>
    .contacted {
        text-decoration: line-through
    }

    h1 {
        text-align: center
    }
    	
    .yeah {
	  background-color: yellow
    }

</style>
