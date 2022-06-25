class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {

        if (!this.goals.hasOwnProperty(peak)) {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`
        }
        return `${peak} has already been added to your goals`
    }

    hike(peak, time, difficultyLevel) {

        let difference = this.resources - time;

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        if (difference * 10 < 0) {
            return "You don't have enough resources to complete the hike";
        }


        this.listOfHikes.push({ peak, time, difficultyLevel })
        this.resources -= time * 10;

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }

    rest(time) {
        let restTime = time * 10;
        if (restTime + this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            this.resources += restTime;
            return `You have rested for ${time} hours and gained ${restTime}% resources`;
        }
    }

    showRecord(criteria) {

        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`
        }

        let foundHikeIndex = this.listOfHikes.findIndex(c => c.criteria == criteria);

        if (foundHikeIndex == -1) {
            return `${this.username} has not done any ${criteria} hiking yet`
        }
        if (criteria == "all") {
            console.log("All hiking records:");
            for (let hike of this.listOfHikes) {
                for (let [peak, time, difficultyLevel] of Object.entries(hike)) {
                    console.log(`${this.username} hiked ${peak} for ${time} hours`);
                }
            }
        }
    }
}


const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'all');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);

console.log(user.showRecord('all'));
