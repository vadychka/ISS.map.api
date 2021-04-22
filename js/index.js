
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

     // Time

   const getTime = () => {
      let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
         'Thursday', 'Friday', 'Saturday']
      let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',
         'Sept', 'Oct', 'Nov', 'Dec']
      let time = new Date

      let fintDayFromDate = (arr) => {
         let thisDay = time.getDay()
         return arr[thisDay]
      }

      let findMonthFronDate = (arr) => {
         let thisMonth = time.getMonth()
         return arr[thisMonth]
      }

      const blockForTime = document.getElementById('header__time')
      const blockForDate = document.getElementById('header__date')

      blockForTime.innerHTML = 'Current UTC time: ' + time.getHours() + ':' + time.getMinutes() + ':'
         + time.getSeconds()

      blockForDate.innerHTML = fintDayFromDate(daysOfWeek) + ' '
         + time.getDate() + " " + findMonthFronDate(months) +
         ' ' + time.getFullYear()
   }

   getTime()

   // Toster

   let toster = document.querySelector('#toster')
   toster.classList.remove('toster--show')

   toster.addEventListener('click', () => {
      toster.classList.add('toster--show')
   })

   setTimeout(() => {
      toster.classList.add('toster--show')
   }, 2000)

   
   
   // Map

   const getLocationForMap = async () => {
      const getApi = await fetch('http://api.open-notify.org/iss-now.json');
      const getLocation = await getApi.json();
      let latitude = getLocation.iss_position.latitude
      let longitude = getLocation.iss_position.longitude

      function initMap(latitude, longitude) {
         const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: { lat: +latitude, lng: +longitude }
         });
         new google.maps.Marker({
            position: { lat: +latitude, lng: +longitude },
            map,
         });
      }
      initMap(latitude, longitude)
   }

   getLocationForMap()


}, 5000)


// People in ISS

const peopleInIss = () => {
   const blockForInform = document.querySelector('.main__RightContainer')
   const getInform = async () => {
      const getApi = await fetch('http://api.open-notify.org/astros.json');
      const getPeople = await getApi.json();
      let count = 0
      getPeople.people.map(el => {
         const listEl = document.createElement('p');
         listEl.innerHTML = "<img src = 'https://img.icons8.com/material-rounded/48/000000/user-male-circle.png'>"
         const listText = document.createElement('p')
         listText.innerHTML = el.name
         listEl.appendChild(listText)
         listText.style.display = 'flex';
         listText.style.alignItems = 'center'
         listEl.classList.add('listItem')
         blockForInform.append(listEl)
         count += 1

      })
      const listTotalPeople = document.createElement('p');
      listTotalPeople.style.borderTop = '2px solid black';
      listTotalPeople.style.margin = ' 0em -0.5em';
      listTotalPeople.style.padding = '0.5em';
      listTotalPeople.style.textAlign = 'center';

      listTotalPeople.append('Total amount: ' + count + ' people on ISS')
      count = 0;
      blockForInform.append(listTotalPeople)

   }
   getInform()
}

peopleInIss()











