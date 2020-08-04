

 const event = {
     name: 'Birthday party',
     guestList: ['Ihab', 'Mosab', 'Hamoodeh'],
     printGuesList() {
         console.log(`Guest list for ${this.name}`);
         this.guestList.forEach((guest) => {
             console.log(`${guest} is attending ${this.name}`)
         });
     }
 }

 event.printGuesList();