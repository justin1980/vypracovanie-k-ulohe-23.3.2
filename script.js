//vytvorenie classy filmy 

class Movie {
      constructor(name, year, actors){
          this.name = name;
          this.year = year;
          this.actors = actors || [];
      }
      
  
      printDetail() {
          console.log(`Nazov: ${this.name}`);
          console.log(`Rok: ${this.year}`);    
          console.log(`Herci:`);   
          this.actors.forEach(actors => console.log(actors)); 
      }
  
      printLongestActor() {
      //vytvorenie premenej na zistenie najdlhsieho slova
          let najdlhsieSlovo = "";
          let najdlhsiaHodnota = 0;
  
         // vytvorenie for/of cyklu pre najdenie nadlhsieho slova z pola
  
          this.actors.forEach(function(slovo) {
              let dlzkaSlova = slovo.length;
              if (dlzkaSlova > najdlhsiaHodnota) {
                  najdlhsieSlovo = slovo;
                  najdlhsiaHodnota = dlzkaSlova;
              }
          });
  
      //vypisanie najdlhsieho mena
          console.log("Najdlhsie meno z autorov je:");
          console.log(najdlhsieSlovo);
          
      }
  }

  //vytvorenie tlacitka s funkciou zapisu z inputov do konzoly
  let button = document.getElementById("btn");
  button.addEventListener("click", function() {
      let title = document.getElementById("title").value;
      let year = document.getElementById("year").value;
      let actors = document.getElementById("actors").value.split(",").map(actor => actor.trim());
      
      let movie = new Movie(title, year, actors);
      movie.printDetail();
      movie.printLongestActor();
  });