
setInterval(() => {

   // Location

   const mcsLocation = async () => {
      const mscBlock = document.getElementById('headre__mcsLocation')

      const getLocation = async () => {
         const getApi = await fetch('http://api.open-notify.org/iss-now.json');
         const getLocation = await getApi.json();
         let latitude = getLocation.iss_position.latitude
         let longitude = getLocation.iss_position.longitude

         mscBlock.innerHTML = ' latitude ' + latitude + ' longitude ' + longitude
      }

      getLocation()
   }

   mcsLocation()


}, 5000)










