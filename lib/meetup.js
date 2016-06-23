'use strict';

  var weekdays = ['Sunday', "Monday", "Tuesday", 
                   "Wednesday","Thursday", "Friday",
                   "Saturday"];
function Meetup(month,year){
  this.firstday = new Date(year,month);
  this.getDay = function(day,ahead,check){
   	let teen = this.firstday;
    if(check && this.firstday.getMonth() != 1){
    	ahead += 3;
    }
    teen.setDate(this.firstday.getDate() + ahead);
	  while(true){
	    if(weekdays[teen.getUTCDay()]
	     === day ){
        return teen;
	    }
	    teen.setDate(teen.getDate() + 1);
	  }
  }


}

  // for(var i = 0; i < weekdays.length; i++) {
  //  	Meetup.prototype["first" + weekdays[i]] = function(){ return this.getDay(weekdays[i],0);}
  //  	Meetup.prototype["second" + weekdays[i]] = function(){ return this.getDay(weekdays[i],7);}
  //  	Meetup.prototype["third" + weekdays[i]] = function(){ return this.getDay(weekdays[i],14);}
  //  	Meetup.prototype["fourth" + weekdays[i]] = function(){ return this.getDay(weekdays[i],20);}
  // }

Meetup.prototype.monteenth = function(){
	return this.getDay("Monday",12);
}

Meetup.prototype.tuesteenth = function(){
	return this.getDay("Tuesday",12);
}

Meetup.prototype.wednesteenth = function(){
	return this.getDay("Wednesday",12);
}

Meetup.prototype.thursteenth = function(){
	return this.getDay("Thursday",12);
}

Meetup.prototype.friteenth = function(){
	return this.getDay("Friday",12);
}

Meetup.prototype.saturteenth = function(){
	return this.getDay("Saturday",12);
}

Meetup.prototype.sunteenth = function(){
	return this.getDay("Sunday",12);
}

Meetup.prototype.firstMonday = function(){
  return this.getDay("Monday",0);
}

Meetup.prototype.firstTuesday = function(){
  return this.getDay("Tuesday",0);
}

Meetup.prototype.firstWednesday = function(){
  return this.getDay("Wednesday",0);
}

Meetup.prototype.firstThursday = function(){
  return this.getDay("Thursday",0);
}

Meetup.prototype.firstFriday = function(){
  return this.getDay("Friday",0);
}

Meetup.prototype.firstSaturday = function(){
  return this.getDay("Saturday",0);
}

Meetup.prototype.firstSunday = function(){
  return this.getDay("Sunday",0);
}

Meetup.prototype.secondMonday = function(){
	return this.getDay("Monday",7);
}

Meetup.prototype.secondTuesday = function(){
	return this.getDay("Tuesday",7);
}

Meetup.prototype.secondWednesday = function(){
	return this.getDay("Wednesday",7);
}

Meetup.prototype.secondThursday = function(){
	return this.getDay("Thursday",7);
}

Meetup.prototype.secondFriday = function(){
	return this.getDay("Friday",7);
}

Meetup.prototype.secondSaturday = function(){
	return this.getDay("Saturday",7);
}

Meetup.prototype.secondSunday = function(){
	return this.getDay("Sunday",7);
}

Meetup.prototype.thirdMonday = function(){
	return this.getDay("Monday",14);
}

Meetup.prototype.thirdTuesday = function(){
	return this.getDay("Tuesday",14);
}

Meetup.prototype.thirdWednesday = function(){
	return this.getDay("Wednesday",14);
}	

Meetup.prototype.thirdThursday = function(){
	return this.getDay("Thursday",14);
}	

Meetup.prototype.thirdFriday = function(){
	return this.getDay("Friday",14);
}

Meetup.prototype.thirdSaturday = function(){
	return this.getDay("Saturday",14);
}

Meetup.prototype.thirdSunday = function() {
	return this.getDay("Sunday",14);
};

Meetup.prototype.fourthMonday = function(){
	return this.getDay("Monday",21);
}

Meetup.prototype.fourthTuesday = function(){
	return this.getDay("Tuesday",21);
}

Meetup.prototype.fourthWednesday = function(){
	return this.getDay("Wednesday",21);
}	

Meetup.prototype.fourthThursday = function(){
	return this.getDay("Thursday",21);
}

Meetup.prototype.fourthFriday = function(){
	return this.getDay("Friday",21);
}

Meetup.prototype.fourthSaturday = function(){
	return this.getDay("Saturday",21);
}

Meetup.prototype.fourthSunday = function() {
	return this.getDay("Sunday",21);
};

Meetup.prototype.lastMonday = function(){
	return this.getDay("Monday",21,true);
}

Meetup.prototype.lastTuesday = function(){
	return this.getDay("Tuesday",21,true);
}

Meetup.prototype.lastWednesday = function(){
	return this.getDay("Wednesday",21,true);
}	

Meetup.prototype.lastThursday = function(){
	return this.getDay("Thursday",21,true);
}

Meetup.prototype.lastFriday = function(){
	return this.getDay("Friday",21,true);
}

Meetup.prototype.lastSaturday = function(){
	return this.getDay("Saturday",21,true);
}

Meetup.prototype.lastSunday = function() {
	return this.getDay("Sunday",21,true);
};




























